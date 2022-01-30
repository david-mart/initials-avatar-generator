import {from} from 'nearest-color';
import stc from 'string-to-color';
import {ColorInput, readability} from 'tinycolor2';
import * as R from 'ramda';

/**
 * Color Palette
 */
export const defaultPalette: string[] = [
  '#dc2626',
  '#d97706',
  '#059669',
  '#2563eb',
  '#4f46e5',
  '#9333ea',
  '#db2777',
];

export const getBgColor = (
  name: string,
  colors: string[] = defaultPalette
): string => {
  const initial = stc(name);
  const color = from(colors)(initial);
  return color;
};

export const getFontColor = (background: ColorInput) =>
  R.pipe<ColorInput[][], ColorInput[], ColorInput[], string>(
    R.sortBy<ColorInput>(v => readability(v, background)),
    R.reverse,
    R.head
  )(['#000', '#FFF']);

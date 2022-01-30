import {IAGConfig} from './config';
import * as R from 'ramda';
import {draw, getBgColor} from '.';

export const getInitials = (maxLetters = 3) =>
  R.pipe<string[], string[], string[], string[], string, string>(
    R.split(' '),
    R.map<string, string>(R.head),
    R.take(maxLetters),
    R.join(''),
    R.toUpper
  );

/**
 * Generate avatar
 * @param name Full name to be split into initials
 * @param config Configuration
 * @example generate('Pavel Durov', { width: 300, palette: ['#d97706','#4f46e5','#9333ea'], maxLetters: 2, fontProportion: 0.6 })
 * @returns base64 encoded image
 */
export const generate = (name: string, config: IAGConfig = {}): Buffer => {
  const background = getBgColor(name, config.palette);
  // const fontColor = getFontColor(background);
  const initials = getInitials(config.maxLetters)(name);
  const canvas = draw(initials, {background});

  return canvas.toBuffer();
};

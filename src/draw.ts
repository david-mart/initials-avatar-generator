import * as path from 'path';
import * as fs from 'fs';
import {createCanvas, registerFont, Canvas} from 'canvas';
import * as R from 'ramda';

// const FAMILY = 'HarmonyOS Sans';
// const PATH = 'HarmonyOS_Sans_Regular.ttf';
const FAMILY = 'SFUIText-Light';
const PATH = 'SFUIText-Light.otf';

registerFont(path.resolve('src', 'assets', PATH), {
  family: FAMILY,
});

const circle = (ctx: CanvasRenderingContext2D, width = 100) => {
  ctx.beginPath();
  ctx.arc(width / 2, width / 2, width / 2, 0, 2 * Math.PI);
  ctx.fill();
};

const text = (
  ctx: CanvasRenderingContext2D,
  initials: string,
  width = 100,
  textProportion = 0.6
) => {
  let fontsize = width / 2.3;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'hanging';
  do {
    fontsize--;
    ctx.font = fontsize + 'px ' + FAMILY;
  } while (
    ctx.measureText(initials).width >
    width * R.clamp(0.2, 0.9, textProportion)
  );
  const height =
    ctx.measureText(initials).actualBoundingBoxDescent -
    ctx.measureText(initials).actualBoundingBoxAscent;

  ctx.fillText(initials, width / 2, width / 2 - height / 2);
};

export const draw = (
  initials: string,
  {
    background = '#000',
    fontColor = '#FFF',
    width = 200,
    fontProportion = 0.6,
  } = {}
): Canvas => {
  const canvas = createCanvas(width, width);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = background;
  circle(ctx, width);
  ctx.fillStyle = fontColor;
  text(ctx, initials, width, fontProportion);

  fs.writeFileSync(
    path.resolve('output', `${initials}.png`),
    canvas.toBuffer()
  );
  return canvas;
};

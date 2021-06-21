import { getValueAndUnit } from 'polished';

/**
 *
 *
 * @param {(string | number)} height
 * @param {(string | number)} fontSize
 * @returns {number}
 */

function getLineHeight(
  height: string | number,
  fontSize: string | number,
): number {
  const [heightValue, heightUnit] = getValueAndUnit(height.toString());
  const [fontSizeValue, fontSizeUnit] = getValueAndUnit(fontSize.toString());
  const PIXELS = 'px';

  if (heightUnit && heightUnit !== PIXELS) {
    throw new Error(`Unexpected \`height\` with '${heightUnit} units.`);
  }

  if (fontSizeUnit && fontSizeUnit !== PIXELS) {
    throw new Error(`Unexpected \`fontSize\` with '${fontSizeUnit} units.`);
  }

  return (heightValue as number) / (fontSizeValue as number);
}

export default getLineHeight;

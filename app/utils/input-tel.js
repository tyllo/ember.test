/**
 * Only number may be press
 * @param {JQuery} $input
 */
export default function inputTel($input) {
  return $input.keypress(isNumberKeyCode);
}

/**
 * @param {KeyboardEvent} event
 */
export function isNumberKeyCode(event) {
  const {keyCode} = event;
  const isNumber = keyCode >= 48 && keyCode <= 57; // 0-9
  const isKeyPad = keyCode >= 96 && keyCode <= 105;
  return isNumber || isKeyPad ? true : false;
}

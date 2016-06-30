/**
 * Only number may be press
 * @param  {<INPUT>} $input
 */
export default function inputTel($input) {
  return $input.keypress(isNumberKeyCode);
}

export function isNumberKeyCode({keyCode}) {
  var isNumber = keyCode >= 48 && keyCode <= 57; // 0-9
  var isKeyPad = keyCode >= 96 && keyCode <= 105;
  return isNumber || isKeyPad ? true : false;
}

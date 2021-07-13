function convertNumberWithComma(number) {
  let ret = '';
  let value = number;
  while (Math.floor(value / 1000) > 0) {
    ret = `,${value.toString()
      .slice(-3)}${ret}`;
    value = Math.floor(value / 1000);
  }
  return value + ret;
}

export {convertNumberWithComma};

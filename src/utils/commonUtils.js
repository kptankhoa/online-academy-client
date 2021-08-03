import jwt_decode from "jwt-decode";

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

function getTokenPayload() {
  const token = localStorage.getItem(process.env.REACT_APP_STORAGE_ACCESS_TOKEN);
  return token ? jwt_decode(token) : null;
}

export {convertNumberWithComma, getTokenPayload};

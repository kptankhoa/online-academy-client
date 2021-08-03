import jwt_decode from 'jwt-decode';
import parse from 'html-react-parser';

function convertNumberWithComma(number) {
  let ret = '';
  let value = number;
  while (Math.floor(value / 1000) > 0) {
    ret = `,${value.toString().slice(-3)}${ret}`;
    value = Math.floor(value / 1000);
  }
  return value + ret;
}

function getTokenPayload() {
  const token = localStorage.getItem(
    process.env.REACT_APP_STORAGE_ACCESS_TOKEN
  );
  return jwt_decode(token);
}

const renderDescription = (description) => {
  return typeof description === 'string' ? parse(description) : description;
};
export { convertNumberWithComma, getTokenPayload, renderDescription };

import jwt_decode from 'jwt-decode';

export const isStudent = () => {
  const token = localStorage.getItem(process.env.REACT_APP_STORAGE_ACCESS_TOKEN)
  if (token) {
    const decoded = jwt_decode(token);
    return decoded.type === "student";
  }
  return false;
}

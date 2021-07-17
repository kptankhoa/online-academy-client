import { parseJwt } from 'utils/auth';

export function getCurrentUser() {
  const accessToken = localStorage.getItem(
    process.env.REACT_APP_STORAGE_ACCESS_TOKEN
  );

  return !accessToken ? null : parseJwt(accessToken);
}

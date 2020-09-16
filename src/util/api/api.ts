import axios from 'axios';
import * as apiTypes from './apiTypes';

const instanceAxios = axios.create({
  baseURL: 'https://dev-api.dsm-dms.com',
  headers: { 'X-Device-Type': 'WEB' },
});

export const LoginReq = async (
  loginParams: apiTypes.authParamType,
): Promise<[number, apiTypes.loginResType]> => {
  const response = await instanceAxios.post(`/account/auth`, loginParams);
  return [response.status, response.data];
};

export const postCheckCodeReq = async (verifyCode: string): Promise<number> => {
  const response = await instanceAxios.post(``, {
    verifyCode,
  });
  return response.status;
};

export const signUpReq = async (
  signUpParams: apiTypes.authParamType,
): Promise<number> => {
  const response = await instanceAxios.post(`/account/signup`, {
    id: signUpParams.id,
    password: signUpParams.password,
  });
  console.log(response.status);
  return response.status;
};

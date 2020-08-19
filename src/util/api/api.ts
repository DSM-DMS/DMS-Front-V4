import axios from 'axios';
import * as apiTypes from './apiTypes';

const instanceAxios = axios.create({
  baseURL: 'https://dev-api.dsm-dms.com',
  // headers: { ' X-Device-Type ': 'WEB' },
});

export const getScheduleReq = async (
  date: string,
): Promise<apiTypes.scheduleType> => {
  const response = await instanceAxios.get(`/schedule/${date}`);
  return response.data;
};

export const getMealReq = async (
  date: string,
): Promise<[apiTypes.mealType, number]> => {
  const response = await instanceAxios.get(`/meal/${date}`);
  console.log(response.data);
  return [response.data, response.status];
};

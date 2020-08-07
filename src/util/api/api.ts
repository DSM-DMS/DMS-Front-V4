import axios from 'axios';
import * as apiTypes from './apiTypes';
const url = 'https://student.dsm-dms.com';

const instanceAxios = axios.create({
  baseURL: 'https://student.dsm-dms.com',
});

export const getScheduleReq = async (
  date: string,
): Promise<apiTypes.scheduleType> => {
  const response = await instanceAxios.get(`/schedule/${date}`);
  return response.data;
};

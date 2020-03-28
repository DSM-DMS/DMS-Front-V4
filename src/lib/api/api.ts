import axios from 'axios';
const url = 'https://student.dsm-dms.com';

export const getRequest = async (detailURL: string, requestData: any = '') => {
  try {
    const response = await axios.get(`${url}${detailURL}${requestData}`);
    return response;
  } catch (err) {
    return err;
  }
};

export const postRequest = async (detailURL: string, requestData: any = '') => {
  try {
    const response = await axios.post(`${url}${detailURL}`, {
      requestData,
    });
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const patchRequest = async (detailURL: string, requestData?: any) => {
  try {
    const response = await axios.patch(`${detailURL}${requestData}`);
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};

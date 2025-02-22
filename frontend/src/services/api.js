import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const getSocialServices = async (zip) => {
  const response = await apiClient.get('/social/search', { params: { zip } });
  return response.data;
};

export const scheduleAppointment = async (patientId, providerId, dateTime) => {
  const response = await apiClient.post('/appointments', { patientId, providerId, dateTime });
  return response.data;
};

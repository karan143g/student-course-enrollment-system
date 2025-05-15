import axios from 'axios';

const API_URL = 'https://localhost:7059/api/enrollment';

export const getEnrollments = () => axios.get(API_URL);
export const getEnrollment = (id) => axios.get(`${API_URL}/${id}`);
export const addEnrollment = (enrollment) => axios.post(API_URL, enrollment);
export const updateEnrollment = (id, enrollment) => axios.put(`${API_URL}/${id}`, enrollment);
export const deleteEnrollment = (id) => axios.delete(`${API_URL}/${id}`);

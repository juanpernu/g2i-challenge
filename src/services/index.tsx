import { axiosInstance } from '../utils';

export function getQuestions() {
  return axiosInstance.get(`?amount=10&difficulty=hard&type=boolean`);
}

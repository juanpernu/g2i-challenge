import axios from 'axios';
import { decode } from 'html-entities';

export const BASE_URL = 'https://opentdb.com/api.php';

export const axiosInstance = axios.create({
  baseURL: BASE_URL
});

export function formattQuestion(question: string) {
  const newString = decode(question);
  return newString;
}

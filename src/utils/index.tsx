import axios from 'axios';
import { decode } from 'html-entities';

export const axiosInstance = axios.create({
  baseURL: 'https://opentdb.com/api.php'
});

export function formattQuestion(question: string) {
  const newString = decode(question);
  return newString;
}

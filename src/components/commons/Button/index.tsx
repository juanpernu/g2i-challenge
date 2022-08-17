import { IButton } from '../../../types';

export const Button = ({ text, onClick }: IButton) => (
  <button
    type="button"
    className="w-full bg-blue-600 rounded-md p-2 inline-flex items-center justify-center text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
    aria-expanded="false"
    onClick={onClick}
  >
    {text}
  </button>
);

import { IText } from '../../../types';

export const Text = ({ children }: IText) => (
  <p className="text-slate-600 text-base my-2">{children}</p>
);

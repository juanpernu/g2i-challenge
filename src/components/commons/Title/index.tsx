import { ITitle } from '../../../types';

export const Title = ({ title }: ITitle) => (
  <h2 className="text-2xl font-semibold text-slate-800">{title}</h2>
);

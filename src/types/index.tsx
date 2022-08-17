export interface ITitle {
  title: string;
}

export interface IText {
  children: JSX.Element | string;
}

export interface IButton {
  text: string;
  onClick: () => void;
}

export interface ITriviaState {
  questions: IQuestion[];
  loading: boolean;
  answers: string[];
}

export interface IQuestion {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

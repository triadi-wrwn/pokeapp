export type ResponseList<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T;
};

export type SelectType = {
  label: string;
  value: string;
};

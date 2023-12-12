export type SelectProps = {
  options: { label: string; value: string }[];
  placeholder?: string;
  defaultValue?: { label: string; value: string };
  valueChange?: (e: any) => void;
};

export type Candidate = {
  label: string;
  value: string;
  data: any;
};

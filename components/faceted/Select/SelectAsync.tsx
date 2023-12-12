'use client';
import { AsyncPaginate } from 'react-select-async-paginate';

export type SelectAsyncProps = {
  value: string;
  placeholder?: string;
  loadOptions: any;
  onChange: (e: any) => void;
};

const SelectAsync = (props: SelectAsyncProps) => {
  const { value, placeholder, loadOptions, onChange, ...rest } = props;
  return (
    <AsyncPaginate
      {...rest}
      id="compare-poke"
      instanceId="react-select-poke"
      placeholder={placeholder}
      value={value}
      loadOptions={loadOptions}
      onChange={onChange}
      debounceTimeout={500}
      additional={{
        offset: 0,
        limit: 10,
      }}
      menuPlacement="auto"
    />
  );
};
SelectAsync.displayName = 'SelectAsync';
export default SelectAsync;

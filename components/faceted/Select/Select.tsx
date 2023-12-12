'use client';

import Select from 'react-select';
import { SelectProps } from './Select.type';

const ReactSelect = (props: SelectProps) => {
  const { options, placeholder, valueChange, defaultValue } = props;
  return (
    <Select
      instanceId="react-select"
      placeholder={placeholder}
      onChange={valueChange}
      options={options}
      menuPlacement="auto"
      defaultValue={defaultValue}
      isClearable
    />
  );
};

export default ReactSelect;

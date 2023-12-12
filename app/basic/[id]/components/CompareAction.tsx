'use client';

import { getPaginateSelectPokemon } from '@/services/pokemon.service';
import { SelectType } from '@/types/response.type';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';

const CompareAction = ({ currentId }: { currentId: string }) => {
  const router = useRouter();
  const [selected, setSelected] = useState<SelectType | null>(null);
  const handleChange = (val: SelectType | null) => {
    setSelected(val);
    if (val) {
      router.push(`../basic/compare/${currentId}?compareWith=${val.value}`);
    }
  };

  return (
    <AsyncPaginate
      id="compare-poke"
      instanceId="react-select-poke"
      placeholder="Select pokemon.."
      value={selected}
      loadOptions={getPaginateSelectPokemon}
      onChange={handleChange}
      debounceTimeout={500}
      additional={{
        offset: 0,
        limit: 10,
      }}
      menuPlacement="top"
      isSearchable={false}
    />
  );
};

export default CompareAction;

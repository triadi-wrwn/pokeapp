'use client';

import { Button } from '@/components/ui/button';
import { MY_POKE_KEY } from '@/lib/constants';
import { toStashedModel } from '@/services/pokemon.service';
import { addToStorage } from '@/services/storage.services';
import { Pokemon } from '@/types/pokemon.type';

export type ButtonActionProps = {
  detail: Pokemon;
};
const ButtonAction = (props: ButtonActionProps) => {
  const { detail } = props;
  const handleClick = () => {
    addToStorage(MY_POKE_KEY, toStashedModel(detail));
  };
  return (
    <Button variant="outline" onClick={handleClick}>
      Catch Pokemon !
    </Button>
  );
};

export default ButtonAction;

'use client';

import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { MY_POKE_KEY } from '@/lib/constants';
import { toStashedModel } from '@/services/pokemon.service';
import { addToStorage, getStorage } from '@/services/storage.services';
import { Pokemon, StashedPokemon } from '@/types/pokemon.type';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export type ButtonActionProps = {
  detail: Pokemon;
};
const ButtonAction = (props: ButtonActionProps) => {
  const { detail } = props;
  const searchParam = useSearchParams();
  const { toast } = useToast();
  const open = searchParam.get('open') || false;
  const [collected, setCollected] = useState(false);

  const handleClick = () => {
    addToStorage(MY_POKE_KEY, toStashedModel(detail));
    setCollected(true);
    toast({
      variant: 'primary',
      description: 'Pokemon added !',
      duration: 2000,
    });
  };

  useEffect(() => {
    const data: StashedPokemon[] = getStorage(MY_POKE_KEY);
    const exist = data.find((el) => el.name === detail.name);
    setCollected(!!exist);
  }, [open, detail.name]);

  return (
    <Button variant="default" onClick={handleClick} disabled={collected}>
      {collected ? 'Collected !' : 'Add To Collections'}
    </Button>
  );
};

export default ButtonAction;

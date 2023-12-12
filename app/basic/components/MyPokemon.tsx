'use client';

import Badge from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import capitalize from '@/lib/capitalize';
import { MY_POKE_KEY } from '@/lib/constants';
import { getStorage, setStorage } from '@/services/storage.services';
import { StashedPokemon } from '@/types/pokemon.type';
import { Cross2Icon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const MyPokemon = () => {
  const initData: StashedPokemon[] = getStorage(MY_POKE_KEY);
  const [pokemons, setPokemons] = useState<StashedPokemon[]>(initData);

  const { toast } = useToast();
  const handleRemove = (poke: StashedPokemon) => {
    setPokemons((state) => {
      const newState = [...state];
      const removedData = newState.filter((el) => el.id !== poke.id);
      setStorage(MY_POKE_KEY, removedData);
      return [...removedData];
    });
    toast({
      variant: 'primary',
      description: 'Pokemon removed !',
      duration: 2000,
    });
  };

  return (
    <div className="max-h-[80vh] overflow-auto pb-4">
      <div className="grid grid-cols-6 gap-4">
        {pokemons.length === 0 ? (
          <div className="text-center col-span-6">No Data</div>
        ) : (
          pokemons.map((poke) => (
            <div key={poke.id} className="group relative">
              <Button
                variant={'destructive'}
                size={'icon'}
                className="w-7 h-7 hidden group-hover:flex absolute right-0 top-0 transition-all ease-in-out duration-300"
                onClick={() => handleRemove(poke)}
              >
                <Cross2Icon />
              </Button>
              <Link href={`/basic/${poke.name}`}>
                <Card className="shadow-md hover:shadow-lg bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-green-200 to-green-300 transition-all ease-in-out duration-300">
                  <CardContent className="p-2 text-center">
                    <div className="w-full h-16 mx-auto mb-6 mt-2 bg-white flex items-center justify-center rounded-lg">
                      <Image
                        src={poke.image || ''}
                        alt="img"
                        width={90}
                        height={90}
                        className="mt-2"
                      />
                    </div>
                    <div className="font-bold mb-2 text-gray-600">
                      {capitalize(poke.name)}
                    </div>
                    <div className="flex items-center justify-center">
                      {poke.types.map((type) => (
                        <Badge
                          variant={type}
                          key={type}
                          className="text-xs mx-0"
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyPokemon;

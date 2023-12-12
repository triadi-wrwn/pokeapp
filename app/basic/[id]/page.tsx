import Badge from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import capitalize from '@/lib/capitalize';
import {
  getPokemonDetail,
  getPokemonSpecies,
  getPokemons,
} from '@/services/pokemon.service';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import ButtonAction from './components/ButtonAction';
import CompareAction from './components/CompareAction';
import StatDetail from './components/StatDetail';

const BasicDetail = async ({ params }: { params: { id: string } }) => {
  const detail = await getPokemonDetail(params.id);
  const species = await getPokemonSpecies(detail.species.url);
  const options = await getPokemons({ limit: 100000, offset: 0 });
  return (
    <>
      <div className="absolute top-8 left-8">
        <Link href={'../basic'}>
          <Button variant={'link'}>
            <ArrowLeftIcon width={50} height={50} />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 h-[calc(100vh-4rem)]">
        <div className="flex justify-center items-center">
          <div>
            <Image
              src={
                detail.sprites.other?.['official-artwork']?.front_default || ''
              }
              width={400}
              height={400}
              alt={detail.name}
            />
            <div className="font-bold text-3xl  text-center">
              {capitalize(detail.name)}
            </div>
            <div className="text-center mt-3">
              {detail.types.map((type) => (
                <Badge
                  variant={type.type.name}
                  key={type.slot}
                  className="!text-sm"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-11/12 m-auto">
          <StatDetail detail={detail} species={species} />
          <div className="text-center my-4">
            <ButtonAction detail={detail} />
          </div>
          <div>
            <div>Compare with :</div>
            <CompareAction currentId={detail.name} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicDetail;

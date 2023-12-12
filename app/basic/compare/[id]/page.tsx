import Badge from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import capitalize from '@/lib/capitalize';
import {
  getPokemonDetail,
  getPokemonSpecies,
} from '@/services/pokemon.service';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import ButtonAction from '../../[id]/components/ButtonAction';
import StatDetail from '../../[id]/components/StatDetail';

const ComparePage = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const compareWithId = searchParams['compareWith'] ?? params.id;
  const detail = await getPokemonDetail(params.id);
  const species = await getPokemonSpecies(detail.species.url);
  const comparedDetail = await getPokemonDetail(
    (Array.isArray(compareWithId) ? compareWithId[0] : compareWithId) ||
      params.id
  );
  const comparedSpecies = await getPokemonSpecies(comparedDetail.species.url);
  return (
    <>
      <div className="absolute top-8 left-8">
        <Link href={`../${params.id}`}>
          <Button variant={'link'}>
            <ArrowLeftIcon width={50} height={50} />
          </Button>
        </Link>
      </div>
      <div className="w-11/12 grid grid-cols-2 gap-8 h-full mx-auto">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-4">
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
          <StatDetail detail={detail} species={species} />
          <div className="text-center my-4">
            <ButtonAction detail={detail} />
          </div>
        </div>
        <div className="text-6xl absolute top-56 left-0 right-0 text-center">
          VS
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="mb-4">
            <Image
              src={
                comparedDetail.sprites.other?.['official-artwork']
                  ?.front_default || ''
              }
              width={400}
              height={400}
              alt={comparedDetail.name}
            />
            <div className="font-bold text-3xl  text-center">
              {capitalize(comparedDetail.name)}
            </div>
            <div className="text-center mt-3">
              {comparedDetail.types.map((type) => (
                <Badge
                  variant={type.type.name}
                  key={type.slot}
                  className="!text-sm"
                />
              ))}
            </div>
          </div>
          <StatDetail detail={comparedDetail} species={comparedSpecies} />
          <div className="text-center my-4">
            <ButtonAction detail={comparedDetail} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ComparePage;

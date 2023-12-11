import { DataTable } from '@/components/faceted/DataTable';
import { getPokemons } from '@/services/pokemon.service';
import { columns } from './data/columns';

const Basic = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const limit = searchParams['limit'] ?? '10';
  const offset = searchParams['offset'] ?? '0';
  const { results, next, previous, count } = await getPokemons({
    limit: Number(limit) ?? 10,
    offset: Number(offset) ?? 0,
  });

  return (
    <>
      <div className="text-center text-2xl">PokemonDex</div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-12">
        <div className="w-full">
          <div className="rounded-md border border-gray-600">
            <DataTable
              data={results}
              columns={columns}
              next={next}
              previous={previous}
              total={count}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Basic;

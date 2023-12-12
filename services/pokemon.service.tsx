import { responseHandler } from '@/lib/utils';
import { Pokemon, Pokemons, StashedPokemon } from '@/types/pokemon.type';
import { ResponseList } from '@/types/response.type';
import { Species } from '@/types/species.type';

const getPokemons = async (param: { limit: number; offset: number }) => {
  const dataApi = await fetch(
    `${process.env.API_URL}/pokemon?limit=${param.limit}&offset=${param.offset}`
  );
  return responseHandler<ResponseList<Pokemons[]>>(dataApi);
};

const getPokemonDetail = async (name: string) => {
  const dataApi = await fetch(`${process.env.API_URL}/pokemon/${name}`);
  return responseHandler<Pokemon>(dataApi);
};

const getPokemonSpecies = async (url: string) => {
  const dataApi = await fetch(url);
  return responseHandler<Species>(dataApi);
};

const toStashedModel = (data: Pokemon): StashedPokemon => {
  return {
    id: data.id,
    image: data.sprites.other?.['official-artwork']?.front_default,
    name: data.name,
    types: data.types.map((el) => el.type.name),
  };
};

export { getPokemonDetail, getPokemonSpecies, getPokemons, toStashedModel };

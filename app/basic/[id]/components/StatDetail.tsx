import StaticProgress from '@/components/faceted/StaticProgress/StaticProgress';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import capitalize from '@/lib/capitalize';
import { Pokemon } from '@/types/pokemon.type';
import { Species } from '@/types/species.type';
import { CheckIcon, Cross2Icon } from '@radix-ui/react-icons';
import Image from 'next/image';

const StatDetail = ({
  detail,
  species,
}: {
  detail: Pokemon;
  species: Species;
}) => {
  return (
    <Tabs defaultValue="about" className="w-full">
      <TabsList className="grid w-full grid-cols-4 bg-accent">
        <TabsTrigger value="about">About</TabsTrigger>
        <TabsTrigger value="stats">Stats</TabsTrigger>
        <TabsTrigger value="info">Info</TabsTrigger>
        <TabsTrigger value="sprites">Sprites</TabsTrigger>
      </TabsList>
      <TabsContent value="about">
        <div className="rounded-md border border-gray-600 h-[318px] overflow-auto">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="w-1/3 text-gray-500">
                  Base Experience
                </TableCell>
                <TableCell>{detail.base_experience} xp</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="w-1/3 text-gray-500">Height</TableCell>
                <TableCell>{detail.height * 10} cm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="w-1/3 text-gray-500">Weight</TableCell>
                <TableCell>{detail.weight / 10} kg</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="w-1/3 text-gray-500">
                  Growth Rate
                </TableCell>
                <TableCell>{capitalize(species.growth_rate?.name)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="w-1/3 text-gray-500">Shape</TableCell>
                <TableCell>{capitalize(species.shape?.name)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="w-1/3 text-gray-500">
                  Generation
                </TableCell>
                <TableCell>{capitalize(species.generation?.name)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="w-1/3 text-gray-500">Habitat</TableCell>
                <TableCell>{capitalize(species.habitat?.name)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="w-1/3 text-gray-500">Abilities</TableCell>
                <TableCell>
                  {capitalize(
                    detail.abilities.map((el) => el.ability.name).join(', ')
                  )}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </TabsContent>
      <TabsContent value="stats">
        <div className="rounded-md border border-gray-600 h-[318px]">
          <Table className="table-fixed">
            <TableBody>
              {detail.stats.map((stat) => (
                <TableRow key={stat.stat.name}>
                  <TableCell className="w-1/3 uppercase text-gray-500">
                    {stat.stat.name}
                  </TableCell>
                  <TableCell className="w-1/12 uppercase">
                    {stat.base_stat}
                  </TableCell>
                  <TableCell>
                    <StaticProgress value={stat.base_stat} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </TabsContent>
      <TabsContent value="info">
        <div className="rounded-md border border-gray-600 h-[318px]">
          <Table className="table-fixed">
            <TableBody>
              <TableRow>
                <TableCell className="w-1/3 text-gray-500">ID</TableCell>
                <TableCell>{species.id}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="w-1/3 text-gray-500">Color</TableCell>
                <TableCell>{capitalize(species.color?.name)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="w-1/3 text-gray-500">is Baby</TableCell>
                <TableCell>
                  {species.is_baby ? (
                    <CheckIcon color="green" />
                  ) : (
                    <Cross2Icon color="red" />
                  )}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="w-1/3 text-gray-500">
                  is Legendary
                </TableCell>
                <TableCell>
                  {species.is_legendary ? (
                    <CheckIcon color="green" />
                  ) : (
                    <Cross2Icon color="red" />
                  )}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="w-1/3 text-gray-500">
                  is Mythical
                </TableCell>
                <TableCell>
                  {species.is_mythical ? (
                    <CheckIcon color="green" />
                  ) : (
                    <Cross2Icon color="red" />
                  )}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="w-1/3 text-gray-500">
                  Egg Groups
                </TableCell>
                <TableCell>
                  {capitalize(
                    species.egg_groups.map((el) => el.name).join(', ')
                  )}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </TabsContent>
      <TabsContent value="sprites">
        <div className="rounded-md border border-gray-600 h-[318px]">
          <div className="grid grid-cols-4 gap-4">
            <Image
              src={detail.sprites?.front_default || ''}
              alt={detail.sprites?.front_default || ''}
              width={130}
              height={130}
            />
            <Image
              src={detail.sprites?.back_default || ''}
              alt={detail.sprites?.back_default || ''}
              width={130}
              height={130}
            />
            <Image
              src={detail.sprites?.front_shiny || ''}
              alt={detail.sprites?.front_shiny || ''}
              width={130}
              height={130}
            />
            <Image
              src={detail.sprites?.back_shiny || ''}
              alt={detail.sprites?.back_shiny || ''}
              width={130}
              height={130}
            />
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default StatDetail;

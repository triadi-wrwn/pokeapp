'use client';

import capitalize from '@/lib/capitalize';
import { Pokemons } from '@/types/pokemon.type';
import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';

export const columns: ColumnDef<Pokemons>[] = [
  {
    accessorKey: 'name',
    header: 'Pokemon Name',
    cell: ({ row }) => (
      <Link href={`./basic/${row.getValue('name')}`}>
        {capitalize(row.getValue('name'))}
      </Link>
    ),
  },
];

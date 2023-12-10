'use client';

import { Pokemons } from '@/types/pokemon.type';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Pokemons>[] = [
	{
		accessorKey: 'name',
		header: 'Name',
		cell: ({ row }) => <div className='uppercase'>{row.getValue('name')}</div>,
	},
];

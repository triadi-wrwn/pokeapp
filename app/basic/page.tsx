import DataTable from '@/components/faceted/DataTable/DataTable';
import React from 'react';
import { columns } from './data/columns';
import { Pokemons } from '@/types/pokemon.type';

const getData = async () => {
	const dataApi = await fetch(
		`${process.env.API_URL}/pokemon?limit=10&offset=0`
	);
	return await dataApi.json();
}
const Basic = async () => {
	const {results} = await getData();
	const data: Pokemons[] = results;
	console.log(data);

  return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<div className='w-full'>
				<div className='rounded-md border'>
					<DataTable data={data} columns={columns}/>
				</div>
				{/* <div className='flex items-center justify-end space-x-2 py-4'>
					<div className='space-x-2'>
						<Button
							variant='outline'
							size='sm'
							onClick={() => table.previousPage()}
							disabled={!table.getCanPreviousPage()}
						>
							Previous
						</Button>
						<Button
							variant='outline'
							size='sm'
							onClick={() => table.nextPage()}
							disabled={!table.getCanNextPage()}
						>
							Next
						</Button>
					</div>
				</div> */}
			</div>
		</main>
	);
}

export default Basic;
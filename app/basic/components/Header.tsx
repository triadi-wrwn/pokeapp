'use client';

import { Modal } from '@/components/faceted/Modal';
import PokeballSvg from '@/components/icons/PokeballSvg';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import useModal from '../hook/useModal';
import MyPokemon from './MyPokemon';

const Header = () => {
  const router = useRouter();
  const searchParam = useSearchParams();
  const { open, toggleModal } = useModal();

  useEffect(() => {
    const compareId = searchParam.get('compareWith');
    router.push(
      `${
        compareId ? `?compareWith=${compareId}&open=${open}` : `?open=${open}`
      }`,
      { scroll: false }
    );
  }, [open]);

  return (
    <div className="absolute right-8 top-8">
      <Modal
        open={open}
        openChange={(e) => {
          toggleModal();
        }}
        trigger={<PokeballSvg width={50} height={50} />}
        title="My Pokemon"
      >
        <MyPokemon />
      </Modal>
    </div>
  );
};

export default Header;

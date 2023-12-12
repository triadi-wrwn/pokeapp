'use client';

import { Modal } from '@/components/faceted/Modal';
import PokeballSvg from '@/components/icons/PokeballSvg';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import useModal from '../hook/useModal';
import MyPokemon from './MyPokemon';

const Header = () => {
  const router = useRouter();
  const { open, toggleModal } = useModal();
  useEffect(() => {
    console.log('modal is open', open);
    router.push(`?open=${open}`);
  }, [open]);
  return (
    <div className="absolute right-8 top-8">
      <Modal
        open={open}
        openChange={(e) => {
          console.log(e);
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

import { useState } from 'react';

const useModal = () => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen((state) => !state);
  };

  return {
    open,
    toggleModal,
  };
};

export default useModal;

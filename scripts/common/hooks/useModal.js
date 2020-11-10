import { useState } from 'react';

const useModal = (initialState = false) => {
  const [modalOpen, setModalOpen] = useState(initialState);

  return [modalOpen, setModalOpen];
};

export default useModal;

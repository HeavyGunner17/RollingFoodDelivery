import React, { useState } from 'react';
import Modal from 'react-modal';
import './ButtonWithModal.css';

Modal.setAppElement('#root'); // Asegura que el modal se acceda correctamente

const ButtonWithModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleButtonClick = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick}  className='font-bold bg-red-600'style={{'borderRadius':'5px'}}>Realizar Pedido</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Pedido Realizado con Éxito"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal-content">
          <h2 className='font-bold'>Pedido Realizado con Éxito</h2>
          <p className='font-bold'>¡Gracias por realizar tu pedido!</p>
          <button onClick={closeModal} className='font-bold bg-red-600'style={{'borderRadius':'5px'}}>Cerrar</button>
        </div>
      </Modal>
    </div>
  );
};

export default ButtonWithModal;
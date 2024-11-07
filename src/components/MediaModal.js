import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function MediaModal({ media, closeModal }) {
  return (
    <Modal
      isOpen
      onRequestClose={closeModal}
      className="bg-white max-w-3xl max-h-full m-4 p-8 rounded-lg shadow-2xl border border-pinkish flex items-center justify-center outline-none"
      overlayClassName="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center"
    >
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 bg-deepPink text-white rounded-full px-3 py-1 text-sm"
      >
        Close
      </button>
      {media.type === 'image' ? (
        <img src={media.src} alt={media.alt} className="rounded-md max-w-full max-h-full" />
      ) : (
        <video src={media.src} controls className="rounded-md max-w-full max-h-full" />
      )}
    </Modal>
  );
}

export default MediaModal;

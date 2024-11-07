import React, { useState } from 'react';
import MediaModal from './MediaModal';

const mediaItems = [
  { type: 'image', src: '/media/mgsp.jpg', alt: 'Photo 1' },
  { type: 'image', src: '/media/mgsp2.jpg', alt: 'Photo 1' },
  { type: 'video', src: '/media/video1.mp4', alt: 'Video 1' },
  // Add more items as needed
];

function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const openModal = (media) => setSelectedMedia(media);
  const closeModal = () => setSelectedMedia(null);

  return (
    <div className="w-full overflow-hidden flex justify-center bg-pinkish p-4">
      <div className="flex animate-scroll space-x-4">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer p-2 border-4 border-pinkish rounded-lg shadow-lg"
            onClick={() => openModal(item)}
          >
            {item.type === 'image' ? (
              <img className="w-52 h-40 object-cover rounded-md" src={item.src} alt={item.alt} />
            ) : (
              <video className="w-52 h-40 object-cover rounded-md" src={item.src} loop />
            )}
          </div>
        ))}
      </div>
      {selectedMedia && <MediaModal media={selectedMedia} closeModal={closeModal} />}
    </div>
  );
}

export default Gallery;

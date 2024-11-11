import React, { useRef, useState, useEffect } from 'react';
import MediaModal from './MediaModal';
import Media from './Media';

const mediaItems = [
  { type: 'image', src: '/media/DSC_3569.jpg', alt: 'Photo 1' },
  { type: 'image', src: '/media/DSC_4294.jpg', alt: 'Photo 1' },
  { type: 'image', src: '/media/DSC_4360.jpg', alt: 'Photo 1' },
  { type: 'image', src: '/media/DSC_4453.jpg', alt: 'Photo 1' },
  { type: 'image', src: '/media/DSC_4248.jpg', alt: 'Photo 1' },
  { type: 'image', src: '/media/DSC_4263.jpg', alt: 'Photo 1' },
  { type: 'image', src: '/media/DSC_3825.jpg', alt: 'Photo 1' },
  { type: 'image', src: '/media/DSC_3755.jpg', alt: 'Photo 1' },
  { type: 'image', src: '/media/DSC_3738.jpg', alt: 'Photo 1' },

    // { type: 'video', src: '/media/video1.mp4', alt: 'Video 1' },
];

const getRowMedia = (rowIndex, items) => {
  const offset = rowIndex % items.length;
  return [...items.slice(offset), ...items.slice(0, offset)];
};

function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [numRows, setNumRows] = useState(1);
  const openModal = (media) => setSelectedMedia(media);
  const closeModal = () => setSelectedMedia(null);
  const ref = useRef(null);
  const [containerHeight, setHeight] = useState(100 + "%");
  const [animationState, setPlay] = useState("paused");

  useEffect(() => {
    const updateNumRows = () => {
      const rowHeight = 50;
      const calculatedRows = Math.floor(window.innerHeight / rowHeight) - 1;
      setNumRows(calculatedRows);
    };

    updateNumRows();
    window.addEventListener('resize', updateNumRows);

    return () => window.removeEventListener('resize', updateNumRows);
  }, []);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight + "px");
      setPlay("running");
    }
  }, []);

  return (
    <div className="w-max fixed flex flex-col space-y-2 bg-pinkish">
      {Array.from({ length: numRows }).map((_, rowIndex) => (
        <div ref={ref} key={rowIndex} className={`flex flex-wrap animate-scroll-${rowIndex % 2 === 0 ? 'left' : 'right'}`}
              style={{
                height: `${containerHeight}`,
                animationPlayState: animationState
              }}>
          {getRowMedia(rowIndex, mediaItems).map((item, index) => (
            <Media
              key={index}
              item={item}
              onClick={() => openModal(item)}
            />
          ))}

          {getRowMedia(rowIndex, mediaItems).map((item, index) => (
            <Media
              key={index}
              item={item}
              onClick={() => openModal(item)}
            />
          ))}
        </div>
      ))}
      {selectedMedia && <MediaModal media={selectedMedia} closeModal={closeModal} />}
    </div>
  );
}

export default Gallery;

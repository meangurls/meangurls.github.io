import React, { useRef, useState, useEffect } from 'react';
import MediaModal from './MediaModal';
import Media from './Media';

const mediaItems = [
  { src: '/media/0.jpg', minsrc: '/minimedia/0.webp', alt: 'Photo 0' },
  { src: '/media/1.jpg', minsrc: '/minimedia/1.webp', alt: 'Photo 1' },
  { src: '/media/2.jpg', minsrc: '/minimedia/2.webp', alt: 'Photo 2' },
  { src: '/media/3.jpg', minsrc: '/minimedia/3.webp', alt: 'Photo 3' },
  { src: '/media/4.jpg', minsrc: '/minimedia/4.webp', alt: 'Photo 4' },
  { src: '/media/5.jpg', minsrc: '/minimedia/5.webp', alt: 'Photo 5' },
  { src: '/media/6.jpg', minsrc: '/minimedia/6.webp', alt: 'Photo 6' },
  { src: '/media/7.jpg', minsrc: '/minimedia/7.webp', alt: 'Photo 7' },
  { src: '/media/8.jpg', minsrc: '/minimedia/8.webp', alt: 'Photo 8' },
  { src: '/media/9.jpg', minsrc: '/minimedia/9.webp', alt: 'Photo 9' },
  { src: '/media/10.jpg', minsrc: '/minimedia/10.webp', alt: 'Photo 10' },
  { src: '/media/11.jpg', minsrc: '/minimedia/11.webp', alt: 'Photo 11' },
  { src: '/media/12.jpg', minsrc: '/minimedia/12.webp', alt: 'Photo 12' },
  { src: '/media/13.jpg', minsrc: '/minimedia/13.webp', alt: 'Photo 13' },
  { src: '/media/14.jpg', minsrc: '/minimedia/14.webp', alt: 'Photo 14' },
  { src: '/media/15.jpg', minsrc: '/minimedia/15.webp', alt: 'Photo 15' },
  { src: '/media/16.jpg', minsrc: '/minimedia/16.webp', alt: 'Photo 16' },
  { src: '/media/17.jpg', minsrc: '/minimedia/17.webp', alt: 'Photo 17' },
  { src: '/media/18.jpg', minsrc: '/minimedia/18.webp', alt: 'Photo 18' },
  { src: '/media/19.jpg', minsrc: '/minimedia/19.webp', alt: 'Photo 19' },
  { src: '/media/20.jpg', minsrc: '/minimedia/20.webp', alt: 'Photo 20' },
  { src: '/media/21.jpg', minsrc: '/minimedia/21.webp', alt: 'Photo 21' },
  { src: '/media/22.jpg', minsrc: '/minimedia/22.webp', alt: 'Photo 22' },
  { src: '/media/23.jpg', minsrc: '/minimedia/23.webp', alt: 'Photo 23' },
  { src: '/media/24.jpg', minsrc: '/minimedia/24.webp', alt: 'Photo 24' },
  { src: '/media/25.jpg', minsrc: '/minimedia/25.webp', alt: 'Photo 25' },
  { src: '/media/26.jpg', minsrc: '/minimedia/26.webp', alt: 'Photo 26' },
  { src: '/media/27.jpg', minsrc: '/minimedia/27.webp', alt: 'Photo 27' },
  { src: '/media/28.jpg', minsrc: '/minimedia/28.webp', alt: 'Photo 28' },
  { src: '/media/29.jpg', minsrc: '/minimedia/29.webp', alt: 'Photo 29' },
];

const getRowMedia = (rowIndex, items) => {
  //const rowItems = rowIndex % 2 === 0 ? items.slice(0, items.length / 2) : items.slice(items.length/2, items.length);
  const rowItems = items
  const offset = ((rowIndex * 5) % (rowItems.length));
  return [...rowItems.slice(offset), ...rowItems.slice(0, offset)];
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
      const rowHeight = 180;
      const calculatedRows = Math.floor(window.innerHeight / rowHeight);
      setNumRows(calculatedRows);
      console.log(calculatedRows)
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
        <div ref={ref} key={rowIndex} className={`flex flex-wrap animate-scroll-${rowIndex % 2 === 0 ? 'right' : 'left'}`}
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

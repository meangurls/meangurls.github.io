import React, { useRef, useState, useEffect } from 'react';
import MediaModal from './MediaModal';
import Media from './Media';

const mediaItems = [
  { type: 'image', src: '/media/1.jpg', alt: 'Photo 0' },
  { type: 'image', src: '/media/1.jpg', alt: 'Photo 1' },
  { type: 'image', src: '/media/2.jpg', alt: 'Photo 2' },
  { type: 'image', src: '/media/3.jpg', alt: 'Photo 3' },
  { type: 'image', src: '/media/4.jpg', alt: 'Photo 4' },
  { type: 'image', src: '/media/5.jpg', alt: 'Photo 5' },
  { type: 'image', src: '/media/6.jpg', alt: 'Photo 6' },
  { type: 'image', src: '/media/7.jpg', alt: 'Photo 7' },
  { type: 'image', src: '/media/8.jpg', alt: 'Photo 8' },
  { type: 'image', src: '/media/9.jpg', alt: 'Photo 9' },
  { type: 'image', src: '/media/10.jpg', alt: 'Photo 10' },
  { type: 'image', src: '/media/11.jpg', alt: 'Photo 11' },
  { type: 'image', src: '/media/12.jpg', alt: 'Photo 12' },
  { type: 'image', src: '/media/13.jpg', alt: 'Photo 13' },
  { type: 'image', src: '/media/14.jpg', alt: 'Photo 14' },
  { type: 'image', src: '/media/15.jpg', alt: 'Photo 15' },
  { type: 'image', src: '/media/16.jpg', alt: 'Photo 16' },
  { type: 'image', src: '/media/17.jpg', alt: 'Photo 17' },
  { type: 'image', src: '/media/18.jpg', alt: 'Photo 18' },
  { type: 'image', src: '/media/19.jpg', alt: 'Photo 19' },
  { type: 'image', src: '/media/20.jpg', alt: 'Photo 20' },
  { type: 'image', src: '/media/21.jpg', alt: 'Photo 21' },
  { type: 'image', src: '/media/22.jpg', alt: 'Photo 22' },
  { type: 'image', src: '/media/23.jpg', alt: 'Photo 23' },
  { type: 'image', src: '/media/24.jpg', alt: 'Photo 24' },
  { type: 'image', src: '/media/25.jpg', alt: 'Photo 25' },
  { type: 'image', src: '/media/26.jpg', alt: 'Photo 26' },
  { type: 'image', src: '/media/27.jpg', alt: 'Photo 27' },
  { type: 'image', src: '/media/28.jpg', alt: 'Photo 28' },
  { type: 'image', src: '/media/29.jpg', alt: 'Photo 29' },
  { type: 'image', src: '/media/30.jpg', alt: 'Photo 30' },
  { type: 'image', src: '/media/31.jpg', alt: 'Photo 31' },
  { type: 'image', src: '/media/32.jpg', alt: 'Photo 32' },
  { type: 'image', src: '/media/33.jpg', alt: 'Photo 33' },
  { type: 'image', src: '/media/34.jpg', alt: 'Photo 34' },
  { type: 'image', src: '/media/35.jpg', alt: 'Photo 35' },
  { type: 'image', src: '/media/36.jpg', alt: 'Photo 36' },
  { type: 'image', src: '/media/37.jpg', alt: 'Photo 37' },
  { type: 'image', src: '/media/38.jpg', alt: 'Photo 38' },
  { type: 'image', src: '/media/39.jpg', alt: 'Photo 39' },
  { type: 'image', src: '/media/40.jpg', alt: 'Photo 40' },
  { type: 'image', src: '/media/41.jpg', alt: 'Photo 41' },
  { type: 'image', src: '/media/42.jpg', alt: 'Photo 42' },
  { type: 'image', src: '/media/43.jpg', alt: 'Photo 43' },
  { type: 'image', src: '/media/44.jpg', alt: 'Photo 44' },
  { type: 'image', src: '/media/45.jpg', alt: 'Photo 45' },
  { type: 'image', src: '/media/46.jpg', alt: 'Photo 46' },
  { type: 'image', src: '/media/47.jpg', alt: 'Photo 47' },
  { type: 'image', src: '/media/48.jpg', alt: 'Photo 48' },
  { type: 'image', src: '/media/49.jpg', alt: 'Photo 49' },
  { type: 'image', src: '/media/50.jpg', alt: 'Photo 50' },
  { type: 'image', src: '/media/51.jpg', alt: 'Photo 51' },
  { type: 'image', src: '/media/52.jpg', alt: 'Photo 52' },
  { type: 'image', src: '/media/53.jpg', alt: 'Photo 53' },
  { type: 'image', src: '/media/54.jpg', alt: 'Photo 54' },
  { type: 'image', src: '/media/55.jpg', alt: 'Photo 55' },
  { type: 'image', src: '/media/56.jpg', alt: 'Photo 56' },
  { type: 'image', src: '/media/57.jpg', alt: 'Photo 57' },
  { type: 'image', src: '/media/58.jpg', alt: 'Photo 58' },
  { type: 'image', src: '/media/59.jpg', alt: 'Photo 59' },
];

const getRowMedia = (rowIndex, items) => {
  let rowItems = rowIndex % 2 === 0 ? items.slice(0, items.length / 2) : items.slice(items.length/2, items.length);
  const offset = ((rowIndex * 7) % (rowItems.length));
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

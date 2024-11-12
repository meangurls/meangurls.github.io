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
  { src: '/media/30.jpg', minsrc: '/minimedia/30.webp', alt: 'Photo 30' },
  { src: '/media/31.jpg', minsrc: '/minimedia/31.webp', alt: 'Photo 31' },
  { src: '/media/32.jpg', minsrc: '/minimedia/32.webp', alt: 'Photo 32' },
  { src: '/media/33.jpg', minsrc: '/minimedia/33.webp', alt: 'Photo 33' },
  { src: '/media/34.jpg', minsrc: '/minimedia/34.webp', alt: 'Photo 34' },
  { src: '/media/35.jpg', minsrc: '/minimedia/35.webp', alt: 'Photo 35' },
  { src: '/media/36.jpg', minsrc: '/minimedia/36.webp', alt: 'Photo 36' },
  { src: '/media/37.jpg', minsrc: '/minimedia/37.webp', alt: 'Photo 37' },
  { src: '/media/38.jpg', minsrc: '/minimedia/38.webp', alt: 'Photo 38' },
  { src: '/media/39.jpg', minsrc: '/minimedia/39.webp', alt: 'Photo 39' },
  { src: '/media/40.jpg', minsrc: '/minimedia/40.webp', alt: 'Photo 40' },
  { src: '/media/41.jpg', minsrc: '/minimedia/41.webp', alt: 'Photo 41' },
  { src: '/media/42.jpg', minsrc: '/minimedia/42.webp', alt: 'Photo 42' },
  { src: '/media/43.jpg', minsrc: '/minimedia/43.webp', alt: 'Photo 43' },
  { src: '/media/44.jpg', minsrc: '/minimedia/44.webp', alt: 'Photo 44' },
  { src: '/media/45.jpg', minsrc: '/minimedia/45.webp', alt: 'Photo 45' },
  { src: '/media/46.jpg', minsrc: '/minimedia/46.webp', alt: 'Photo 46' },
  { src: '/media/47.jpg', minsrc: '/minimedia/47.webp', alt: 'Photo 47' },
  { src: '/media/48.jpg', minsrc: '/minimedia/48.webp', alt: 'Photo 48' },
  { src: '/media/49.jpg', minsrc: '/minimedia/49.webp', alt: 'Photo 49' },
  { src: '/media/50.jpg', minsrc: '/minimedia/50.webp', alt: 'Photo 50' },
  { src: '/media/51.jpg', minsrc: '/minimedia/51.webp', alt: 'Photo 51' },
  { src: '/media/52.jpg', minsrc: '/minimedia/52.webp', alt: 'Photo 52' },
  { src: '/media/53.jpg', minsrc: '/minimedia/53.webp', alt: 'Photo 53' },
  { src: '/media/54.jpg', minsrc: '/minimedia/54.webp', alt: 'Photo 54' },
  { src: '/media/55.jpg', minsrc: '/minimedia/55.webp', alt: 'Photo 55' },
  { src: '/media/56.jpg', minsrc: '/minimedia/56.webp', alt: 'Photo 56' },
  { src: '/media/57.jpg', minsrc: '/minimedia/57.webp', alt: 'Photo 57' },
  { src: '/media/58.jpg', minsrc: '/minimedia/58.webp', alt: 'Photo 58' },
  { src: '/media/59.jpg', minsrc: '/minimedia/59.webp', alt: 'Photo 59' },
];

const getRowMedia = (rowIndex, items) => {
  //let rowItems = rowIndex % 2 === 0 ? items.slice(0, items.length / 2) : items.slice(items.length/2, items.length);
  const rowItems = items
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
      const calculatedRows = Math.floor(window.innerHeight / rowHeight) - 1;
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

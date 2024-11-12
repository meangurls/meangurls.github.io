import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Media({ item, onClick, className }) {
  return (
    <div
      className={`${className} cursor-pointer p-2 border-4 border-pinkish rounded-lg shadow-lg"`}
      onClick={onClick}
    >
      <LazyLoadImage
        effect="blur"
        wrapperProps={{
          // If you need to, you can tweak the effect transition using the wrapper style.
          style: {transitionDelay: "8s"},
        }}
        alt={item.alt}
        className="w-42 h-40 object-cover rounded-md"
        src={item.src}
      />
    </div>
  );
}

export default Media;
import React from 'react';

function Media({ item, onClick, className }) {
  return (
    <div
      className={`${className} cursor-pointer p-2 border-4 border-pinkish rounded-lg shadow-lg"`}
      onClick={onClick}
    >
      {item.type === 'image' ? (
        <img
          className="w-42 h-40 object-cover rounded-md"
          src={item.src}
          alt={item.alt}
        />
      ) : (
        <video
          className="w-42 h-40 object-cover rounded-md"
          src={item.src}
          muted
          loop
        />
      )}
    </div>
  );
}

export default Media;
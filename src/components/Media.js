import React from 'react';

function Media({ item, onClick, className }) {
  return (
    <div
      className={`${className} cursor-pointer p-2 border-4 border-pinkish rounded-lg shadow-lg"`}
      onClick={onClick}
    >
      <img
        className="w-42 h-40 object-cover rounded-md"
        src={item.minsrc}
        alt={item.alt}
      />
    </div>
  );
}

export default Media;
import React from 'react';

const SearchDialogComponent = ({ isOpen, onClose, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-trans bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-[var(--color-background)] p-6 rounded-xl border border-gray-300 shadow-md max-w-sm w-full text-center">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SearchDialogComponent;

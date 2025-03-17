import React, { useState } from 'react';
import toast from 'react-hot-toast';

const ShareButton = ({ pasteId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const shareLink = `https://yourapp.com/paste/${pasteId}`;
  const encodedLink = encodeURIComponent(shareLink);
  const message = encodeURIComponent(`Check out this note: ${shareLink}`);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink);
    toast.success("Copied to clipboard")
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="border-1 rounded bg-teal-800 font-bold px-6 hover:bg-white hover:text-teal-700 transition-all duration-100 cursor-pointer"
      >
        Share
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <button
            onClick={handleCopyLink}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            📋 Copy Link
          </button>
          <a
            href={`https://wa.me/?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            🟢 WhatsApp
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedLink}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            🔵 Facebook
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodedLink}&text=Check%20this%20note!&hashtags=NotesApp`}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            🐦 Twitter
          </a>
        </div>
      )}
    </div>
  );
};

export default ShareButton;

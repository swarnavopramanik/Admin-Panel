import React, { useState } from 'react';
import { BiArrowToTop } from 'react-icons/bi';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 400) {
      setVisible(true);
    } else if (scrolled <= 400) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      style={{ display: visible ? 'flex' : 'none' }}
      className="fixed bottom-5 right-20
            bg-green-500 text-2xl cursor-pointer text-white p-2 rounded-full
            flex items-center justify-center
            z-50
            transition
            border-solid border-1 border-transparent
            hover:bg-white hover:text-green-500 hover:border-green-500

            "
    >
      <BiArrowToTop />
    </button>
  );
};

export default ScrollToTop;

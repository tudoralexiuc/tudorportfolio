import React from 'react';
import { AiFillCaretUp } from 'react-icons/ai';
import { Link } from 'react-scroll';

function BackButton() {
  return (
    <Link
      to="start"
      spy={true}
      smooth={true}
      className="w-[50px] h-[50px] border-2 flex justify-center items-center cursor-pointer text-white fixed bottom-5 right-5"
    >
      <AiFillCaretUp />
    </Link>
  );
}

export default BackButton;

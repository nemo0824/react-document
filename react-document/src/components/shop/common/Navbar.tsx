import React from 'react';

export const Navbar = () => {
  return (
    <nav className="flex w-full h-14 shadow-lg bg-white">
      <div className="w-1/2 flex justify-center items-center  hover:text-blue-500">
        <a>메뉴목록</a>
      </div>
      <div className="w-1/2 flex justify-center items-center  hover:text-blue-500">
        <a>주문내역</a>
      </div>
    </nav>
  );
};

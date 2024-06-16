// components/Header.tsx
import React from 'react';
import { UserButton } from '../auth/user-button';

const Header: React.FC = () => {
  return (
    <header className=" shadow pb-2 px-4 pt-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Sandesh Collection</h1>
      <UserButton/>
    </header>
  );
};

export default Header;

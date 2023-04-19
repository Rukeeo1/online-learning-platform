import React from 'react';
import './HeaderAlternate.scss';
import SearchInput from './SearchInput';

export default function HeaderAlternate() {
  const handleSearchSubmit = (value: string) => {
      console.log(value,'this should be search value')
  };
  return (
    <div className='header'>
      <img
        src='/src/assets/svgs/logo-udemy.svg'
        alt='logo'
        className='css-z2e1hn'
      />
      <div>
        <span></span>
      </div>
      <SearchInput onSubmit={handleSearchSubmit} />
    </div>
  );
}

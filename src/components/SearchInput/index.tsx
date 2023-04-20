import React, { useState } from 'react';
import './style.scss';
import SearchIcon from '@mui/icons-material/Search';

interface SearchInputProps {
  onSubmit: (searchQuery: string) => void;
}

export default function Input({ onSubmit }: SearchInputProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!disableSearchButton) {
      onSubmit(searchQuery);
    }
  };

  const disableSearchButton: boolean = !searchQuery.length;

  return (
    <div className='search'>
      <form className='search__form' onSubmit={handleSubmit}>
        <button className='search__button' disabled={disableSearchButton}>
          <SearchIcon className='search__icon' />
        </button>
        <input
          placeholder='Search for anything'
          className='search__input'
          value={searchQuery}
          onChange={onSearchChange}
        />
      </form>
    </div>
  );
}

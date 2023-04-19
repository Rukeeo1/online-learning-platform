import React, { useState } from 'react';
import './SearchInput.scss';
import SearchIcon from '@mui/icons-material/Search';

interface SearchInputProps {
  onSubmit: (searchQuery: string) => void;
}

export default function SearchInput({ onSubmit }: SearchInputProps) {
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

// the styled component version is below::
/**
 import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styled, { css } from 'styled-components';

interface SearchInputProps {
  onSubmit: (searchQuery: string) => void;
}

export default function SearchInput({ onSubmit }: SearchInputProps) {
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
    <Search>
      <Form onSubmit={handleSubmit}>
        <Button disabled={disableSearchButton}>
          <Icon />
        </Button>
        <Input
          placeholder='Search for anything'
          value={searchQuery}
          onChange={onSearchChange}
        />
      </Form>
    </Search>
  );
}

const Search = styled.div`
  height: 48px;
  width: 100%;
  margin: 0 1.2rem;
  border-radius: 9999px;
  border: 1px solid #1c1d1f;
  background-color: #f7f9fa;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 2.4rem 0 0;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  height: 4.8rem;
  width: 4.8rem;
  cursor: pointer;

  &:hover:disabled {
    cursor: not-allowed;
  }
`;

const Icon = styled(SearchIcon)`
  height: 1rem;
  width: 1rem;
  color: #9b9d9e;
`;

const Input = styled.input`
  height: 34px;
  background-color: #f7f9fa;
  border: none;
  width: 100%;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

 */
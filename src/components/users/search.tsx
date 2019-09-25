import React, { FunctionComponent, useState } from 'react';

interface OwnProps {
  setAlert(msg: string, type: string): void;
  searchUsers(user: string): void;
  clearUsers(): void;
  showClear: boolean;
}

type Props = OwnProps;

const Search: FunctionComponent<Props> = ({
  searchUsers,
  showClear,
  clearUsers,
  setAlert
}) => {
  const [text, setText] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text === '') {
      setAlert('  Please enter something', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;

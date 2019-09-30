import React, { FunctionComponent, useContext, useState } from 'react';
import GithubContext, {
  ContextState
} from '../../context/github/github-context';

interface OwnProps {
  setAlert(msg: string, type: string): void;
}

type Props = OwnProps;

const Search: FunctionComponent<Props> = ({ setAlert }) => {
  const githubContext = useContext<ContextState>(GithubContext);

  const [text, setText] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text === '') {
      setAlert('  Please enter something', 'light');
    } else {
      // @ts-ignore
      githubContext.searchUsers(text);
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
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;

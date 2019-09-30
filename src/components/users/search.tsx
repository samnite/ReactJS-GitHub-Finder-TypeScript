import React, { FunctionComponent, useContext, useState } from 'react';
import GithubContext, {
  GithubStateType
} from '../../context/github/github-context';
import AlertContext, {
  AlertStateType
} from '../../context/alert/alert-context';

interface OwnProps {}

type Props = OwnProps;

const Search: FunctionComponent<Props> = () => {
  const githubContext = useContext<GithubStateType>(GithubContext);
  const alertContext = useContext<AlertStateType>(AlertContext);

  const [text, setText] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('  Please enter something', 'danger');
    } else {
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

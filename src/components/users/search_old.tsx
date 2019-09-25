export {};
// import React, { Component } from 'react';
//
// type State = Readonly<{
//   text: string;
// }>;
//
// interface SearchProps {
//   setAlert(msg: string, type: string): void;
//   searchUsers(user: string): void;
//   clearUsers(): void;
//   showClear: boolean;
// }
//
// class Search extends Component<SearchProps, State> {
//   state = {
//     text: ''
//   };
//   onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
//     this.setState({ text: e.target.value });
//   onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (this.state.text === '') {
//       this.props.setAlert('  Please enter something', 'light');
//     } else {
//       this.props.searchUsers(this.state.text);
//       this.setState({ text: '' });
//     }
//   };
//
//   render() {
//     //@ts-ignore
//     const { showClear, clearUsers } = this.props;
//     return (
//       <div>
//         <form onSubmit={this.onSubmit} className="form">
//           <input
//             type="text"
//             name="text"
//             placeholder="Search users..."
//             value={this.state.text}
//             onChange={this.onChange}
//           />
//           <input
//             type="submit"
//             value="Search"
//             className="btn btn-dark btn-block"
//           />
//         </form>
//         {showClear && (
//           <button className="btn btn-light btn-block" onClick={clearUsers}>
//             Clear
//           </button>
//         )}
//       </div>
//     );
//   }
// }
//
// export default Search;

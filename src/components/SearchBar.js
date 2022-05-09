import React from 'react';
import axios from 'axios';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = React.useState('');

  function onSubmitHandler(e) {
    e.preventDefault();

    // https://restcountries.com/v3.1/name/{name}
    const url = 'https://restcountries.com/v3.1/name';

    axios.get(`${url}/${searchTerm}`).then((res) => console.log(res.data));
  }

  function onChangeHandler(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <input type='text' onChange={onChangeHandler} />
      <input type='submit' />
    </form>
  );
}

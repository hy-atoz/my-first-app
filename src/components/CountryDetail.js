import React from 'react';
import axios from 'axios';
import './CountryDetail.css';

export default function CountryDetail() {
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    const url = 'https://restcountries.com/v3.1/all';

    axios.get(url).then((res) => {
      setCountries(res.data);
    });
  }, []);

  // setCountries((originalData) => [...originalData, data])

  // function fetchData() {
  //   const url = 'https://restcountries.com/v3.1/all';

  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.err(err));
  // }

  return (
    <div>
      {countries.length === 0 ? (
        <p>Data is loading...</p>
      ) : (
        <>
          <h1 className='title'>REST Countries API</h1>
          <div className='countries-container'>
            {countries.map((country) => {
              return (
                <div key={country.name.common} className='country-container'>
                  <h2>{country.name.common}</h2>
                  <img src={country.flags.png} alt={country.name.common} />
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

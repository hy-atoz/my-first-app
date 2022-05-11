import axios from 'axios';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './CountryDetail.css';

export default function CountryDetail() {
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    const url = 'https://restcountries.com/v3.1/all';

    axios.get(url).then((res) => {
      setCountries(res.data);
    });
  }, []);

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
                  <LazyLoadImage
                    src={country.flags.png}
                    alt={country.name.common}
                    effect='blur'
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

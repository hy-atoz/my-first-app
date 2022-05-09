import React from 'react';

export default function CountryDetail() {
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    const url = 'https://restcountries.com/v3.1/all';

    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.err(err));
  }, []);

	// setCountries((originalData) => [...originalData, data])

  function fetchData() {
    const url = 'https://restcountries.com/v3.1/all';

    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.err(err));
  }

	console.log(countries)

  return (
    <div>
      <button onClick={fetchData}>Fetch data</button>
    </div>
  );
}

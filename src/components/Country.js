import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function CurrentCountries({ currentCountries }) {
  return (
    <SimpleGrid columns={4} spacing={10}>
      {currentCountries &&
        currentCountries.map((item) => (
          <Box
            key={item.name.common}
            align='center'
            border='1px'
            borderColor='blackAlpha.500'
            borderRadius='lg'
            p='10'
            w='100%'
          >
            <LazyLoadImage
              src={item.flags.png}
              alt={item.name.common}
              effect='blur'
              width={250}
            />
            <Heading
              as='h3'
              size='md'
              align='center'
              wordBreak='break-word'
              textOverflow='ellipsis'
            >
              {item.name.common}
            </Heading>
          </Box>
        ))}
    </SimpleGrid>
  );
}

function Country({ itemsPerPage }) {
  
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    const url = 'https://restcountries.com/v3.1/all';

    axios.get(url).then((res) => {
      setCountries(res.data);
    });
  }, []);

  return (
    <>
      {countries.length === 0 ? (
        <p>Data is loading...</p>
      ) : (
        <>
          {countries.map((country) => {
            return (
              <Box
                key={country.name.common}
                align='center'
                border='1px'
                borderColor='blackAlpha.500'
                borderRadius='lg'
                p='10'
                w='100%'
              >
                <LazyLoadImage
                  src={country.flags.png}
                  alt={country.name.common}
                  effect='blur'
                  width={250}
                />
                <Heading
                  as='h3'
                  size='md'
                  align='center'
                  wordBreak='break-word'
                  textOverflow='ellipsis'
                >
                  {country.name.common}
                </Heading>
              </Box>
            );
          })}
        </>
      )}
    </>
  );
}

export default Country;

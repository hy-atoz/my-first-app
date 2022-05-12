import { Box, Heading } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ReactPaginate from 'react-paginate';
import '../styles/pagination.css';

function CurrentCountries({ currentCountries }) {
  return (
    <>
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
    </>
  );
}

function Country({ itemsPerPage }) {
  // Refer: https://codepen.io/monsieurv/pen/abyJQWQ?editors=0010

  const [countries, setCountries] = React.useState([]);
  const [currentItems, setCurrentItems] = React.useState(null);
  const [pageCount, setPageCount] = React.useState(0);
  const [itemOffset, setItemOffset] = React.useState(0);

  // First useEffect
  React.useEffect(() => {
    const url = 'https://restcountries.com/v3.1/all';

    axios.get(url).then((res) => {
      setCountries(res.data);
    });
  }, []);

  // Second useEffect
  React.useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(countries.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(countries.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, countries]);

  // Invoke when user clicks to request another page
  function handlePageClick(e) {
    const newOffset = (e.selected * itemsPerPage) % countries.length;
    console.log(
      `User requested page number ${
        e.selected + 1
      }, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  }

  return (
    <>
      {/* {countries.length === 0 ? (
        <>
          <p>Data is loading...</p>
        </>
      ) : (
        <>
          <CurrentCountries currentCountries={currentItems} />
          <ReactPaginate
            nextLabel='next >'
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel='< previous'
            breakLabel='...'
            renderOnZeroPageCount={null}
          />
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
      )} */}
      <ReactPaginate
        nextLabel='next >'
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel='< previous'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        breakLabel='...'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        containerClassName='pagination'
        activeClassName='active'
        renderOnZeroPageCount={null}
      />
      <CurrentCountries currentCountries={currentItems} />
    </>
  );
}

export default Country;

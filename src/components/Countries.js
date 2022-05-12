import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import Country from './Country';

function Countries() {
  return (
    <SimpleGrid as='main' columns={4} spacing={10}>
      <Country itemsPerPage={20} />
    </SimpleGrid>
  );
}

export default Countries;

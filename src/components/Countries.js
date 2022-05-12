import { SimpleGrid } from '@chakra-ui/react';
import CurrentItems from './CurrentItems';

function Countries({ currentItems }) {
  return (
    <SimpleGrid as='main' columns={4} marginBottom={20} spacing={10}>
      <CurrentItems currentItems={currentItems} />
    </SimpleGrid>
  );
}

export default Countries;

import { Search2Icon } from '@chakra-ui/icons';
import {
  FormControl,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';

function SearchBar() {
  const [query, setQuery] = useState('');

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(query);
  }

  return (
    <FormControl as='form' onSubmit={handleSubmit}>
      <InputGroup
        marginBottom={10}
        marginX='auto'
        size='lg'
        width={['100%', '100%', '60%', '500px']}
      >
        <Input placeholder='e.g. Malaysia' onChange={handleChange} />
        <InputRightElement
          children={
            <IconButton type='submit' variant='ghost' icon={<Search2Icon />} />
          }
        />
      </InputGroup>
    </FormControl>
  );
}

export default SearchBar;

import { Box } from '@chakra-ui/react';
import Countries from './components/Countries';
import Title from './components/Title';

function App() {
  return (
    <Box marginX={8}>
      <Title />
      <Countries />
    </Box>
  );
}

export default App;

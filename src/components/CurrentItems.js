import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function CurrentItems({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <Flex
            key={item.name.common}
            border='1px'
            borderColor='blackAlpha.500'
            borderRadius='lg'
            flexDirection='column'
            alignItems='center'
            justifyContent='space-between'
            padding='10'
            textAlign='center'
            width='100%'
          >
            <LazyLoadImage
              alt={item.name.common}
              effect='blur'
              src={item.flags.png}
            />
            <Heading
              as='h3'
              marginTop={4}
              size='md'
              textAlign='center'
              textOverflow='ellipsis'
              wordBreak='break-word'
            >
              {item.name.common}
            </Heading>
          </Flex>
        ))}
    </>
  );
}

export default CurrentItems;

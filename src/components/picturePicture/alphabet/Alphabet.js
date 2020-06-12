import React from 'react';
import { letterData } from './letterData';
import { LetterInput } from '../../letterInput/LetterInput';
import { Flex } from 'rebass';

export const Alphabet = (props) => {  
  return (
    <Flex 
      flexDirection="row"
      maxHeight="100vh"
      minWidth="60%"
      justifyContent="center"
    >
      <Flex
          flexDirection="column"
      >
        {letterData.slice(0, 13).map(letter => (
          <LetterInput
            letterText={letter.letterText}
            letterValue={letter.letterValue}
          />
        ))}
      </Flex>
      <Flex
        flexDirection="column"    
      >
        {letterData.slice(13).map(letter => (
        <LetterInput
          letterText={letter.letterText}
          letterValue={letter.letterValue}
        />        
      ))}
      
      </Flex>
    </Flex>
    
    )  
}


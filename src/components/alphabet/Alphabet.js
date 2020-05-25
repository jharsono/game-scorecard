import React from 'react';
import { letterData } from './letterData';
import { LetterInput } from '../letterInput/LetterInput';
import { Flex } from 'rebass';

export const Alphabet = (props) => {
  const { ruleset } = props;
  
  return (
    <Flex 
      flexDirection="row"
      maxHeight="100vh"
      minWidth="60%"
      justifyContent="space-around"
    >
      <Flex
          flexDirection="column"
      >
        {letterData.slice(0, 13).map(letter => (
          <LetterInput
            letterText={letter.letterText}
            letterValue={letter.values[ruleset]}
          />
        ))}
      </Flex>
      <Flex
        flexDirection="column"    
      >
        {letterData.slice(13).map(letter => (
        <LetterInput
          letterText={letter.letterText}
          letterValue={letter.values[ruleset]}
        />        
      ))}
      
      </Flex>
    </Flex>
    
    )  
}

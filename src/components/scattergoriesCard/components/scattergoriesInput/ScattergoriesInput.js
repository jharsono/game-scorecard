import React, { useState, useEffect } from 'react';
import {
	Flex,
  Image,
} from 'rebass';
import {
	Input,
} from '@rebass/forms';
import xActive from '../../assets/x-active.png';
import xInactive from '../../assets/x-inactive.png';


export const ScattergoriesInput = (props) => {
  const { onSetRoundScore, roundScoreArray, setRoundScoreArray, index } = props;
  const [isCrossedOut, setIsCrossedOut] = useState(false);
  const [inputText, setInputText] = useState('');
  const [pointValue, setPointValue] = useState(0);
  const copyOfArray = roundScoreArray;

  const handleInput = (inputValue) => {
    setInputText(inputValue || '');
    setPointValue(inputValue ? 1 : 0);
  }

  const handleCrossOut = () => {
    setIsCrossedOut(!isCrossedOut)
    if (inputText && !isCrossedOut) {
      setPointValue(0);
    } else {
      setPointValue(1);
    }
  }

  useEffect(() => {
    roundScoreArray[index] = pointValue;
    setRoundScoreArray(roundScoreArray);
    onSetRoundScore();
  }, [pointValue])

  return(
    <Flex
      maxWidth={['90%', '80%']}
    >
      <Input
        onChange={e => handleInput(e.target.value)}
        disabled={isCrossedOut}
        sx={{
          fontSize: '16px',
          textDecoration: `${isCrossedOut ? "line-through" : "none"}`,
          borderTop: 0,
          borderLeft: 0,
          borderRight: 0,
          p: '4px',
          ':focus': {
            borderTop: 0,
            borderLeft: 0,
            borderRight: 0,
            borderBottom: "1px solid white",
            outline: 0, 
          },
        }}>
        </Input>
        <Flex
          onClick={handleCrossOut}
          alignItems="flex-end"
          sx={{
            visibility: inputText ? 'visible' : 'hidden',
          }}
        >
        <Image
          src={isCrossedOut ? xActive : xInactive}
          sx={{
            width: '30px',
            height: '30px',
            ml: '8px',
          }}
        />
        </Flex>
    </Flex>
   
  )
}
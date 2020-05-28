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
  const [isCrossedOut, setIsCrossedOut] = useState(false);
  const [inputText, setInputText] = useState('');
  const [pointValue, setPointValue] = useState(0);

  const handleChange = () => {
    if (inputText && !isCrossedOut) {
      setPointValue(1);
    } else {
      setPointValue(0);
    }
  }

  useEffect(() => {
    handleChange();
  })

  return(
    <Flex>
      <Input
        onChange={e => setInputText(e.target.value)}
        disabled={isCrossedOut}
        sx={{
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

        {!!inputText && (
          <Flex
          onClick={() => setIsCrossedOut(!isCrossedOut)}
          alignItems="flex-end"
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
        )}
    </Flex>
   
  )
}
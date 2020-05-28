import React, { useState, useRef } from 'react';
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
  const inputRef = useRef();

  return(
    <Flex>
      <Input
        ref={inputRef}
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
    </Flex>
   
  )
}
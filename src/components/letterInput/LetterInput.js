import React, { useState } from 'react';
import {
	Flex,
	Text,
	Image,
} from 'rebass';
import {
	Input,
} from '@rebass/forms';
import xActive from '../scattergoriesCard/assets/x-active.png';
import xInactive from '../scattergoriesCard/assets/x-inactive.png';


export const LetterInput = props => {
	const { 
			letterText,
			letterValue,
	} = props;

	const [isCrossedOut, setIsCrossedOut] = useState(false);
  const [inputText, setInputText] = useState('');

	const handleCrossOut = () => {
    setIsCrossedOut(!isCrossedOut)
	}

	const handleInput = (inputValue) => {
    setInputText(inputValue || '');
  }
	
	return (
		<Flex
			alignItems="center"
			justifyContent="space-evenly"	
		>
				<Flex
					width="10%"
				>
					<Text
						m="2px"
					>{letterText}</Text>
					{letterValue > 1 && (
						<Text
						verticalAlign="super"
						fontSize={['8px', '8px', '10px']}
						ml="4px"
					>
						{letterValue}
					</Text>
					)}
				
				</Flex>
				<Flex>
					<Input
					  onChange={e => handleInput(e.target.value)}
						disabled={isCrossedOut}
						id={letterText}
						name={letterText}
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
						}} />
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
            ml: '2px',
          }}
        />
        </Flex>
				</Flex>
			
		</Flex>
	)
	
}


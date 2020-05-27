import React from 'react';
import {
	Flex,
	Text,
} from 'rebass';
import {
	Input,
} from '@rebass/forms';

export const LetterInput = props => {
	const { 
			letterText,
			letterValue,
	} = props;
	console.log(letterValue)
	return (
		<Flex
			alignItems="center"
			justifyContent="space-evenly"
		>
				<Flex
					width="10%"
				>
					<Text>{letterText}</Text>
					{letterValue > 1 && (
						<Text
						verticalAlign="super"
						fontSize="10px"
					>
						{letterValue}
					</Text>
					)}
				
				</Flex>
				<Flex>
					<Input
						id={letterText}
						name={letterText}
					/>		
				</Flex>
			
		</Flex>
	)
	
}


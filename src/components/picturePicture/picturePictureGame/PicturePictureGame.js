import React, {useState} from 'react';
import { images } from './assets/Images';
import '../../../App.css';
import { randomNumber } from '../../../utils/utils';
import {
	Box,
	Flex,
  Button,
  Text,
 } from 'rebass';

 export const PicturePictureGame = (props) => {
	const [isVisible, setIsVisible] = useState(false)
	// const { onStart } = props;

	const handleClickStart = () => {
		setIsVisible(!isVisible);
		// onStart(true);
	}

	return (
		<>		
			{!isVisible && (
				<Button
					variant='primary'
					onClick={handleClickStart}
				>
					<Text
						fontSize={[ 3, 4, 5 ]}
						fontWeight='bold'
						color='black'
					>
						Start
					</Text>
				</Button>
			)}
			{isVisible && (
				<Flex
					justifyContent="center"
				>
					<Box
						sx={{
							position: "relative",
						}}
					>
						<img src={(images[randomNumber(0, 40)])} className="picture-picture" alt="Picture Picture" />
						<Box
						sx={{
							position: "absolute",
							bottom: "20px",
							right: "20px",
							bg: "black",
							opacity: "70%"
						}}
					>
						<Text
							color="white"
						>
							90
						</Text>
					</Box>
					</Box>
					
					
				</Flex>
			)}
		</>
	)
 }
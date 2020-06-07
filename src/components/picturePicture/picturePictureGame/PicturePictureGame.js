import React, {useState} from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { images } from './assets/Images';
import '../../../App.css';
import { randomNumber } from '../../../utils/utils';
import {
	Box,
	Flex,
  Button,
	Text,
 } from 'rebass';
 import { Input } from '@rebass/forms'

 export const PicturePictureGame = (props) => {
	const [isVisible, setIsVisible] = useState(false)
	const [time, setTime] = useState(90)

	const handleClickStart = () => {
		setIsVisible(!isVisible);
	}

	return (
		<>		
			{!isVisible && (
				<Flex
					alignItems="center"
					flexDirection="column"
				>
					<Flex
						alignItems="center"
						m="20px"
						justifyContent="space-between"
					>
						<Text
							mr="10px"
						>
							Timer
						</Text>
						<Input
							sx={{
								width: "100px"
							}}
							id='Timer'
							name='Timer'
							type='number'
							value={time}
							onChange={(e) => setTime(e.target.value)}
						/>
					</Flex>
					<Button
						variant='primary'
						onClick={handleClickStart}
						width="200px"
					>
						<Text
							fontSize={[ 3, 4, 5 ]}
							fontWeight='bold'
							color='black'
						>
							Start
						</Text>
					</Button>
				</Flex>		
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
						<img src={(images[randomNumber(0, 40)])} className="picture-picture" alt="game" />
						<Box
						sx={{
							position: "absolute",
							top: "5px",
							right: "5px",
							bg: "#282c34",
							borderRadius:"50%"
						}}
					>
							<CountdownCircleTimer
								isPlaying={isVisible}
								size={60}
								strokeWidth={6}
								duration={time}
								colors={[['#ffffff', 1]]}
								trailColor={'#282c34'}
							>
								{({ remainingTime }) => remainingTime}
							</CountdownCircleTimer>
						</Box>
					</Box>
				</Flex>
			)}
		</>
	)
 }
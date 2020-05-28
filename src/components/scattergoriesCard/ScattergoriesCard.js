import React from 'react';
import {
	Flex,
  Text,
} from 'rebass';
import {
	Input,
} from '@rebass/forms';
import { ScattergoriesInput } from './components/scattergoriesInput/ScattergoriesInput';

export const ScattergoriesCard = (props) => {
  const { onScoreUpdate } = props;

  return (
    <Flex
      flexDirection="column"
      p="20px"
      border="1px white solid"
    >
      {[...Array(12)].map((e, i) => (
        <Flex
          flexDirection="column"
          key={i}
        >
          <Flex
            alignItems="flex-end"
          >
            <Text
              minWidth="40px"
            >
              {i + 1}.
            </Text>
           <ScattergoriesInput />

          </Flex>
        </Flex>
      ))}
      <Flex
        mt="20px"
        alignItems="center"
      >
        <Text
          minWidth="50%"
        >Round Total</Text>
        <Input
          onChange={e => onScoreUpdate(parseInt(e.target.value))}
          placeholder={0}
          min={0}
          type="number"
        ></Input>
      </Flex>
    </Flex>
  )
}
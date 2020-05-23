import React from 'react';
import {
	Flex,
	Text,
} from 'rebass';
import {
	Input,
} from '@rebass/forms';

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
        >
          <Flex
            alignItems="center"
          >
            <Text
              minWidth="40px"
            >
              {i + 1}
            </Text>
            <Input></Input>
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
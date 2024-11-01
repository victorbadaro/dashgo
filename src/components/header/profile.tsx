import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex
      align="center"
    >
      <Box mr="4" textAlign="right">
        <Text>Victor Badaró</Text>
        <Text color="gray.300" fontSize="sm">
          victor.badaro@email.com
        </Text>
      </Box>

      <Avatar size="md" name="Victor Badaró" src="https://github.com/victorbadaro.png" />
    </Flex>
  );
}
import {
  Box,
  Text,
  Stack,
  HStack,
  Button,
  Divider,
  Flex,
} from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { getUpdateTime } from "../../utils/getUpdateTime";

export const Project = ({
  title,
  desc,
  languages,
  stars,
  updateTime,
  handleClick,
  id,
}) => {
  const getTotalLangsCount = () => {
    let total = 0;
    for (let lang in languages) total += languages[lang];
    return total;
  };

  const renderLangs = () => {
    const total = getTotalLangsCount();
    let elements = [];
    for (let lang in languages) {
      elements.push(
        <Text
          mr="0.25rem"
          bg="rgba(75,75,75,0.25)"
          borderRadius="20px"
          px="0.5rem"
          mt="1rem"
          key={Math.random()}
        >
          {`${lang}: ${Math.trunc((languages[lang] / total) * 1000) / 10}%`}
        </Text>
      );
    }
    return elements;
  };

  return (
    <Stack
      minH="300px"
      w={{ base: "400px", xxl: "400px" }}
      maxW={{ base: "400px" }}
      mt="1rem"
      mr="1rem"
      bg="rgba(75,75,75,0.25)"
      borderRadius="2xl"
      p="2rem"
      onClick={() => handleClick(id)}
      cursor="pointer"
      transition="all ease 0.25s"
      _hover={{ bg: "rgba(100,100,100,0.25)" }}
    >
      <Stack spacing={4}>
        <Text fontSize="1.5rem" fontWeight="700">
          {title}
        </Text>
        <Text>{desc ?? "No description"}</Text>
        <HStack zIndex="1000" position="relative">
          <Button
            fontWeight="400"
            leftIcon={<BsGithub />}
            variant="outline"
            onClick={(e) => e.stopPropagation()}
            _hover={{ bg: "#e7537a80" }}
          >
            Clone Project
          </Button>
          <Button
            fontWeight="400"
            leftIcon={<BsGithub />}
            variant="outline"
            onClick={(e) => e.stopPropagation()}
            _hover={{ bg: "#e7537a80" }}
          >
            Repo
          </Button>
        </HStack>
        <Divider color="white" />
      </Stack>
      <Flex fontSize="0.8rem" flexWrap="wrap" align="center">
        {renderLangs()}
      </Flex>
      <Flex wrap="wrap" align="center" pt="1.5rem">
        <HStack justifySelf="flex-end" mr="0.75rem">
          <BsGithub fontSize="1.5rem" />
          <Text>Stars</Text>
          <Box>{stars}</Box>
        </HStack>
        <Text fontSize="0.9rem">Updated {getUpdateTime(updateTime)}</Text>
      </Flex>
    </Stack>
  );
};

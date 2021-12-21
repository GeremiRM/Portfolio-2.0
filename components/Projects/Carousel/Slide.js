import {
  Box,
  Text,
  Stack,
  HStack,
  Button,
  Divider,
  Flex,
  Link,
} from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { AiOutlineExport } from "react-icons/ai";

import { getUpdateTime } from "../../utils/getUpdateTime";
import { PROJECTS_DATA } from "../config";

export const Slide = ({
  title,
  desc,
  languages,
  stars,
  updateTime,
  handleClick,
  id,
  repoUrl,
}) => {
  const liveSite = PROJECTS_DATA[title].url;

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
          color="black"
          mr="0.25rem"
          bg="#f37597"
          borderRadius="20px"
          mt="0.5rem"
          px="0.5rem"
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
      boxShadow="#e7537a55 0px 3px 12px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
      justifyContent="space-between"
      flexDirection="column"
      overflow="hidden"
      color="gray.300"
      bg="base.d100"
      rounded={5}
      flex={1}
      p={5}
      onClick={() => handleClick(id)}
    >
      <Stack spacing={4}>
        <Text fontSize="1.5rem" fontWeight="700">
          {title}
        </Text>
        <Text>{desc ?? "No description"}</Text>
        <HStack zIndex="1000" position="relative">
          <Link href={liveSite} target="_blank">
            <Button
              fontWeight="400"
              leftIcon={<AiOutlineExport />}
              variant="outline"
              onClick={(e) => e.stopPropagation()}
              _hover={{ bg: "#e7537a80" }}
            >
              See Live
            </Button>
          </Link>

          <Link href={repoUrl} target="_blank">
            <Button
              fontWeight="400"
              leftIcon={<BsGithub />}
              variant="outline"
              onClick={(e) => e.stopPropagation()}
              _hover={{ bg: "#e7537a80" }}
            >
              Repo
            </Button>
          </Link>
        </HStack>
        <Divider color="white" />
      </Stack>
      <Flex fontSize="0.8rem" flexWrap="wrap" align="center">
        {renderLangs()}
      </Flex>

      <Flex wrap="wrap" align="center" pt="1rem">
        <HStack justifySelf="flex-end" mr="0.75rem" mt="0.25rem">
          <BsGithub fontSize="1.5rem" />
          <Text>Stars</Text>
          <Box>{stars}</Box>
        </HStack>
        <Text fontSize="0.75rem" color="#f37597" mt="0.25rem">
          Updated {getUpdateTime(updateTime)}
        </Text>
      </Flex>
      <Button
        fontWeight="400"
        variant="outline"
        onClick={(e) => {
          e.stopPropagation();
          handleClick(id);
        }}
        w="100%"
        _hover={{ bg: "#e7537a80" }}
      >
        See More
      </Button>
    </Stack>
  );
};

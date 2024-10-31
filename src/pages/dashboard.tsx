import { Flex } from "@chakra-ui/react";
import { Header } from "../components/header";

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
    </Flex>
  );
}
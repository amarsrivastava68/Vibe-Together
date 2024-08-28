import {
  Container,
  Box,
  Text,
  TabPanel,
  Tab,
  TabList,
  Tabs,
  TabPanels,
} from "@chakra-ui/react";
import React from "react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        textAlign={"center"}
        p={3}
        bg={"skyblue"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="1g"
        borderWidth="1px"
      >
        <Text fontSize={"4xl"}>Vibe-Together</Text>
      </Box>
      <Box borderWidth={"1px"} w={"100%"} p={4} borderRadius={"lg"}>
        <Tabs variant="soft-rounded" >
          <TabList>
            <Tab width={"50%"}>Login</Tab>
            <Tab width={"50%"}>Signup</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login/>
            </TabPanel>
            <TabPanel>
             <Signup/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;

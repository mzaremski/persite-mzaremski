import type { MetaFunction } from "@vercel/remix";
import { TypeAnimation } from "react-type-animation";
import data from "../../data";
import { Flex, Text, Button, Box, Container } from "@radix-ui/themes";

export const meta: MetaFunction = () => {
  return [
    { title: data.pageTitle },
    { name: data.pageDescription },
  ];
};

export default function Index() {
  return (
    <Box style={{ background: "var(--gray-a2)", height: "100vh", width: "100vw", padding: "10px" }}>
      <Container size="1">
        <Box>
          <h1>Marcin Zaremski</h1>
          <h2>Not only dev.</h2>
          <span>
            Also a <TypeAnimation
              speed={8}
              repeat={Infinity}
              sequence={[
                "n entrepreneur",
                "n indie hacker",
                "\ photograper",
                "\ surfer",
                "\ cyclist",
              ]}
            />
          </span>
        </Box>

        <Flex direction="column" gap="2">
          <Text>Hello from Radix Themes xD</Text>
          <Button variant="classic">Let's go</Button>
        </Flex>

      </Container>
    </Box>
  );
}

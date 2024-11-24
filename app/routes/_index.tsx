import type { MetaFunction } from "@vercel/remix";
import { TypeAnimation } from "react-type-animation";
import data from "../../persite-data";
import { Box, Container, Section, Card, Separator, Spinner, Badge, Avatar, Flex } from "@radix-ui/themes";
import { TwitterLogoIcon, LinkedInLogoIcon, InstagramLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import AccordionDemo from "~/components/Accordion";

export const meta: MetaFunction = () => {
  return [
    { title: data.pageTitle },
    { name: data.pageDescription },
  ];
};

export default function Index() {
  return (
    <Box style={{ background: "var(--gray-a2)", height: "100vh", width: "100vw", zIndex: 100, paddingTop: '100px' }}>
      <Container size="2">
          <Card size="5">
            <Section size="1">
              <Flex gap="4" align="center">
                <Avatar
                  src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                  fallback="A"
                  size="7"
                />
                <div>
                  <h1 style={{ fontSize: '2.5rem', margin: '0' }}>Marcin Zaremski</h1>
                  <span style={{ fontSize: '1.5rem'}}>
                    A<TypeAnimation
                      speed={2}
                      repeat={Infinity}
                      sequence={[
                        "\ developer",
                        "n indie hacker",
                        "\ freelancer",
                        "n entrepreneur",
                        "\ photograper (a bit)",
                        "\ surfer",
                        "\ cyclist",
                      ]}
                    />
                  </span>
                </div>
              </Flex>

              <p style={{ paddingTop: '1em' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim rem cumque iusto animi, odio numquam veritatis illo blanditiis tempore ipsam.
              </p>
            </Section>

            <Section size="1">
              <h2>Work with me as:</h2>
              <AccordionDemo/>
            </Section>

            <Section size="1">
              <h2>Projects</h2>
              <ul className="project_list">
                <li className="project_list_item">
                  <a href="https://mzaremski.com">
                    <span>LingoReaders</span>
                    <Badge color="gray"><Spinner size="1" style={{ display: 'inline-block', }} />Q2 2024</Badge>
                  </a>
                  </li>
                <li className="project_list_item">
                  <a href="https://mzaremski.com">
                    Propsify <Badge color="gray"><Spinner size="1" style={{ display: 'inline-block', }} />Q1 2024</Badge>
                  </a>
                  </li>
                <li className="project_list_item">
                  <a href="https://mzaremski.com">
                    Persite <Badge color="green">2024 | Free</Badge>
                  </a>
                  </li>
                <li className="project_list_item">
                  <a href="https://mzaremski.com">
                    GpxOverlay <Badge color="green">1k$/m</Badge>
                  </a>
                  </li>
                <li className="project_list_item">
                  <a href="https://mzaremski.com">
                    Ikonate <Badge color="indigo">2018 | Free</Badge>
                  </a>
                </li>
              </ul>
            </Section>

            {/* // TODO: Change to Flex */}
            <Box width="100%" height="60px" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0px', position: 'absolute', bottom: '0', left: '0', borderTop: '1px solid var(--gray-a6)' }}>
              <Box style={{borderRight: '1px solid var(--gray-a6)', textAlign: 'center' }}>
                <a href="https://linkedin.com" style={{ color: 'var(--gray-a11)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', scale: '1.6' }}>
                  <LinkedInLogoIcon />
                </a>
              </Box>
              <Box style={{ borderRight: '1px solid var(--gray-a6)', textAlign: 'center' }}>
                <a href="https://twitter.com" style={{ color: 'var(--gray-a11)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', scale: '1.6' }}>
                  <TwitterLogoIcon />
                </a>
              </Box>
              <Box style={{ borderRight: '1px solid var(--gray-a6)', textAlign: 'center' }}>
                <a href="https://instagram.com" style={{ color: 'var(--gray-a11)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', scale: '1.6' }}>
                  <InstagramLogoIcon />
                </a>
              </Box>
              <Box style={{ textAlign: 'center' }}>
                <a href="https://instagram.com" style={{ color: 'var(--gray-a11)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', scale: '1.6' }}>
                  <GitHubLogoIcon/>
                </a>
              </Box>
            </Box>
          </Card>

        <Section>
          <h1>Blog</h1>
          {/* <Card size="1">
            <h2>Lorem ipsum dolor sit.</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim rem cumque iusto animi, odio numquam veritatis illo.
          </Card> */}

          <ul>
            <li><a href="/blog">Lorem, ipsum dolor.</a></li>
            <li><a href="/blog">Lorem ipsum dolor sit amet consectetur adipisicing.</a></li>
            <li><a href="/blog">Lorem ipsum dolor sit amet.</a></li>
          </ul>
        </Section>
      </Container>
    </Box>
  );
}

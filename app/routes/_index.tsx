import type { MetaFunction } from "@vercel/remix";
import { TypeAnimation } from "react-type-animation";
import data from "../../persite-data";
import { Box, Container, Section, Card, Spinner, Badge, Avatar, Flex } from "@radix-ui/themes";
import { TwitterLogoIcon, LinkedInLogoIcon, InstagramLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import AccordionDemo from "~/components/Accordion";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: data.pageTitle },
    { name: data.pageDescription },
  ];
};

export default function Index() {
  return (
    <Container size="2">
      <Card size="5">
          <Section size="1">
            <Flex gap="4" align="center">
            {/* PERSITE_TODO_CHANGE_ME: */}
              <Avatar
                src="avatar.jpg"
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
              A full-stack developer since 2018, with experience working on small projects as well as with large fintech startups (ex-Shares). After a 9-month travel break, I transitioned to indie hacking and freelancing in 2024.
            </p>
            <p>
              Startup mentality & happy to help you grow!
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
                <a>
                  <span>LingoReaders</span>
                  <Badge color="gray"><Spinner size="1" style={{ display: 'inline-block', }} />Q2 2024</Badge>
                </a>
                </li>
              <li className="project_list_item">
                <a>
                  Propsify <Badge color="gray"><Spinner size="1" style={{ display: 'inline-block', }} />Q1 2024</Badge>
                </a>
                </li>
              <li className="project_list_item">
                <Link to="/persite">
                  Persite <Badge color="green">2024 | Free</Badge>
                </Link>
                </li>
              <li className="project_list_item">
                <a href="https://gpxoverlay.com?utm_source=mzaremski">
                  GpxOverlay <Badge color="green">1k$/m</Badge>
                </a>
                </li>
              <li className="project_list_item">
                <a href="https://ikonate.com?utm_source=mzaremski">
                  Ikonate <Badge color="indigo">2018 | Free</Badge>
                </a>
              </li>
            </ul>
          </Section>

          {/* // TODO: Change to Flex */}
          <Box width="100%" height="60px" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0px', position: 'absolute', bottom: '0', left: '0', borderTop: '1px solid var(--gray-a6)' }}>
            <Box style={{borderRight: '1px solid var(--gray-a6)', textAlign: 'center' }}>
              <a
                href="https://www.linkedin.com/in/marcin-zaremski-8b3b4714b/"
                style={{ color: 'var(--gray-a11)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', scale: '1.6' }}
                target="_blank" rel="noreferrer"
              >
                <LinkedInLogoIcon />
              </a>
            </Box>
            <Box style={{ borderRight: '1px solid var(--gray-a6)', textAlign: 'center' }}>
              <a
                href="https://x.com/marcinzaremski"
                style={{ color: 'var(--gray-a11)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', scale: '1.6' }}
                target="_blank" rel="noreferrer"
              >
                <TwitterLogoIcon />
              </a>
            </Box>
            <Box style={{ borderRight: '1px solid var(--gray-a6)', textAlign: 'center' }}>
              <a
                href="https://instagram.com/mrrrcin"
                style={{ color: 'var(--gray-a11)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', scale: '1.6' }}
                target="_blank" rel="noreferrer"
              >
                <InstagramLogoIcon />
              </a>
            </Box>
            <Box style={{ textAlign: 'center' }}>
              <a
                href="https://github.com/mzaremski"
                style={{ color: 'var(--gray-a11)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', scale: '1.6' }}
                target="_blank" rel="noreferrer"
              >
                <GitHubLogoIcon/>
              </a>
            </Box>
          </Box>
        </Card>
    </Container>
  );
}

// <Section>
//   <h1>Blog</h1>
//   {/* <Card size="1">
//             <h2>Lorem ipsum dolor sit.</h2>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim rem cumque iusto animi, odio numquam veritatis illo.
//           </Card> */}

//   <ul>
//     <li><a href="/blog">Lorem, ipsum dolor.</a></li>
//     <li><a href="/blog">Lorem ipsum dolor sit amet consectetur adipisicing.</a></li>
//     <li><a href="/blog">Lorem ipsum dolor sit amet.</a></li>
//   </ul>
// </Section>

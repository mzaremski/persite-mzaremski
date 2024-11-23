import type { MetaFunction } from "@vercel/remix";
import { TypeAnimation } from "react-type-animation";
import data from "../../data";
import { Box, Container, Section, Card, Separator, Spinner, Badge } from "@radix-ui/themes";
import { Twitter , Linkedin, Instagram, Github, BookOpen, ThumbsUp, CogIcon, Compass, Paintbrush } from "lucide-react";
export const meta: MetaFunction = () => {
  return [
    { title: data.pageTitle },
    { name: data.pageDescription },
  ];
};

export default function Index() {
  return (
    <Box style={{ background: "var(--gray-a2)", height: "100vh", width: "100vw"}}>
      <Container size="2">
        <Section>
          <Card size="5">
            <Section>
              <h1 style={{ fontSize: '2.5rem', margin: '0' }}>Marcin Zaremski</h1>
              <span style={{ fontSize: '1.5rem' }}>
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
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim rem cumque iusto animi, odio numquam veritatis illo blanditiis tempore ipsam.
              </p>
            </Section>
            
            <Separator size="4" />

            <Section>
              <h2>Work with me as:</h2>
              <ul>
                <li>A freelancer</li>
                <li>A contractor</li>
                <li>A full time hire</li>
                <li>An indie hacker</li>
              </ul>
            </Section>

            <Separator size="4"/>

            <Section>
              <h2>Projects</h2>
              <ul>
                <li><BookOpen /> LingoReaders <Badge><Spinner size="1" style={{ display: 'inline-block', }} /></Badge></li>
                <li><ThumbsUp /> Propsify <Badge><Spinner size="1" style={{ display: 'inline-block', }} /></Badge></li>
                <li><CogIcon /> Persite <Badge>2024 | Free</Badge></li>
                <li><Compass /> GpxOverlay <Badge>1k$/m</Badge></li>
                <li><Paintbrush /> Ikonate <Badge>2018 | Free</Badge></li>  
              </ul>
            </Section>

            <Box width="100%" height="60px" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0px', position: 'absolute', bottom: '0', left: '0', borderTop: '1px solid var(--gray-a6)' }}>
              <Box style={{borderRight: '1px solid var(--gray-a6)', textAlign: 'center' }}>
                <a href="https://linkedin.com" style={{ color: 'var(--gray-a11)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Linkedin />
                </a>
              </Box>
              <Box style={{ borderRight: '1px solid var(--gray-a6)', textAlign: 'center' }}>
                <a href="https://twitter.com" style={{ color: 'var(--gray-a11)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Twitter/>
                </a>
              </Box>
              <Box style={{ borderRight: '1px solid var(--gray-a6)', textAlign: 'center' }}>
                <a href="https://instagram.com"style={{ color: 'var(--gray-a11)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Instagram />
                </a>
              </Box>
              <Box style={{ textAlign: 'center' }}>
                <a href="https://instagram.com" style={{ color: 'var(--gray-a11)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Github />
                </a>
              </Box>
            </Box>
          </Card>
        </Section>

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

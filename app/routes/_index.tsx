import type { MetaFunction } from "@vercel/remix";
import { Link } from "@remix-run/react";
import persiteData from "../../persite-data";
import { Box, Container, Section, Card, Spinner, Badge } from "@radix-ui/themes";
import AccordionDemo from "~/components/Accordion";
import BlogList from "~/components/BlogList";
import Header from "~/components/Header";
// TODO: Pro
// import WaitlistForm from "~/components/WaitlistForm";
import { generateMeta } from "~/utils/meta";

export const meta: MetaFunction = () => {
  const title = persiteData.pageTitle;
  const description = persiteData.pageDescription;
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  
  // TODO: This will be for pro
  // const ogImageUrl = `${origin}/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`;
  const ogImageUrl = `${origin}/og`;

  return generateMeta({
    title,
    description,
    image: ogImageUrl,
    url: origin,
  });
};

export default function Index() {
  return (
    <>
      <Container size="2">
        <Card size={{initial: '2', sm:'5'}}>
            <Section size="1">
              <Header/>
              <p style={{ paddingTop: '1em' }}>
                {persiteData.headerSection.personalDescription}
              </p>
              <p>
                {persiteData.headerSection.personalSlogan}
              </p>
            </Section>

            <Section size="1">
              <h2>{persiteData.accordionSection.title}</h2>
              <AccordionDemo/>
            </Section>

            <Section size="1">
              <h2>{persiteData.projectsSection.title}</h2>
              <ul className="project_list">
                {
                  persiteData.projectsSection.items.map((item) => (
                  <li className="project_list_item" key={item.title}>
                    <Link to={item.link}>
                      <span>{item.title}</span>
                      <Badge color={item.badgeColor}>
                        {item.status === 'in_progress' && <Spinner size="1" style={{ display: 'inline-block', }} />}
                        {item.badge}
                      </Badge>
                    </Link>
                  </li>
                  ))
                }
              </ul>
            </Section>

            {/* TODO: Pro version  */}
            {/* <WaitlistForm /> */}
            {/* <div style={{ marginBottom  : '160px' }}></div> */}

            {/* // TODO: Change to Flex */}
            <Box width="100%" height="60px" style={{ display: 'grid', gridTemplateColumns: `repeat(${persiteData.socialSection.length}, 1fr)`, gap: '0px', position: 'absolute', bottom: '0', left: '0', borderTop: '1px solid var(--gray-a6)' }}>
              {
                persiteData.socialSection.map((item, index) => (
                  <Box style={{ textAlign: 'center', borderRight: persiteData.socialSection.length-1 === index ? 'none' : '1px solid var(--gray-a6)' }} key={item.link}>
                    <Link
                      to={item.link}
                      style={{ color: 'var(--gray-a11)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', scale: '1.6' }}
                      target="_blank" rel="noreferrer"
                    >
                      {item.icon()}
                    </Link>
                  </Box>
                ))
              }
            </Box>
          </Card>
      </Container>

      <Container size="2">
        <BlogList/>
      </Container>
    </>
  );
}

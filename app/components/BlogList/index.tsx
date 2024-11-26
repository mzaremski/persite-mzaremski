import { Button, Card, Flex, Grid, Section } from "@radix-ui/themes";
import { Link } from "@remix-run/react";
import { getPosts } from "~/getPosts";

export default function BlogList() {
  const posts = getPosts();

  return (
    <Section>
      <h2>Blog</h2>

      <Grid columns="2" gap="3">
        {posts.map(({meta: {title, description}, path}) => (
          <Link to={path} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card size="1">
              <h2>{title}</h2>
              <p>{description}</p>
            </Card>
          </Link>
        ))}
      </Grid>

      <Flex justify="left" mt="4">
        <Link to="/blog">
          <Button size="2" variant="ghost">
            See all posts
          </Button>
        </Link>
      </Flex>
    </Section>
  )
}

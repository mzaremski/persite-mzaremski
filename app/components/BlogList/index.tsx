import { Card, Grid, Section } from "@radix-ui/themes";
import { Link } from "@remix-run/react";
import { getPosts } from "~/getPosts";

export default function BlogList() {
  const posts = getPosts();

  return (
    <Section id="blog-list">
      <h2>Blog</h2>

      <Grid columns="2" gap="3">
        {posts.map(({meta: {title, description}, path}) => (
          <Card size="1" variant="surface" key={path}>
            <Link to={path} style={{ textDecoration: 'none', color: 'inherit' }} key={path}>
              <h2>{title}</h2>
              <p>{description}</p>
            </Link>
          </Card>
        ))}
      </Grid>
    </Section>
  )
}

import { Card, Grid, Section } from "@radix-ui/themes";
import { getPosts } from "~/getPosts";

export default function BlogCarousel() {
  const posts = getPosts();

  return (
    <Section>
      <h2>Blog:</h2>
      <Grid columns="2" gap="3">
        {posts.map(({title, description}) => (
          <Card size="1">
            <h2>{title}</h2>
            <p>{description}</p>
          </Card>
        ))}
      </Grid>

    </Section>
  )
}

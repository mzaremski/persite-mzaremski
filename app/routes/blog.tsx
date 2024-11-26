import { Container, Card, Section } from "@radix-ui/themes";
import Header from "~/components/Header";
import { getPosts } from "~/getPosts";
import { Link } from "@remix-run/react";

export default function Blog() {
  const posts = getPosts();

  return (
    <Container size="2">
      <Card size={{ initial: '2', sm: '5' }}>
        <Section size="2">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Header/>
          </Link>
        </Section>
        <h1>Blog</h1>
        {
          posts.map((post) => (
            <Card size="1" my="4" variant="classic">
              <Link to={post.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                <h2>{post.meta.title}</h2>
                <p>{post.meta.description}</p>
              </Link>
            </Card>
          ))
        }
      </Card>
    </Container>
  )
}

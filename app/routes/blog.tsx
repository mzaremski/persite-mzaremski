import { Container, Card } from "@radix-ui/themes";
import BlogList from "~/components/BlogList";
export default function Blog() {
  return (
    <Container size="2">
      <Card size={{ initial: '2', sm: '5' }}>
        <h1>Blog</h1>

      </Card>
    </Container>
  )
}

import { Container, Subtitle, Title } from "./styles";

type HighlightProps = {
  title: string;
  subtitle: string;
};

export function Highlight(props: HighlightProps) {
  const { title, subtitle } = props;

  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}

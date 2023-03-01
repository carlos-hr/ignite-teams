import { Container, Message } from "./styles";

type EmptyListProps = {
  message: string;
};

export function EmptyList(props: EmptyListProps) {
  const { message } = props;

  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
}

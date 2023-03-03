import { TextInputProps } from "react-native";
import { Container } from "./styles";

type InputProps = TextInputProps & {};

export function Input(props: InputProps) {
  const { ...rest } = props;

  return <Container {...rest} />;
}

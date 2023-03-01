import { TouchableOpacityProps } from "react-native";
import { ButtonStylesProps, Container, Text } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  text: string;
  type?: ButtonStylesProps;
};

export function Button(props: ButtonProps) {
  const { text, type = "primary", ...rest } = props;
  return (
    <Container {...rest} type={type}>
      <Text>{text}</Text>
    </Container>
  );
}

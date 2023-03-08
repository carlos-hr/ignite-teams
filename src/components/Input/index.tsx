import { TextInputProps } from "react-native";
import { Container } from "./styles";
import { useTheme } from "styled-components/native";

type InputProps = TextInputProps & {};

export function Input(props: InputProps) {
  const { ...rest } = props;
  const { COLORS } = useTheme();

  return <Container {...rest} placeholderTextColor={COLORS.GRAY_300} />;
}

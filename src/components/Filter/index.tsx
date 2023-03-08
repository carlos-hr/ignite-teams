import { TouchableOpacityProps } from "react-native";
import { Container, FilterStyleProps, Title } from "./styles";

type FilterProps = TouchableOpacityProps &
  FilterStyleProps & {
    title: string;
  };

export function Filter(props: FilterProps) {
  const { title, isActive = false, ...rest } = props;

  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}

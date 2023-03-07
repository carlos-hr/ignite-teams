import { TouchableOpacityProps } from "react-native";
import { ButtonIconStyleProps, Container, Icon } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

type ButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconStyleProps;
};

export function ButtonIcon(props: ButtonIconProps) {
  const { icon, type = "primary" } = props;

  return (
    <Container>
      <Icon type={type} name={icon} />
    </Container>
  );
}

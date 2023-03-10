import { BackButton, BackIcon, Container, Logo } from "./styles";
import { CaretLeft } from "phosphor-react-native";
import logoImg from "@assets/logo.png";
import { useNavigation } from "@react-navigation/native";

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header(props: HeaderProps) {
  const { showBackButton = false } = props;
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("groups");
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
}

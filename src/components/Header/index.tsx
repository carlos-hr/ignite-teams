import { BackButton, BackIcon, Container, Logo } from "./styles";
import { CaretLeft } from "phosphor-react-native";
import logoImg from "@assets/logo.png";

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header(props: HeaderProps) {
  const { showBackButton = false } = props;

  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
}

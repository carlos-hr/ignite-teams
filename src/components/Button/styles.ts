import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonStylesProps = "primary" | "secondary";

type ButtonProps = {
  type: ButtonStylesProps;
};

export const Container = styled(TouchableOpacity)<ButtonProps>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme, type }) =>
    type === "primary" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.COLORS.WHITE};
`;

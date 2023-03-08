import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TextInput)`
  border-radius: 6px;
  min-height: 56px;
  max-height: 56px;
  padding: 16px;
  flex: 1;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
  `}
`;

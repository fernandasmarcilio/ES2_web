import styled from "styled-components";
import { Toolbar, Button } from "@material-ui/core";

export const Container = styled(Toolbar)`
  && {
    display: flex;
    justify-content: space-between;
  }
`;

export const ButtonMenu = styled(Button)`
  && {
    border-right: 2px solid var(--color-white);
    border-radius: 0;
  }
`;
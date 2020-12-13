import styled from "styled-components";
import { TableContainer, Button } from "@material-ui/core";

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 64px);
  display: flex;
  padding: 20px 0;
  justify-content: center;
  background: var(--color-white);
`;


export const ContainerTable = styled(TableContainer)`
  &&{
    width: 80%;
    height: 100%;
    margin: 20px auto;
  }
`;

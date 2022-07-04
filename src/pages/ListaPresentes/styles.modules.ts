import { Box } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled(Box)`
  &.MuiBox-root{
    width: 100%;
    height: 100vh;
    background-color: #E9E9E9;
  }
`;

export const BoxContained = styled(Box)`
  &.MuiBox-root{
    width: 80%;
    background-color: #E9E9E9;
  }
`;
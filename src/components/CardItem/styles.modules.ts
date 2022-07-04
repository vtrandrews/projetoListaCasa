import { Box } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled(Box)`
  &.MuiBox-root{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #D9D9D9;
  }
`;

export const BoxHeader = styled(Box)`
  &.MuiBox-root{
    display: flex;
    width: 80%;
    height: 100%;
  }

  ul li{
    display: inline;
    list-style: none;
    margin-left: 15px;
    text-decoration: none;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;
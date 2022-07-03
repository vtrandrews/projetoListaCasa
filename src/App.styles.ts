import { Box, Button, Typography } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled(Box)`
  &.MuiBox-root{
    background-image: url("https://media.istockphoto.com/photos/golden-orange-colored-blurred-background-abstract-blur-glowing-orange-picture-id1172811422?b=1&k=20&m=1172811422&s=612x612&w=0&h=N_I339orgpCdwZIH1dF8BOF-JCAcIAYaYoqrC4VAf7Q=");
    background-size: cover;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    display: flex;
    overflow: hidden;
  }
`;

export const BoxContained = styled(Box)`
  &.MuiBox-root{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F9F9F9;
    border-radius: 50px;
    width: 90%;
    height: 90%;
    box-shadow: 1px 1px 28px -2px rgba(0,0,0,0.45);
    -webkit-box-shadow: 1px 1px 28px -2px rgba(0,0,0,0.45);
    -moz-box-shadow: 1px 1px 28px -2px rgba(0,0,0,0.45);
  }
`;

export const BoxComplementary = styled(Box)`
  &.MuiBox-root{
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const TitleText = styled(Typography)`
  &.MuiTypography-root{
    font-family: 'The Nautigal', cursive;
    font-weight: 400;
    font-size: 120px;
    text-align: center;
  }
`;

export const InitialText = styled(Typography)`
  &.MuiTypography-root{
    font-family: 'Lato', sans-serif;
    font-weight: 800;
    font-size: 48px;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const SecondaryText = styled(Typography)`
  &.MuiTypography-root{
    font-family: 'Lato', sans-serif;
    font-weight: 600;
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const BoxButtons = styled(Box)`
  &.MuiBox-root{
    display: flex;
    width: 100%;
    justify-content: center;
  }
`;

export const InitialButton = styled(Button)`
  &.MuiButton-root{
    font-size: 14px;
    font-weight: 600;
    text-transform: none;
    background-color: #212121;
    color: #fff;
    margin: 5px;

    &:hover{
      background-color: #676767;
    }
  }
`;
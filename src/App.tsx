import {
  BoxButtons, BoxComplementary, BoxContained,
  Container, InitialButton, InitialText,
  SecondaryText,
  TitleText
} from './App.styles';

function App() {
  return (
    <Container>
      <BoxContained>
        <BoxComplementary>
          <TitleText>
            Vitor e Mayara
          </TitleText>
          <InitialText>
            Seja bem vindo(a)
            <br/>
            ao nosso chá de casa nova
          </InitialText>
          <SecondaryText>
            Escolha qual lista deseja acessar:
          </SecondaryText>
          <BoxButtons>
            <InitialButton variant='contained'>
              Família
            </InitialButton>
            <InitialButton variant='contained'>
              Amigos
            </InitialButton>
          </BoxButtons>
        </BoxComplementary>
      </BoxContained>
    </Container>
  );
}

export default App;

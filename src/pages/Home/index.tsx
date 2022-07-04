import {
  BoxButtons, BoxComplementary, BoxContained,
  Container, InitialButton, InitialText,
  SecondaryText,
  TitleText
} from './styles.modules';

function Home() {
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
            Acesse a lista de presentes:
          </SecondaryText>
          <BoxButtons>
            <InitialButton variant='contained' href='/lista-de-presentes'>
              Lista de Presentes
            </InitialButton>
          </BoxButtons>
        </BoxComplementary>
      </BoxContained>
    </Container>
  );
}

export default Home;

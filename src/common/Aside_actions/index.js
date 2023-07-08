import { Title, Container, Content } from "./styled";

const AsideAction = ({ title, content, extraBodyContent }) => (
  <Container>
    <Title>{title}</Title>
    <Content>
      {content}
      {extraBodyContent}
    </Content>
  </Container>
);

export default AsideAction;

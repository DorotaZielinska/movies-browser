import { Title, Container } from "./styled";

const AsideAction = ({ title, content, extraBodyContent }) => (
  <Container>
    <Title>{title}</Title>
    <div>
      {content}
      {extraBodyContent}
    </div>
  </Container>
);

export default AsideAction;

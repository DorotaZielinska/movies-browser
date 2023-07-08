import { Title, Container } from "./styled";

const AssideAction = ({ title, content, extraBodyContent }) => (
  <Container>
    <Title>{title}</Title>
    <div>
      {content}
      {extraBodyContent}
    </div>
  </Container>
);

export default AssideAction;

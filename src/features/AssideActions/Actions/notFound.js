import AssideAction from "../../../common/Asside_actions";
import { Image } from "../styled";

const NotFound = ({ props }) => (
  <AssideAction
    title={`Sorry, there are no results for "${props}"`}
    content={<Image />}
  />
);

export default NotFound;

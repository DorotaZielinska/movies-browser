import AsideAction from "../../../common/Aside_actions";
import { Image } from "../styled";

const NotFound = ({ props }) => (
  <AsideAction
    title={`Sorry, there are no results for "${props}"`}
    content={<Image />}
  />
);

export default NotFound;

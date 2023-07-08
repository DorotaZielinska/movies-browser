import AssideAction from "../../../common/Asside_actions";
import { Spinner } from "../styled";

const Loading = ({ query }) => (
  <AssideAction title={`Search results for "${query}"`} content={<Spinner />} />
);

export default Loading;

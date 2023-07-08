import AsideAction from "../../../common/Aside_actions";
import { Spinner } from "../styled";

const Loading = ({ query }) => (
  <AsideAction title={`Search results for "${query}"`} content={<Spinner />} />
);

export default Loading;

import { useHistory, useLocation } from "react-router-dom";

export const useQueryParameter = (key) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  return searchParams.get(key);
};

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();

  return (keyValue) => {
    const searchParams = new URLSearchParams(location.search);
for(const {key, value} of keyValue) {
    if (value === undefined) {
       searchParams.delete(key);
     } else {
     searchParams.set(key, value);
     }
}
    // if (value === undefined) {
    //   searchParams.delete(key);
    // } else {
    //   searchParams.set(key, value);
    // }
    history.push(
      `/${location.pathname.split("/")[1]}?${searchParams.toString()}`
    );
    //const newSearch = searchParams.toString();
   // history.push(`/${location.pathname.split("/")}?${newSearch}`
   // );
  };
};

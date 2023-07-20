import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../common/Container";
import { useEffect } from "react";
//import debounce from "lodash/debounce";
import { PeopleMovieTileList } from "../../common/TileList/TileMovie";
import {
  PeopleDetailsItemList,
  PeopleDetailsList,
  PeopleDetailsTitle,
} from "./styled";
import { getPersonId, selectCast, selectPersonId, selectStatus } from "./peopleDetailsSlice";
import { Loading } from "../AsideActions/Loading/loading";
import { Error } from "../AsideActions/Error/error";
import { useParams } from "react-router-dom";


export const PeopleDetails = () => {
  const dispatch = useDispatch();
  const personCast = useSelector(selectCast);
 // const credits = useSelector(selectCredits);
  const status = useSelector(selectStatus);
const { id } = useParams();

//  const debouncedLoad = useCallback(
 //   debounce((personId) => {
 //     dispatch(getPersonId(personId));
  //  }, 1000),
  //  [dispatch]
  //);

  //useEffect(() => {
  //  if (personId !== "" && personId !== null) {
  //    debouncedLoad(personId);
  //  } else {
   //   debouncedLoad.cancel();
   //   dispatch(fetchPeopleMovieListLoad(personId));
  //  }
 // }, [dispatch, debouncedLoad, personId]); 

 
  useEffect(() => {
   dispatch(getPersonId({ id}))
  }, [dispatch, id ]); 


  return status === "error" ? (
    <Error />
    ) : status === "loading" ? (
      <Loading />
    ) :
      (
    <Container>
        <>
        <PeopleDetailsTitle>{`Movies - cast ()`} </PeopleDetailsTitle>
        <PeopleDetailsList>
          {personCast.map((movie) => (
            <PeopleDetailsItemList key={movie.id}>
              <PeopleMovieTileList
                id={movie.id}
                poster={movie.poster_path}
                title={movie.title}
                character={movie.character}
                year={movie.release_date}
                vote={movie.vote_average}
                votes={movie.vote_count}
                genres={movie.genre_ids}
              />
            </PeopleDetailsItemList>
          ))}
        </PeopleDetailsList>
      </>
      
      <>
        <PeopleDetailsTitle>{`Movies - crew ()`} </PeopleDetailsTitle>
        <PeopleDetailsList>
          <PeopleDetailsItemList>
            <PeopleMovieTileList
            //  id={movie.id}
            //poster={movie.poster_path}
            // title={movie.title}
            //  year={movie.release_date}
            //  vote={movie.vote_average}
            //  votes={movie.vote_count}
            //  genres={movie.genre_ids}
            />
          </PeopleDetailsItemList>
        </PeopleDetailsList>
      </>
    </Container>
  );
};

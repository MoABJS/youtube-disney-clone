import styled from "styled-components";
import ImageSlider from "./components/ImageSlider";
import Viewers from "./components/Viewers";
import Recommends from "./components/Recommends";
import NewDisney from "./components/NewDisney";
import Originals from "./components/Originals";
import Trending from "./components/Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "./config/movie/movieSlice";
import { db } from "./config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { selectUserName } from "./config/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);

  useEffect(() => {
    let recommends = [];
    let newDisney = [];
    let originals = [];
    let trending = [];

    const getMovies = async () => {
      try {
        const queryMovies = await getDocs(collection(db, "movies"));
        queryMovies.docs.forEach((doc) => {
          switch (doc.data().type) {
            case "recommend":
              recommends = [...recommends, { id: doc.id, ...doc.data() }];
              break;
            case "new":
              newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
              break;
            case "original":
              originals = [...originals, { id: doc.id, ...doc.data() }];
              break;
            case "trending":
              trending = [...trending, { id: doc.id, ...doc.data() }];
              break;
          }
        });
        // console.log(recommends);

        dispatch(
          setMovies({
            recommend: recommends,
            newDisney: newDisney,
            original: originals,
            trending: trending,
          })
        );
      } catch (err) {
        console.error(err);
      }
    };

    getMovies();
  }, [username]);



  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;

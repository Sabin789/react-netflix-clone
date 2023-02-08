import Choices from "./Choices";
import MyFooter from "./Footer";
import Movie from "./Movie";

const Home = () => {
    return ( 
        <>
        <Choices />
              
          <Movie name={"Harry Potter"} />
                 
          <Movie name={"Lord Of The Rings"} />
        
          <Movie name={"Guardians Of The Galaxy"} />

          <MyFooter />
        </>
     );
}
 
export default Home;
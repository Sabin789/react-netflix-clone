import Choices from "./Choices";
import MyFooter from "./Footer";
import Movie from "./Movie";
import MyNav from "./MyNav";
import SingleMovie from "./SingleMovie";

const Home = () => {
    return ( 
        <>
         <MyNav placeholder={"Search"}/>
        <Choices />
              
          {/* <Movie name={"Harry Potter"} />
                 
          <Movie name={"Lord Of The Rings"} />
        
          <Movie name={"Guardians Of The Galaxy"} /> */}
          <SingleMovie />

          <MyFooter />
        </>
     );
}
 
export default Home;
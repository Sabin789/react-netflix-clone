import Movie from "./Movie";
import MyNav from "./MyNav";
const TvShows = () => {
    return ( 
        <>
         <MyNav placeholder={"Search in TV Shows…"}/>
         <Movie name={"Harry Potter"} />
                 
                 <Movie name={"Lord Of The Rings"} />
               
                 <Movie name={"Guardians Of The Galaxy"} />
        </>
     );
}
 
export default TvShows;
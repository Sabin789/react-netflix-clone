
import avatar from "../assets/avatar.png"
import MyNav from "./MyNav";
const Profile = () => {
    return (
      <>
      <MyNav placeholder={"Search"}/>
        <div className="body">
  
    <h1 id="heading" className="white">Edit Profile</h1>
<div className="hero">
    
    <div className="row d-flex">
        <div className="col-4 mt-3">
        <img src={avatar} alt=""/>
        </div>
        <div className="col-8 info mt-3">
          <h4 className="grey white p-2">Strive Student</h4>
          <br/>

          <h6>Language:</h6>

          <select name="Genres" id="select" className="pr-3">
            <option value="1">English</option>
          </select>
          <div className="line"></div>
          <h3>Maturity Settings:</h3>
          <span className="grey white p-1">All Maturity Ratings</span>
          <p className="mt-3">Show titles of <b>all maturity ratings</b>  on this profile</p>
          <button className="edit">Edit</button>
          <div className="line"></div>
          <h3>Autoplay Controls</h3>
          <label className="container">
            <input type="checkbox"/>
            <span className="checkmark">Autoplay next episode in a series on all devices</span>
          </label>
          <label className="container">
            <input type="checkbox"/>
            <span className="checkmark">Autoplay previews while browsing on all devices</span>
          </label>
        
        </div>
    </div>

</div>
<div className="buttons d-flex">
    <button className="save">SAVE</button>
    <button className="other">Cancel</button>
    <button className="others">Delete Profile</button>
  </div>
       </div>
       </>
     );
}
 
export default Profile
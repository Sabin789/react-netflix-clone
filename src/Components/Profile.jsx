
import avatar from "../assets/avatar.png"
const Profile = () => {
    return (
        <body class="body">
  
    <h1 id="heading" class="white">Edit Profile</h1>
<div class="hero">
    
    <div class="row d-flex">
        <div class="col-4 mt-3">
        <img src={avatar} alt=""/>
        </div>
        <div class="col-8 info mt-3">
          <h4 class="grey white p-2">Strive Student</h4>
          <br/>

          <h6>Language:</h6>

          <select name="Genres" id="select" class="pr-3">
            <option value="1">English</option>
          </select>
          <div class="line"></div>
          <h3>Maturity Settings:</h3>
          <span class="grey white p-1">All Maturity Ratings</span>
          <p class="mt-3">Show titles of <b>all maturity ratings</b>  on this profile</p>
          <button class="edit">Edit</button>
          <div class="line"></div>
          <h3>Autoplay Controls</h3>
          <label class="container">
            <input type="checkbox"/>
            <span class="checkmark">Autoplay next episode in a series on all devices</span>
          </label>
          <label class="container">
            <input type="checkbox"/>
            <span class="checkmark">Autoplay previews while browsing on all devices</span>
          </label>
        
        </div>
    </div>

</div>
<div class="buttons d-flex">
    <button class="save">SAVE</button>
    <button class="other">Cancel</button>
    <button class="others">Delete Profile</button>
  </div>
       </body>
     );
}
 
export default Profile
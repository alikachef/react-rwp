import React, { Component } from "react";
import wC from "../Images/wC.jpg"

 
class Home extends Component {
  render() {
    return (
      <div className = "comp">
          <div className="ims">

           <img src={wC} />

          </div>
        <h3>Our Services </h3>
        <div className="pH">
        <p >
             We offer commercial pressure washing services, and residential power washing services. There’s a never ending supply of exteriors that need cleaning. With Richmond’s weather a typical exterior should be cleaned every third year. If the property is near water or covered by lots of foliage more frequent cleanings may be required. My motto is do what it takes to leave the property clean. Not every customer remembers to tell me that they have a shed that is turning green, their deck furniture may have mildew on it or that the bottom of the trash can needs to be washed out. If I see something dirty I clean it.
        </p>
        </div>
      </div>
    );
  }
}
 
export default Home;
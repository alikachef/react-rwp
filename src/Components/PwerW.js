import React, { Component } from "react";
import Bf from "../Images/bf.png" 

class PwerW extends Component {
  render() {
    return (
      <div className = "comp">
          <div className="ims">

            <img src={Bf} />

            </div>
        <h3>House Washing</h3>
        <div className="pH">
        <p>
             This is a comprehensive cleaning from gutters, siding, windows, foundations, porches, sidewalks, sheds you name it. If your home has green algae, black dust or mildew I can remove and make your home look like new again. 
        </p>
        </div>
      </div>
    );
  }
}
 
export default PwerW;
import React, { Component } from "react";
import BFG from "../Images/bfG.jpg"
class GutterC extends Component {
  render() {
    return (
      <div className = "comp">
        <div className="ims">

        <img src={BFG} />

        </div>
        <h3>Gutter cleaning </h3>

        <div className="pH">
        <p>
            By hand Gutter cleaning removing any debris, dirt, and leaves from your gutters and downspouts that clog your gutter system and stop rainwater from flowing freely from the roof to the ground.  
        </p>
        </div>
      </div>
    );
  }
}
 
export default GutterC;
import React, { Component } from "react";
import BFD from "../Images/bfD.jpg"
class DeckC extends Component {
  render() {
    return (
      <div className = "comp">
        <div className="ims">

        <img src={BFD} />

        </div>
        <h3>Deck cleaning and staining</h3>
        <div className="pH">
        <p>
            I can completely strip deck finishes or if the finish in reasonably good shape I can clean it and apply new stain. I also do wood replacement and repairs as needed. I have an entire toolbox of skills to save old decks and make them look like new again. I can price cleaning and staining over the phone or I would be glad to inspect it in person and provide a quote.
        </p>
        </div>
      </div>
    );
  }
}
 
export default DeckC;
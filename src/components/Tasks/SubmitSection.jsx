import React from "react";
import { Button } from "@shopify/polaris";
import house from "../../assets/images/house.png";
import airBalloon2 from "../../assets/images/airBalloon2.png";
import sun from "../../assets/images/sun.png";
import mountain from "../../assets/images/mountain.png";
const SubmitSection = () => {
  return (
    <div className="submit-container">
      <img className="submit-img__sun" src={sun} alt="sun" />

      <div className="submit-section">
        <h4>Hey John welcom to Carson Dash</h4>
        <p>
          Submit a new task, pick a task from the catalog or subscribe to submit
          unlimited tasks
        </p>

        <Button>Submit a new task</Button>
        <Button>Subscribe & Save</Button>
      </div>
      <img
        className="submit-img__air-balloon"
        src={airBalloon2}
        alt="airballoon"
      />

      <img className="submit-img__house" src={house} alt="house" />
      <img className="submit-img__mountain" src={mountain} alt="moutain" />
    </div>
  );
};

export default SubmitSection;

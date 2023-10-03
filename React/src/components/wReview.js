import styles from "./wReview.scoped.css";
import React from "react";
import ReactStars from "react-rating-stars-component";
const WReview = (props) => {
  const {status} = props
  return (                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    <div className="background" style={ status ? {width:"40vw"} : {width:"0"}} >
      <button className="getback">X</button>
      <div className="container-info">
        <img src="/krit.svg" alt="" className="pic-pro" />
        <div className="container-name">
          <h1 className="name">name</h1>
          <p className="class">Posting publicly</p>
        </div>
      </div>
      <div className="star">
          <ReactStars count={5} edit={true} isHalf={true} size={30} activeColor="#D3C3AF"  />
          
      </div>
      <div className="input">
        <input className="input-details" type="text" placeholder="Share datails of your own experience at this place" /><br/>
        <input className="input-photo" type="file" />
      </div>
      <div className="container-button">
        <button className="b-cancel">Cancel</button>
        <button className="b-submit">Submit</button>
      </div>
    </div>
  );
};

export default WReview;

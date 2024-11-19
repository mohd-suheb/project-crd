import React from "react";
import { FcLike } from "react-icons/fc";
// import Card from './component/Card'

const Card = ({props}) => {
  let course = props.course;
  let liked = props.liked;
  let setliked = props.setliked;

  function clikhadler(){
    //logic
  }


  return (
    <div >
     
     <img src = {course.image.url}></img>

      {/* Like Button */}
      <div>
        <button onClick={clikhadler}>
          <FcLike />
        </button>
      </div>

      {/* Title and Description */}
      <div>
        <h3>{course.title}</h3>
        <div>
          <p >
            {course.description }
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
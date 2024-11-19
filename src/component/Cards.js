import React, { useState } from 'react'



const Cards = (props) => {
  const courses = props.courses;
  const[liked, setliked] = useState([]);

  function getAllCourses() {
    let allCourses = [];
    Object.values(courses).forEach((array) => {
      array.forEach((courseData) => {
        allCourses.push(courseData);
      });
    });
    return allCourses;
  }

  return (
    <div>
      {getAllCourses().map((course) => (
        <Card key={course.id} course={course} liked = {liked} setliked = {setliked}/>
      ))}
    </div>
  );
};

export default Cards;
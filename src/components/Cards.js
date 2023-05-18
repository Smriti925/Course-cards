import React, { useState } from "react";
import Card from "./Card";

function Cards(props) {
  let courses = props.courses;
  let category = props.category;
  const [likedCourses, setLikedCourses] = useState([]);

  let allCourses = [];
  const getCourse = () => {
    if (category === "All") {
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    } else {
      return courses[category];
    }
  };

  return (
    <div className="grid grid-flow-row gap-10 lg:gap-16 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 px-5 sm:px-10 lg:px-60 pb-5">
      {getCourse().map((item) => {
        return (
          <div>
            <Card
              item={item}
              likedCourses={likedCourses}
              setLikedCourses={setLikedCourses}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Cards;

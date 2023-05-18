import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card(props) {
  let item = props.item;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler() {
    if (likedCourses.includes(item.id)) {
      //unlike if present already
      setLikedCourses((prev) => prev.filter((cid) => cid !== item.id));
      toast.warning("Like removed");
    } else {
      //not liked initially
      if (likedCourses.length === 0) setLikedCourses([item.id]);
      //add if not present (non-empty last time)
      else setLikedCourses((prev) => [...prev, item.id]);
      toast.success("Liked successfully");
    }
  }
  return (
    <div className="grid gap-2">
      <h1 className="text-xl font-bold">{item.title}</h1>
      <img src={item.image.url} className="" alt="img" />
      <p className="text-justify">{item.description}</p>
      <button onClick={clickHandler}>
        {likedCourses.includes(item.id) ? (
          <FcLike fontSize="1.75rem" />
        ) : (
          <FcLikePlaceholder fontSize="1.75rem" />
        )}
      </button>
    </div>
  );
}

export default Card;

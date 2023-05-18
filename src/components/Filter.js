import React from "react";
import { filterData } from "../data";

function Filter(props) {
  let category = props.category;
  let setCategory = props.setCategory;

  function selectHandler(title) {
    setCategory(title);
  }
  return (
    <div className="flex gap-10 justify-center p-10">
      {filterData.map((item) => {
        return (
          <div className="">
            <button
              key={item.id}
              className={`bg-yellow-500 px-3 py-2 w-32 rounded-xl  ${
                category === item.title
                  ? "bg-opacity-60 border border-yellow-600"
                  : "bg-opacity-40 border border-transparent"
              }`}
              onClick={() => selectHandler(item.title)}
            >
              {item.title}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Filter;

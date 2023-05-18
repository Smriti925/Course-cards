import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { filterData } from "./data";
import { apiUrl } from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(apiUrl);
        const final_data = await res.json();
        //save data into a variable
        console.log(final_data);
        setCourses(final_data.data);
      } catch (error) {
        toast.error("Something went wrong");
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <Filter category={category} setCategory={setCategory} />
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <Cards courses={courses} category={category} />
        )}
      </div>
    </div>
  );
};

export default App;

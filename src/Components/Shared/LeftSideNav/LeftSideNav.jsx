import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function LeftSideNav() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("data/categories.json")
      .then((result) => result.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div className="space-y-6">
      <h2>All Categories</h2>
      {category.map((category) => (
        <NavLink
          to={`/category/${category.id}`}
          className="block ml-4 text-xl font-semibold"
          key={category.id}
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
}

export default LeftSideNav;

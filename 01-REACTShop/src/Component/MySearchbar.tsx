import JSONDATA from "../data.json";
import { useState } from "react";
import "../css/style.css";
function MySearchbar() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="MySearchBar">
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {JSONDATA.filter((val) => {
          if(searchTerm == "") {
              return val
          } else if (val.title.toLocaleLowerCase().includes(searchTerm.toLowerCase())) {
              return val
          }
      }).map((val, key) => {
        return (
          <div className="title" key={key}>
            <p>{val.title} </p>
          </div>
        );
      })}
    </div>
  );
}

export default MySearchbar;

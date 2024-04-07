import React, { useEffect, useState } from "react";

const DropDown = () => {
  const [listData, setListData] = useState([]);
  const [opt, setOpt] = useState();

  useEffect(() => {
    showList();
  }, [opt]);
  const showList = async () => {
    let url = "https://fakestoreapi.com/users";
    url += opt === "Dec" ? "?sort=" + "desc" : "";
    let data = await fetch(url);
    let json = await data.json();
    setListData(json);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>
        <select value={opt} onChange={(e) => setOpt(e.target.value)}>
          <option value="Asc">Accending</option>
          <option value="Dec">Decending</option>
        </select>
      </div>
      <div
        style={{
          width: "160px",
        }}
      >
        <ul>
          {listData.map((item, key) => (
            <li key={key}>{item.username}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;

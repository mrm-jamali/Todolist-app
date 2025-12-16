import React, { useState, useEffect } from 'react';
import styles from "./FilterbButtons.module.css";



function FilterButtons({ worksList }) {
  const [filteredList, setFilteredList] = useState([]);
    const [activeBtn, setActiveBtn] = useState("all");


  useEffect(() => {
    console.log("🔹 filteredList تغییر کرد:", filteredList);
  }, [filteredList]);

  const displaylistHandler = (status) => {
    let newList = [];

    switch (status) {
      case "all":
        newList = worksList;
        break;

      case "pending":
        newList = worksList.filter(work => work.status === "pending");
        break;

      case "active":
        newList = worksList.filter(work => work.status === "active");
        break;

      case "done":
        newList = worksList.filter(work => work.status === "done");
        break;

      default:
        break;
    }

    setFilteredList(newList);
  };

  return (
    <div className={styles.btnsfilter}>
      <div >
         <button onClick={() => {
          setActiveBtn("all");
          displaylistHandler("all");
        }}    className={activeBtn === "all" ? styles.activeBtn : ""}>همه</button>
      <button onClick={() => {
          setActiveBtn("pending");
          displaylistHandler("pending");
        }}
        className={activeBtn === "pending" ? styles.activeBtn : ""}>در انتظار</button>
      <button onClick={() => {
          setActiveBtn("done");
          displaylistHandler("done");
        }}
        className={activeBtn === "done" ? styles.activeBtn : ""}>انجام شده</button>
      <button onClick={() => {
          setActiveBtn("active");
          displaylistHandler("active");
        }}
        className={activeBtn === "active" ? styles.activeBtn : ""}>فعال</button>
      </div>
     
     

 
      <div className={styles.datafilter} >
        {filteredList.length === 0 ? (
          <p>چیزی برای نمایش وجود ندارد</p>
        ) : (
          filteredList.map(work => (
            <div  key={work.id}>
              <p>{work.text}</p>             </div>
          ))
        )}
      </div>
    </div>
  )
}

export default FilterButtons;

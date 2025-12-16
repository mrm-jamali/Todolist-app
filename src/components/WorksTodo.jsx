import ChangeStatus from "./ChangeStatus";
import styles from "./WorksTodo.module.css";
import { MdOutlineDeleteSweep } from "react-icons/md";

function WorksTodo({ worksList, setWorksList, changeStatus }) {
  const toggleChecked = (id) => {
    setWorksList(
      worksList.map((work) =>
        work.id === id ? { ...work, checked: !work.checked } : work
      )
    );
  };

  const deleteHandler = (id) => {
    setWorksList(worksList.filter((work) => id !== work.id));
  };

  const deleteAllHandler = () => {
    setWorksList([]);
  };

  return (
    <>
      {worksList.length > 0 ? (
        <div className={styles.container}>
          {worksList.map((work) => (
            <div key={work.id} className={styles.workItem}>
              <div className={styles.itemRow}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  checked={work.checked}
                  onChange={() => toggleChecked(work.id)}
                />
                <p className={styles.workText}>{work.text}</p>
              </div>

              <ChangeStatus work={work} changeStatus={changeStatus} />

              <button
                className={styles.delbtn}
                onClick={() => deleteHandler(work.id)}
                disabled={!work.checked}
              >
               <MdOutlineDeleteSweep size={20} />
              </button>
            </div>
          ))}

          <div className={styles.cartbtn}>
            <button
              className={styles.delallbtn}
              onClick={deleteAllHandler}
            >
              حذف همه
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default WorksTodo;

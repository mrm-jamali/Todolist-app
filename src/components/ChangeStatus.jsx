
import styles from "./ChangeStatus.module.css"

function ChangeStatus({changeStatus,work}) {

  return (
    <div className={styles.container}>
      <select name="status" id="status" value={work.status}   onChange={(e) => changeStatus(work.id, e.target.value)}  >
        <option value="done">انجام شده</option>
        <option value="active">درحال انجام</option>
        <option value="pending">در حال انتظار</option>
      </select>
    
    </div>
  );
}

export default ChangeStatus;

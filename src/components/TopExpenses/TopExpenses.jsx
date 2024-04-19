import styles from "../Transactions/Transactions.module.css";
import TopExpensesBody from '../TopExpensesBody/TopExpensesBody';

const TopExpenses = () => {
  return (
    <div className={styles.Transactions}>
      <h2>Top Expenses</h2>
      <TopExpensesBody />
    </div>
  );
};

export default TopExpenses;

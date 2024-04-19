import styles from "./AppHead.module.css";
import PieChartComp from "../PieChart/PieChart";
import Card from "../Card/Card";

const AppHead = (props) => {
  const { balance, expenses } = props;
  return (
    <>
      <nav>Expense Tracker</nav>
      <header className={styles.AppHead}>
        <Card text="Wallet balance" value={balance} />
        <Card text="Expenses" value={expenses} />
        <PieChartComp />
      </header>
    </>
  );
};

export default AppHead;

import styles from "./AppBody.module.css";
import TopExpenses from '../TopExpenses/TopExpenses';
import Transactions from '../Transactions/Transactions';

const AppBody = () => {

    return (
        <div className={styles.AppBody}>
            <Transactions />
            <TopExpenses />
        </div>
    );
};

export default AppBody;
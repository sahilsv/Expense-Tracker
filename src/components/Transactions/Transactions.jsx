import styles from "./Transactions.module.css";
import TransactionBody from '../TransactionBody/TransactionBody';

const Transactions = () => {
    return (
        <div className={styles.Transactions}>
            <h2>Recent Transactions</h2>
            <TransactionBody />
        </div>
    );
};

export default Transactions;
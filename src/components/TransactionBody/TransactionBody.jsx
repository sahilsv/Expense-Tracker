import { useContext, useEffect, useState } from 'react';

import styles from "./TransactionBody.module.css"

import TransactionBar from '../TransactionBar/TransactionBar';
import PageNavigationBar from './PageNavigationBar';

import { TransactionsContext } from '../../contexts/Contexts';

const TransactionBody = () => {

    const [transactionData, setTransactionData] = useContext(TransactionsContext);
    
    const [pages, setPages] = useState({ currentPage: 1, totalPages: 1 })
    
    useEffect(()=> {
        onLoad();
    }, [transactionData])
    //functions
    const displayTransactions = () => {
        let key = 0;
        if(transactionData && transactionData.length){
            let arr =[];
            let startIndex = 5 * (pages.currentPage - 1)
            let endIndex = (5 * pages.currentPage) - 1

            for(let i = startIndex; i <= endIndex; i++){
                if(i >= transactionData.length) break;
                const { name, date, price, category, id } = transactionData[i];
                arr.push(
                    <TransactionBar key={`${key++}`} name={name} date={date} amount={price} category={category} id={id}/>
                )
            }

            return arr;
        }
    }
    const onLoad = () =>{
        setPages({ currentPage: 1, totalPages: Math.ceil(transactionData.length / 5) })
    }
    
    const updatePage = direction => {
        let {currentPage, totalPages} = pages;
        if(direction === "right" && currentPage < totalPages){
            setPages({...pages, currentPage: currentPage+1})
        }
        if(direction === "left" && currentPage > 1){
            setPages({...pages, currentPage: currentPage-1})
        }
    }
    return (
        <div className={styles.TransactionBody}>
            <div className={styles.transactionBodyUpper}>
                <div className={styles.transactionPage}>{displayTransactions()}</div>
            </div>
            <div className={styles.transactionBodylower}>
                <PageNavigationBar key={"pageNavigate"} pages={pages} updatePage={updatePage} />
            </div>
        </div>
    );
};

export default TransactionBody;
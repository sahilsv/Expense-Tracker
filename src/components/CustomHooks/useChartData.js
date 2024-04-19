import React, { useContext, useEffect, useState } from 'react';
import { TransactionsContext } from '../../contexts/Contexts';

const useChartData = (initialData) => {
    
    const [transactionData, setTransactionData] = useContext(TransactionsContext);
    
    const [chartData, setChartData] = useState(initialData);
    
    useEffect(()=> {
        setChartData([
            { name: 'Entertainment', value: 0 },
            { name: 'Food', value: 0 },
            { name: 'Travel', value: 0 },
        ]);
        calculateCategories();
    }, [transactionData])
    
    const calculateCategories = () => {
        let foodTotal = 0, entertainmentTotal = 0, travelTotal = 0;
        transactionData.forEach(item => {
            if(item.category === "food"){
                foodTotal += Number(item.price);
                setChartData(pre=>[pre[0], {name: "Food", value: foodTotal},pre[2]])
            }
            if(item.category === "entertainment"){
                entertainmentTotal += Number(item.price);
                setChartData(pre=>[{name: "Entertainment", value: entertainmentTotal}, pre[1], pre[2]])
            }
            if(item.category === "travel") {
                travelTotal += Number(item.price);
                setChartData(pre=>[pre[0], pre[1], {name: "Travel", value: travelTotal}])
            }
        });
    }

    return chartData;
}


export default useChartData;
import React from "react";
import styles from "../TransactionBody/TransactionBody.module.css";
import useChartData from "../CustomHooks/useChartData";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const TopExpensesBody = () => {
  const chartData = useChartData([
    { name: "food", value: 0 },
    { name: "entertainment", value: 0 },
    { name: "travel", value: 0 },
  ]);

  return (
    <div className={styles.TopExpensesBody} style={{ height: "100px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} layout="vertical" barSize={30}>
          <XAxis type="number" hide />
          <YAxis type="category" width={120} dataKey="name" />
          <Bar dataKey="value" fill="#8784D2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopExpensesBody;

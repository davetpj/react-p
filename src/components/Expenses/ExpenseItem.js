// state less component
// presentational component
// dumb component
// 어떤 상태(state)도 갖지 않고 단순히 데이터를 출력하기 위한 컴포넌트
// state full component 보다 대부분 이러한 state less component
import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate data={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;

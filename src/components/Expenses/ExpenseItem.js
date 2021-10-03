import './ExpenseItem.css';
// import (название не файла а именно функции либо объекта который мы собираемся подключить)\
//from (мы указываем адрес а если точнее превичное местоположение функции или объекта который мы собираемся подключить)
import ExpenseDate from './ExpenseDate';
import Card from '../../UI/Card';

import React, {useState} from 'react';


function ExpenseItem(props) {
    const expenseDate = props.date;
    // const expenseTitle = props.title;
    const expenseAmount = props.amount;
    const [title, setTitle] = useState(props.title);

    // let clickHandler = () => {
    //     setTitle("Upd Я нажал на кнопку");
    //     console.log(title);
    // } 

    return (
        <Card className='expense-item'>
            <ExpenseDate date = {expenseDate}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
            {/* <button onClick={clickHandler}>Change SomeThing</button> */}
        </Card>
    );
}

export default ExpenseItem;
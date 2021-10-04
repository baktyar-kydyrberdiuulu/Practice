import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');
    // const titleChangeHandler = (event) => {
    //     setEnteredTitle(event.target.value);
    // };
    const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: ""
    });

    const titleChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });
        /* 
        Теперь почему мы должны делать это так, а не так? Во многих случаях оба будут работать нормально, 
        но имейте в виду, 
        что я упомянул который Reacts планирует обновления состояния, 
        он не выполняет их мгновенно. И поэтому теоретически если вы запланировали много обновлений состояния одновременно, 
        вы могли зависеть от устаревшего или неправильный снимок состояния если вы воспользуетесь этим подходом.


        
        Если вы воспользуетесь этим подходом,
        React гарантирует что моментальный снимок состояния он дает вам здесь в этой внутренней функции,
        всегда будет последний снимок состояния, 
        имея в виду все запланированные обновления состояния.
        */

        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle: event.target.value,
            }
        })
    };

    const amountChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value
        });
    }

    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredDate: event.target.value
        });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            ...userInput,
            enteredDate: new Date(userInput.enteredDate),
        }
        props.onSaveExpenseData(expenseData);
        setUserInput(
            (prevState) => {
                return {
                    enteredTitle: '',
                    enteredAmount: '',
                    enteredDate: ''
                }
            }
        )
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input
                    type="text"
                    value={userInput.enteredTitle}
                    onChange={titleChangeHandler}
                />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={userInput.enteredAmount}
                    onChange={amountChangeHandler}
                />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input
                    type="date"
                    min="2021-01-01"
                    max="2022-12-31"
                    value={userInput.enteredDate}
                    onChange={dateChangeHandler}
                />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit" >Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;
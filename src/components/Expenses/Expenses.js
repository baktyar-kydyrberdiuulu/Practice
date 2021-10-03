import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../../UI/Card'

function Expenses(props) {
    return (
        <Card className="expenses">
            <ExpenseItem
                title={props.expenses[0].title}
                amount={props.expenses[0].amount}
                date={props.expenses[0].date}
            />
            <ExpenseItem
                title={props.expenses[1].title}
                amount={props.expenses[1].amount}
                date={props.expenses[1].date}
            />
        </Card>

    )
}

// default - говорит вам о том что передаваемую функцию можно будет вызывать под любым именем
export default Expenses
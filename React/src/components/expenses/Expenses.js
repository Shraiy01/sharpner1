
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

function Expenses(props)
{
   
      
  return (
    <Card className="expenses">
         {
           props.items.map((expense)=>
            <ExpenseItem 
              title={expense.title}
              amount={expense.amount}
             date={expense.date}
             location={expense.location}
            />
          )}
        
    </Card>
  );
}

export default Expenses

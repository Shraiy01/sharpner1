import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetails';
// import Card from '../UI/Card';

function ExpenseItem(props)
{
  

   const clickHandler=()=>{
      const card=document.getElementById('card')
      card.remove();
   }
   

   return(
    <div className="expense-item" id="card">
     <ExpenseDate date={props.date}/>
     <ExpenseDetail title={props.title} amount={props.amount} location={props.location} /> 
     <button onClick={clickHandler}>Delete</button>
    </div>
    
   )
}

export default ExpenseItem
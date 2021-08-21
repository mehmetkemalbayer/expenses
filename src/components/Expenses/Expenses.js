import ExpenseFilter from "../ExpensesFilter/ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesChart from "../ExpensesChart/ExpensesChart";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangedHandler = (filterValue) => {
    setFilteredYear(filterValue);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedValue={filteredYear}
        onFilterChanged={filterChangedHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}
export default Expenses;

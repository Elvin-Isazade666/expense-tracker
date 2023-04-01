import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpenseChart from './ExpenseChart';
import ExpensesFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList';


const Expenses = ({ expenses }) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    const filterExpenses = expenses.filter(expense => (
        expense.date.getFullYear().toString() === filteredYear
    ));
    
    return (
        <Card className="expenses">
            <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />
            <ExpenseChart expenses = {filterExpenses} />
            <ExpensesList items = {filterExpenses} />
        </Card>
    )
}

export default Expenses
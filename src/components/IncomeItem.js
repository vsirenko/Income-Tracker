import React from 'react'

function IncomeItem({ income, index, removeIncome}) {

    let date = new Date(income.date)
    let day = date.getDate();
    let mounth = date.getMonth() + 1;
    let year = date.getFullYear();

    const removeHandle = (i) => {
        removeIncome(i)
    }

    return (
        <div className='income-item'>
            <button className='remove-item' onClick={() => removeIncome(index)}>x</button>
            <div className='desc'> {income.desc} </div>
            <div className='price'>{income.price}</div>
            <div className='date'>{day + '/' + mounth + '/' + year}</div>
        </div>
    )
}

export default IncomeItem

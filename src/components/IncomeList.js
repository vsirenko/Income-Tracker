import React from 'react'
import IncomeItem from './IncomeItem'

function IncomeList( {income, setIncome} ) {

    const removeIncome = (i) => {
        let temp = income.filter((v, index) => index != i)
        setIncome(temp)
    }

    const sortByDate = (a, b) => {
        return a.date - b.date
    }

    return (
        <div className='income-list'>
            {income.sort(sortByDate).map((val, index) => {
                return(
                    <> 
                    <IncomeItem key={index} income={val} index={index}
                        removeIncome={removeIncome}
                    />
                    </>
                )
            })}
        </div>
    )
}

export default IncomeList

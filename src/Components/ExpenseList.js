import React from 'react'
import Card from './Card';

const ExpenseList = () => {

    const list=[
        {
        title:"made a purchase",
        logo:"jk",
        createdAt:Date.now(),
        amount:1323,
    }]

    return (
        <div>
            {list.length ? 
                list.map((item)=>
                <Card item={item}/>
                ):null}
        </div>
    )
}

export default ExpenseList;

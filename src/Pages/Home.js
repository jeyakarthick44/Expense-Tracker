import React from "react";
import ExpenseList from "../Components/ExpenseList";
import TopFold from '../Pages/TopFold';

const Home = () => {
    return (
        <div className="home">
            <div>
                <TopFold />
                <ExpenseList />
            </div>
        </div>
    )
}

export default Home;

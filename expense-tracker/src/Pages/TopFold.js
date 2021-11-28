import React,{useState} from 'react'

const TopFold = () => {
    const [query,setQuery] = useState("")

const HandleQuery=(e)=>{
    setQuery(e.target.value)
}

    return (
        <div className="topfold">
            <div className="home-topfold">
                <div className="searchbar">
                    <input placeholder="search for expenses" 
                    onChange={HandleQuery} ></input>
                </div>
                <div>
                    <button className="addbutton">ADD</button>
                </div>
            </div>
        </div>
    )
}

export default TopFold;

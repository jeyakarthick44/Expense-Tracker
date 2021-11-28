import React,{useState} from 'react'

const TopFold = () => {
    const [query,setQuery] = useState("")

const HandleQuery=(e)=>{
    setQuery(e.target.value)
}

    return (
        <div className="topfold">
            {window.location.pathname !=='/'?
            <div className="home-topfold">
            <div className="searchbar">
                <input value={query} placeholder="Search for expenses" 
                onChange={HandleQuery} ></input>
            </div>
            <div>
                <button className="addbutton">Add</button>
            </div>
        </div>:<div className="add-topfold">
            <div className="add-topfold-button">
                <img className="image1" src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/arrow-left-circle-blue-512.png"/>
                <img className="image2" src="https://cdn.pixabay.com/photo/2016/01/20/18/35/x-1152114_1280.png"/>
            </div>
            </div>}
            
        </div>
    )
}

export default TopFold;

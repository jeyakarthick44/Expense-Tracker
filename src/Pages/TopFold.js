import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const TopFold = () => {
    const [query,setQuery] = useState("")

const HandleQuery=(e)=>{
    setQuery(e.target.value)
}


return (
        <div className="topfold">
            {window.location.pathname === "/" ? (
            <div className="home-topfold">
                <div className="searchbar">
                    <input value={query} placeholder="Search for expenses" 
                    onChange={HandleQuery} ></input>
                </div>
                <Link to="/add-expense">
                <div>
                    <button className="addbutton">Add</button>
                </div>
                </Link>
            </div> ) : ( 
            <div className="add-topfold">
              <Link to="/">
                <div className="add-topfold-button">
                <div>
                  <img className="image1" src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/arrow-left-circle-blue-512.png" alt="img1"/> 
                </div>
                <div>
                  <img className="image2" src="https://cdn.pixabay.com/photo/2016/01/20/18/35/x-1152114_1280.png" alt="img1"/> 
                </div>
                </div>
                </Link>
            </div> 
            )}
        </div>
)
}
export default TopFold;

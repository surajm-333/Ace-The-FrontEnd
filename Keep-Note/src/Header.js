import React from 'react';
import AddTaskIcon from '@mui/icons-material/AddTask';
import "./style.css";

const Header = () =>{
    return (
    <>
        <div className='header'>
           <AddTaskIcon className="headicon" style={{fontSize:'50'}}/>
            <span className='headerspan'><strong> Keep Note</strong></span>
        </div>
    </>
    );

};

export default Header;
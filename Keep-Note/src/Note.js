import React from 'react';
import { IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import "./style.css";

const Note = (props) =>{

    const deleteNote = () => {
        props.deleteItem(props.id);
    }

    return <>
        <div className='sub_note'>
            <h5>{props.title}</h5>
            <p>{props.content}</p>

            <div className='sub_icon'>
                <IconButton onClick={deleteNote} style={{outline:"none"}}>
                    <DeleteForeverIcon className='delete_icon'/>
                </IconButton>
            </div> 

        </div>

        
        
        
    </>

};

export default Note;
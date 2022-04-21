import React, {useState} from 'react';
import "./style.css";
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) =>{
    const [expand, setExpand] = useState(false);
    
    const[note, setNote] = useState({
        title:"",
        content:"",
    })

    const InputEvent = (event) => {

        const {name, value} = event.target;

        setNote((prevData) => {
            return{
                ...prevData,
                [name]:value,
            };
        });
        console.log(note);
    };

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title:"",
            content:"",
        })
    };

    const expandIt = () => {
        setExpand(true);
    }

    const closeIt = () => {
        setExpand(false);
    }
    return <>
        
        <div className='main_note container-fluid'>
            <form>
                {expand?
                    <input 
                    type="text" 
                    name="title" 
                    value={note.title} 
                    onChange={InputEvent} 
                    placeholder="Title"/>
                :null}

                
                <textarea 
                rows="" 
                column="" 
                name="content" 
                value={note.content} 
                onChange={InputEvent} 
                placeholder="Write a note..."
                onClick={expandIt}
                onDoubleClick={closeIt}
                />

                {expand?
                <div className='main_icon'>
                    <IconButton onClick={addEvent} style={{outline:"none"}}>
                        <AddIcon className='plus_sign'/>
                    </IconButton>
                </div>: null}
            </form>
            

        </div>
        
        
    </>

};

export default CreateNote;
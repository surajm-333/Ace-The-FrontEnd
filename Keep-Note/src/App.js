import React, {useState} from 'react';
import Header from './Header.js'
import Footer from './Footer.js'
import CreateNote from './CreateNote.js'
import Note from './Note.js'


const App = () =>{
    const [addItem, setaddItem] = useState([]);
    const addNote = (note) =>{
        setaddItem((prevData)=>{
            return [...prevData, note]
        })    
        console.log(note);
    }

    const onDelete = (id) => {
        setaddItem((oldData) => 
        oldData.filter((currData, indx) =>{
            return indx !== id;
        })
        )
    }

    return <>
        <Header/>
        <CreateNote passNote={addNote}/>
        {addItem.map((val,index)=>{
            return <Note
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                deleteItem={onDelete}
            />
        })}
        <Footer/>
    </>
};

export default App;
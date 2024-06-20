import React, { useState } from 'react'
import "./ThreadsMake.css"
import { Link } from 'react-router-dom';
const ThreadsMake = ({addThreads}) => {

    const[inputValue,setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('https://railway.bulletinboard.techtrain.dev/threads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: inputValue }),
            });
            const newThread = await response.json();
            addThreads(newThread.title);
            
        } catch (error) {
            console.error('Error adding thread:', error);
        }
    }

  return (
    <>
   
    <div className='title'>スレッド新規作成</div>
    <form onSubmit={handleSubmit}>
        <input  className="inputfield" 
                type='text' placeholder='スレッドタイトル' 
                value={inputValue}
                onChange={handleInputChange}>
                </input>
                <Link to="/">Topに戻る</Link>
                <button className="button"type="submit">追加</button>
    </form>
    
    </>
  )
}

export default ThreadsMake

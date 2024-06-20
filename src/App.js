import Header from "./Header.jsx";
import "./App.css"
import { BrowserRouter,Route,Routes } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import ThreadList from "./components/ThreadList";
import ThreadsMake from "./components/ThreadsMake.jsx";
import PostList from "./components/PostList.jsx";

function App() {
  const [threads, setThreads] = useState([]);

  const addThreads = (title) => {
    setThreads([...threads,{id:threads.length+1,title}])
  }

    useEffect(() => {
        const fetchThreads = async () => {
            try {
                const response = await fetch("https://railway.bulletinboard.techtrain.dev/threads");
                const data = await response.json();
                setThreads(data);

            } catch (error) {
                console.error('error', error);
            }
        }
        fetchThreads();
    }, []);

  return (
    <>
    <BrowserRouter>
    <div className="App">
    <Header />
      <Routes>
        <Route path="/" element={<ThreadList threads={threads}/>} />
        <Route path="/threads" element={<ThreadsMake addThreads={addThreads}/>} />
        <Route path="/threads/:threadId" element={<PostList />} />
      </Routes>
    </div>
    </BrowserRouter>
      
      
    </>
  );
}

export default App;

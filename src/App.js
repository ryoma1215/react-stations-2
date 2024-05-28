import Header from "./Header.jsx";
import "./App.css"
import { BrowserRouter,Link,Route,Routes } from "react-router-dom";

import ThreadList from "./components/ThreadList";
import ThreadsMake from "./components/ThreadsMake.jsx";

function App() {
  return (
    <>
    <BrowserRouter>
    <div className="App">
    <Header />
      <Link to="/">掲示板</Link>
      <Routes>
        <Route path="/" element={<ThreadList />} />
        <Route path="/threads" element={<ThreadsMake />} />
      </Routes>
    </div>
    </BrowserRouter>
      
      
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Main from "./components/Pages/Main";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Main />} />
                {/* <Route path='/alcoholc' element={}/>
                <Route path='/non-alcoholc' element={}/> */}
            </Routes>
        </div>
    );
}

export default App;

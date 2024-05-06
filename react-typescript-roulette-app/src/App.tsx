import {Routes, Route} from "react-router-dom";
import Punish_Home from "./mode/punish/Punish_Home"
import Punish_Add from "./mode/punish/add/Punish_Add"
import Punish_Roulette from "./mode/punish/roulette/Punish_Roulette"


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Punish_Home/>} />
            <Route path="/punish/add" element={<Punish_Add/>} />
            <Route path="/punish/roulette" element={<Punish_Roulette/>} />
        </Routes>
    )
}

export default App
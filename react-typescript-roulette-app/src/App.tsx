import {Routes, Route} from "react-router-dom"
import Home_Screen from "./mode/Home_Screen"
import Punish_Screen from "./mode/punish/Punish_Screen"

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home_Screen/>} />
            <Route path="/punish" element={<Punish_Screen/>} />
        </Routes>
    )
}

export default App
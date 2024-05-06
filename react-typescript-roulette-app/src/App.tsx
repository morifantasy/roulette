import {Routes, Route} from "react-router-dom"
import Home from "./mode/Home"
import Punish_Home from "./mode/punish/Punish_Home"

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/punish" element={<Punish_Home/>} />
        </Routes>
    )
}

export default App
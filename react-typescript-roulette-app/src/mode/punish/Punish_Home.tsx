import { useNavigate } from "react-router-dom"

const Punish_Home = () => {
    const navigate = useNavigate()
    const ToHome = () => {
        navigate('/')
    }

    return (
        <>
            <button onClick={ToHome}>戻る</button>
            <h1>罰ゲーム</h1>
        </>
    )
}

export default Punish_Home
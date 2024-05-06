import { useNavigate } from "react-router-dom"

const Punish_Roulette = () => {
    const navigate = useNavigate()
    const ToHome = () => {
        navigate('/')
    }
    return(
        <>
            <h1>ルーレット画面</h1>
            <br/>
            <button onClick={ToHome}>戻る</button>
        </>
    )
}

export default Punish_Roulette
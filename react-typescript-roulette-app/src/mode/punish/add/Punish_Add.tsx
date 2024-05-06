import { useNavigate } from "react-router-dom"

const Punish_Add = () => {
    const navigate = useNavigate()
    const ToHome = () => {
        navigate('/')
    }
    return(
        <>
            <h1>追加する罰ゲームを入力してください</h1>
            <br/>
            <button onClick={ToHome}>戻る</button>
        </>
    )
}

export default Punish_Add
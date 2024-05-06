import { useNavigate } from "react-router-dom"

const Punish_Home = () => {
    const navigate = useNavigate()
    const ToAdd = () => {
        navigate('/punish/add')
    }
    const ToRoulette = () => {
        navigate('/punish/roulette')
    }

    return (
        <>
            <button onClick={ToAdd}>罰を追加する</button>
            <br/>
            <button onClick={ToRoulette}>ルーレットを回す</button>
        </>
    )
}

export default Punish_Home
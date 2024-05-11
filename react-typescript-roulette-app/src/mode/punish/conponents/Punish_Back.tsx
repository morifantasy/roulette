import { useNavigate } from "react-router-dom"

const Punish_Back = () => {
    const navigate = useNavigate()
    const ToHome = () => {
        navigate('/')
    }

    return(
        <>
            <button onClick={ToHome} type="button">戻る</button>
        </>

    )
}

export default Punish_Back
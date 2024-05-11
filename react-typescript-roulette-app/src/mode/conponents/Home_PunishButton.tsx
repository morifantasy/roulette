import { useNavigate } from "react-router-dom"

const Home_PunishButton = () => {
    const navigate = useNavigate()
    const ToPunish = () => {
        navigate('/punish')
    }

    return(
        <button onClick={ToPunish} type="button">罰ゲームルーレット</button>
    )
}

export default Home_PunishButton
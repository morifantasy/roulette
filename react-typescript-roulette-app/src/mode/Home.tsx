import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()
    const ToPunish = () => {
        navigate('/punish')
    }

    return (
        <>
            <h1>ルーレット</h1>
            <button onClick={ToPunish}>罰ゲームルーレット</button>
        </>
    )
}

export default Home
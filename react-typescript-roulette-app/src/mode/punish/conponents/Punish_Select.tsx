const Punish_Select = () => {
    const ToUp = () => {
        alert("▲ボタンが押されました")
    }

    const ToDown = () => {
        alert("▼ボタンが押されました")
    }

    return(
        <form>
            <button onClick={ToUp} type="button">
                ▲
            </button>
            <button onClick={ToDown} type="button">
                ▼
            </button>
        </form>
    )
}

export default Punish_Select
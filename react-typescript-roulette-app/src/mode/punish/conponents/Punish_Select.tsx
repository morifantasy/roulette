type Punish_Select_Props = {
    UpPunishTable: () => void
    DownPunishTable: () => void
}

const Punish_Select = (props: Punish_Select_Props) => {
    return(
        <form>
            <button onClick={props.UpPunishTable} type="button">
                ▲
            </button>
            <button onClick={props.DownPunishTable} type="button">
                ▼
            </button>
        </form>
    )
}

export default Punish_Select
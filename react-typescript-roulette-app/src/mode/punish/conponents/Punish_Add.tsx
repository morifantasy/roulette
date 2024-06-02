type Punish_Roulette_Props = {
    new_punish_data: string
    Set_New_Punish_Data: React.Dispatch<React.SetStateAction<string>>
    AddPunishData: (e: React.FormEvent<HTMLFormElement>) => void
}

const Punish_Add = (props: Punish_Roulette_Props) => {
    return(
        <form onSubmit={props.AddPunishData}>
            <input type="text"
                name="new_punish"
                placeholder="罰ゲームを追加"
                onChange={e => props.Set_New_Punish_Data(e.target.value)}
                value={props.new_punish_data}
            />

            <button type="submit">
                追加
            </button>
        </form>
    )
}

export default Punish_Add
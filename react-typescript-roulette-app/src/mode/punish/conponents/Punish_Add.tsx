type Punish_Add_props = {
    setPunish: (punish_name: string) => void
    AddPunishdData: (e: any) => void
}

const Punish_Add = (props: Punish_Add_props) => {

    return(
        <form>
            <input type="text"
                name="new_punish"
                placeholder="罰ゲームを追加"
                onChange={e => props.setPunish(e.target.value)}
            />

            <button type="submit" onClick={props.AddPunishdData}>
                追加
            </button>
        </form>
    )

}

export default Punish_Add
import { Roulette_State } from "../Punish_Screen"

type Punish_Result_Props = {
    punish_result: string
    roulette_state: Roulette_State
}


const Punish_Result = (props: Punish_Result_Props) => {
    return(
        <form>
            <input type="text"
                name="punish_result"
                placeholder="ここに結果を表示"
                value={props.roulette_state == "none_roulette" ?
                    "ここに結果を表示" :
                    props.punish_result}
                readOnly
            />
        </form>
    )
}

export default Punish_Result
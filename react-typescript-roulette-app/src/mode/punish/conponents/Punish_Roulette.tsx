import { Roulette_State } from "../Punish_Screen"

type Punish_Roulette_Props = {
    SetRouletteState: () => void
    roulette_state: Roulette_State
}

const Punish_Roulette = (props: Punish_Roulette_Props) => {
    return(
        <>
            <button onClick={props.SetRouletteState} type="button">
                {props.roulette_state == "start_roulette" ?
                    "止める" :
                    "回す"
                }
            </button>
        </>
    )
}

export default Punish_Roulette
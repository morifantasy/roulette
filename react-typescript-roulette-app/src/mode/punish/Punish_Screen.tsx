import Punish_Back from "./conponents/Punish_Back"
import Punish_Title from "./conponents/Punish_Title"
import Punish_Result from "./conponents/Punish_Result"
import Punish_Roulette from "./conponents/Punish_Roulette"
import Punish_Select from "./conponents/Punish_Select"
import Punish_Table from "./conponents/Punish_Table"
import Punish_Add from "./conponents/Punish_Add"

import { useState } from "react"

const Punish_Screen = () => {
    const [roulette_flg, Roulette_Flg_State] = useState<boolean>(false)

    const SetRouletteFlg = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        {roulette_flg ?
            Roulette_Flg_State(false) :
            Roulette_Flg_State(true)
        }
    }

    return (
        <>
            <Punish_Back/>
            <Punish_Title/>
            <Punish_Result/>
            <Punish_Roulette SetRouletteFlg={SetRouletteFlg}
                roulette_flg={roulette_flg}
            />
            <Punish_Select/>
            <Punish_Table punish_table_element={["1日5000kcal生活", "1日つま先立ち生活", "3日連続これ好き生活", "鑑賞した映画の感想文作成"]}/>
            <Punish_Add/>
        </>
    )
}

export default Punish_Screen
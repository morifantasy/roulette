import Punish_Back from "./conponents/Punish_Back"
import Punish_Title from "./conponents/Punish_Title"
import Punish_Result from "./conponents/Punish_Result"
import Punish_Roulette from "./conponents/Punish_Roulette"
import Punish_Select from "./conponents/Punish_Select"
import Punish_Table from "./conponents/Punish_Table"
import Punish_Add from "./conponents/Punish_Add"

import { useState, useEffect, useCallback } from "react"

const Punish_Screen = () => {
    const [punish_list, Set_Punish_List] = useState<string[]>(["1日5000kcal生活", "1日つま先立ち生活", "3日連続これ好き生活", "鑑賞した映画の感想文作成"])

    const [result_index, Set_Result_Index] = useState<number>(0) 

    const [roulette_state, Set_Roulette_State] = useState<Roulette_State>("none_roulette")

    const ChangeRouletteState = useCallback(() => {
        switch (roulette_state) {
            case "none_roulette":
                Set_Roulette_State("start_roulette")
                break
            case "start_roulette":
                Set_Roulette_State("stop_roulette")
                break
            case "stop_roulette":
                Set_Roulette_State("none_roulette")
                break
        }
    }, [roulette_state])
    
    useEffect(() => {
        if (roulette_state == "start_roulette") {
            const interval = setInterval(() => {
                Set_Result_Index(
                    (oldIndex) => {
                        if (oldIndex < punish_list.length - 1) return oldIndex + 1;
                        return 0;
                    }
                )
            }, 50)
            return () => clearInterval(interval)
        }
        else if (roulette_state == "stop_roulette") {
            {confirm("結果は「" + punish_list[result_index] + "」でした。\n" + "この罰を一覧から削除しますか？") &&
                alert("削除しました！")
            }
            ChangeRouletteState()
        }
        else if (roulette_state == "none_roulette") {
        }
    }, [roulette_state])

    return (
        <>
            <Punish_Back/>
            <Punish_Title/>
            <Punish_Result punish_result={punish_list[result_index]}
                roulette_state={roulette_state}
            />
            <Punish_Roulette ChangeRouletteState={ChangeRouletteState}
                roulette_state={roulette_state}
            />
            <Punish_Select/>
            <Punish_Table punish_table_element={[punish_list[0], punish_list[1], punish_list[2], punish_list[3]]}/>
            <Punish_Add/>
        </>
    )
}

export default Punish_Screen
export type Roulette_State = "none_roulette" | "start_roulette" | "stop_roulette"
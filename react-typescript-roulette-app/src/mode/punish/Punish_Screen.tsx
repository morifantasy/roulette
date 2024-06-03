import Punish_Back from "./conponents/Punish_Back"
import Punish_Title from "./conponents/Punish_Title"
import Punish_Result from "./conponents/Punish_Result"
import Punish_Roulette from "./conponents/Punish_Roulette"
import Punish_Select from "./conponents/Punish_Select"
import Punish_Table from "./conponents/Punish_Table"
import Punish_Add from "./conponents/Punish_Add"
import db from "../../firebase"

import { useState, useEffect, useCallback } from "react"
import { arrayRemove, arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore"

const Punish_Screen = () => {
    const docRef = doc(db, "roulette_parameter", "punish_list")

    const [punish_list, Set_Punish_List] = useState<string[]>([])

    const [new_punish_data, Set_New_Punish_Data] = useState<string>("")

    const [delete_punish_data, Set_Delete_Punish_Data] = useState<string>("")

    const [table_index, Set_Table_Index] = useState<number>(0)

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

    const AddPunishData = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        Set_Punish_List([...punish_list, new_punish_data])
        updateDoc(docRef, {punish_list: arrayUnion(new_punish_data)})
        Set_New_Punish_Data("")
    }

    const UpPunishTable = () => {
        if (table_index > 0) {
            Set_Table_Index(table_index - 1)
        }
        else {
            Set_Table_Index(0)
        }
    }

    const DownPunishTable = () => {
        if (punish_list.length < 4) {
            Set_Table_Index(0)
        }
        else if (table_index < punish_list.length - 4) {
            Set_Table_Index(table_index + 1)
        }
        else {
            Set_Table_Index(punish_list.length - 4)
        }
    }

    useEffect(() => {
        getDoc(docRef).then((snapshot) => {
            Set_Punish_List(snapshot.data().punish_list)
            console.log(punish_list)
        })
    }, [])

    useEffect(() => {
        Set_Punish_List(
            punish_list.filter((punish_list, index) => (punish_list != delete_punish_data))
        )
        updateDoc(docRef, {punish_list: arrayRemove(delete_punish_data)})
    }, [delete_punish_data])

    useEffect(() => {
        if (table_index >= punish_list.length - 4 && punish_list.length > 4) {
            Set_Table_Index(punish_list.length - 4)
        }
    }, [punish_list])
    
    useEffect(() => {
        if (roulette_state == "start_roulette") {
            const interval = setInterval(() => {
                Set_Result_Index(
                    (oldIndex) => {
                        if (oldIndex < punish_list.length - 1) return oldIndex + 1;
                        return 0;
                    }
                )
            }, 70)
            return () => clearInterval(interval)
        }
        else if (roulette_state == "stop_roulette") {
            if (confirm("結果は「" + punish_list[result_index] + "」でした。\n" + "この罰を一覧から削除しますか？")) {
                Set_Delete_Punish_Data(punish_list[result_index])
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
            <Punish_Select UpPunishTable={UpPunishTable}
                DownPunishTable={DownPunishTable}
            />
            <Punish_Table punish_table_list={punish_list.slice(table_index, table_index + Math.min(punish_list.length, 4))}
                Set_Delete_Punish_Data={Set_Delete_Punish_Data}/>
            <Punish_Add new_punish_data={new_punish_data}
                Set_New_Punish_Data={Set_New_Punish_Data}
                AddPunishData={AddPunishData}
            />
        </>
    )
}

export default Punish_Screen
export type Roulette_State = "none_roulette" | "start_roulette" | "stop_roulette"
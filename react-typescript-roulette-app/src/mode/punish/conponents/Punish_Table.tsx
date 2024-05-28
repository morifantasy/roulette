import Punish_Delete from "./Punish_Delete"

type Punish_Table_Props = {
    punish_table_list: string[]
    Set_Delete_Punish_Data: React.Dispatch<React.SetStateAction<string>>
}

const Punish_Table = (prop: Punish_Table_Props) => {
    return(
        <table>
            <tr>
                <th>罰ゲーム</th>
            </tr>
            {prop.punish_table_list.length > 0 &&
                <tr>
                    <td>{prop.punish_table_list[0]}</td>
                    <td><Punish_Delete 
                            punish_delete_element={prop.punish_table_list[0]}
                            Set_Delete_Punish_Data={prop.Set_Delete_Punish_Data}
                        />
                    </td>
                </tr>
            }
            {prop.punish_table_list.length > 1 &&
                <tr>
                    <td>{prop.punish_table_list[1]}</td>
                    <td><Punish_Delete 
                            punish_delete_element={prop.punish_table_list[1]}
                            Set_Delete_Punish_Data={prop.Set_Delete_Punish_Data}
                        />
                    </td>
                </tr>
            }
            {prop.punish_table_list.length > 2 &&
                <tr>
                    <td>{prop.punish_table_list[2]}</td>
                    <td><Punish_Delete 
                            punish_delete_element={prop.punish_table_list[2]}
                            Set_Delete_Punish_Data={prop.Set_Delete_Punish_Data}
                        />
                    </td>
                </tr>
            }
            {prop.punish_table_list.length > 3 &&
                <tr>
                    <td>{prop.punish_table_list[3]}</td>
                    <td><Punish_Delete 
                            punish_delete_element={prop.punish_table_list[3]}
                            Set_Delete_Punish_Data={prop.Set_Delete_Punish_Data}
                        />
                    </td>
                </tr>
            }
        </table>

    )
}

export default Punish_Table
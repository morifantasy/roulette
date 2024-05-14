import Punish_Delete from "./Punish_Delete"

type Punish_Table_Props = {
    punish_table_element: string[]
}

const Punish_Table = (prop: Punish_Table_Props) => {
    return(
        <table>
            <tr>
                <th>罰ゲーム</th>
            </tr>
            {prop.punish_table_element[0] != "" &&
                <tr>
                    <td>{prop.punish_table_element[0]}</td>
                    <td><Punish_Delete punish_delete_element={prop.punish_table_element[0]}/></td>
                </tr>
            }
            {prop.punish_table_element[1] != "" &&
                <tr>
                    <td>{prop.punish_table_element[1]}</td>
                    <td><Punish_Delete punish_delete_element={prop.punish_table_element[1]}/></td>
                </tr>
            }
            {prop.punish_table_element[2] != "" &&
                <tr>
                    <td>{prop.punish_table_element[2]}</td>
                    <td><Punish_Delete punish_delete_element={prop.punish_table_element[2]}/></td>
                </tr>
            }
            {prop.punish_table_element[3] != "" &&
                <tr>
                    <td>{prop.punish_table_element[3]}</td>
                    <td><Punish_Delete punish_delete_element={prop.punish_table_element[3]}/></td>
                </tr>
            }
        </table>

    )
}

export default Punish_Table
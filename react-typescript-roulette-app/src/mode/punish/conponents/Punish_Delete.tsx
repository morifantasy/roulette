type Punish_Delete_Prop = {
    punish_delete_element: string
    Set_Delete_Punish_Data: React.Dispatch<React.SetStateAction<string>>
}

const Punish_Delete = (prop: Punish_Delete_Prop) => {
    const CheckDelete = () => {
        if (confirm("「" + prop.punish_delete_element + "」を削除しますか？")) {
            prop.Set_Delete_Punish_Data(prop.punish_delete_element)
            alert("削除しました！")
        }
    }

    return(
        <>
            <button onClick={CheckDelete} type="button">
                削除
            </button>
        </>
    )
}

export default Punish_Delete
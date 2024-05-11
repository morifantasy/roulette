type Punish_Delete_Prop = {
    punish_delete_element: string
}

const Punish_Delete = (prop: Punish_Delete_Prop) => {
    const CheckDelete = () => {
        {confirm("「" + prop.punish_delete_element + "」を削除しますか？") &&
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
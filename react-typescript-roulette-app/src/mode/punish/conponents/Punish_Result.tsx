type Punish_Result_Props = {
    punish_result: string
}


const Punish_Result = (props: Punish_Result_Props) => {
    return(
        <form>
            <input type="text"
                name="punish_result"
                value={props.punish_result}
                readOnly
            />
        </form>
    )
}

export default Punish_Result
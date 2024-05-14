type Punish_Roulette_Props = {
    SpinRoulette(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void>
    roulette_flg: boolean
}

const Punish_Roulette = (props: Punish_Roulette_Props) => {
    return(
        <>
            <button onClick={props.SpinRoulette} type="button">
                {props.roulette_flg ?
                    "止める" :
                    "回す"
                }
            </button>
        </>
    )
}

export default Punish_Roulette
type Punish_Roulette_Props = {
    SetRouletteFlg: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    roulette_flg: boolean
}

const Punish_Roulette = (props: Punish_Roulette_Props) => {
    return(
        <>
            <button onClick={props.SetRouletteFlg} type="button">
                {props.roulette_flg ?
                    "止める" :
                    "回す"
                }
            </button>
        </>
    )
}

export default Punish_Roulette
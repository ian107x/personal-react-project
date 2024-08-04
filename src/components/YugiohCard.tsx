interface yugiohProp{
    name: string,
    id: number,
    attribute: "fire" | "water" | "earth" | "wind" | "light" | "dark" | "divine"
    atk: number | undefined,
    def: number | undefined,
    level: number,
    type: string,
    summon_type: string,
    effect: boolean,
    tuner: boolean,
    description_text: string

}

export default function YugiohCard({name, id, attribute, atk, def, level, type, summon_type, effect, description_text}: yugiohProp){
    return (
        <div>
            <h3>
                {name}
            </h3>
            <p>{id}</p>
            <p>{attribute}</p>
            <p>{level}</p>
            <p>{type}/{summon_type + "/" + effect ? "effect" : ""}</p>


        </div>
    )
}
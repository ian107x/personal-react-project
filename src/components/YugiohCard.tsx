export interface yugiohProp{
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

export default function YugiohCard(card: yugiohProp){
    return (
        <div>
            <h3>
                {card.name}
            </h3>
            <p>{card.id}</p>
            <p>{card.attribute}</p>
            <p>{card.level}</p>
            <p>{card.type}/{card.summon_type + "/" + card.effect ? "effect" : ""}</p>
            <p>ATK: {card.atk}/ DEF: {card.def}</p>
            <p>{card.description_text}</p>


        </div>
    )
}
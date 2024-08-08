import YugiohCard, { yugiohProp } from "../components/YugiohCard"

export default function YugiohCardPage(){

    const dummyCards: yugiohProp[] = [{
        name: "Trident dragion",
        id: 0,
        attribute: "fire",
        atk: 3000,
        def: 2800,
        level: 10,
        type: "dragon",
        summon_type: "synchro",
        effect: true,
        tuner: false,
        description_text: "this is the effect"
    }]
    return(
        <div>
            {dummyCards.map((card, id) =>(
                <div className="yugiohCard">
                    <YugiohCard key={id} name={card.name} id={card.id} attribute={card.attribute} atk={card.atk} def={card.def} level={card.level} type={card.type} summon_type={card.summon_type} effect={card.effect} tuner={card.tuner} description_text={card.description_text}  />
                </div>
            ))}
        </div>

    )
}
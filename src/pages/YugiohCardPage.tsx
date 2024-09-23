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
                <div key={id} className="yugiohCard">
                    <YugiohCard {...card}  />
                </div>
            ))}
        </div>

    )
}
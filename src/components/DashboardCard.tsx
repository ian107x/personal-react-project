import { Link } from "react-router-dom";
import { DashProp, dataEntry } from "../helpers/types";


export default function DashBoardCard(cardProps: DashProp){

    const shortlist: dataEntry[] = cardProps.list.slice(1, 5);
    return(
        <div>
        <div className="dashheader">
            <h3>
                {cardProps.title}
            </h3>
            <h4>
                {cardProps.description}
            </h4>

        </div>
        <hr></hr>

        {
            <ul>
                {shortlist.map((data: dataEntry, id) => 
                    <li>
                        <p>
                            {(data.desc).substring(0, 32)}...
                        </p>
                        {data.date}
                    </li>
                )}
            </ul>
        }
        <hr></hr>

        {
            cardProps.cardType === "standard" ? 
            <Link to={"/"} onClick={()=>{}}>View More...</Link> :
            <button>
                view report
            </button>
        }

        </div>

    )

}
import React, {FC} from "react";
import {getCompanies} from "../../axios/axios";
import './suggestionsItems.scss'
import ItemList from "../ItemList/ItemList";

type suggestionsProps = {
    arrayCompany: getCompanies[],
    setStateDetailItem: React.Dispatch<React.SetStateAction<getCompanies | undefined>>
}

const SuggestionsItems: FC<suggestionsProps> = ({arrayCompany, setStateDetailItem}) => {
    return (
        <ul>
            {
                arrayCompany.slice(0, 5).map((item: getCompanies) =>
                    <ItemList key={item.inn}
                              dataCompany={item}
                              setStateDetailItem={setStateDetailItem}/>)
            }
        </ul>
    )
}

export default SuggestionsItems
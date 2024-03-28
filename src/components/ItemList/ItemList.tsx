import React, {FC} from "react";
import {getCompanies} from "../../axios/axios";
import './itemList.scss'

type itemListProps = {
    dataCompany: getCompanies,
    setStateDetailItem: React.Dispatch<React.SetStateAction<getCompanies | undefined>>
}
const ItemList: FC<itemListProps> = ({dataCompany, setStateDetailItem}) => {
    return (
        <div className={'wrapperItemList'} onClick={() => setStateDetailItem(dataCompany)}>
            <h2 className={'titleItem'}>{dataCompany.name}</h2>
            <div className={'descriptionItem'}>
                <p>{dataCompany.inn}</p>
                <p>{dataCompany.address.region}</p>
            </div>

        </div>
    )
}


export default ItemList
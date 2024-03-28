import {FC, useContext} from "react";
import {savedOrgContext} from "../../context/savedOrgContext";
import {getCompanies} from "../../axios/axios";
import ItemListSaved from "../ItemListSaved/ItemListSaved";


const FormSaved: FC = () => {
    const {savedOrg} = useContext(savedOrgContext)
    return (
        <div className={'form'}>
            <ul>
                {
                    savedOrg.map((item:getCompanies) => <ItemListSaved key={item.inn} dataCompany={item}/> )
                }
            </ul>
        </div>
    )
}
export default FormSaved
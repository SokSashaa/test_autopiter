import {FC, useContext, useState} from "react";
import './detailItem.scss'
import {getCompanies} from "../../axios/axios";
import {savedOrgContext} from "../../context/savedOrgContext";


type detailItemProps = {
    dataCompany: getCompanies,
}

const DetailItem: FC<detailItemProps> = ({dataCompany}) => {

    const [savedItem, setSavedItem] = useState<boolean>(false)
    const {savedOrg, setSaved0rg} = useContext(savedOrgContext)

    const addElementInSavedOrgArray = () => {
        setSaved0rg([...savedOrg, dataCompany])
        setSavedItem(true)
    }

    const checkElementInSavedOrgArray = (dataCompany:getCompanies)=>{
        return savedOrg.findIndex(item => item.inn===dataCompany.inn)===-1
    }
    return (
        <div className={'detailItem'}>
            <h2 id={'detailItem_title'}>{dataCompany.name}</h2>
            <div className={'info_item'}>
                <div className={'other_info'}>
                    <div className={'other_info_address'}>
                        <p className={'title_other_info'}>Юридический адрес</p>
                        <p className={'value_address_other_info'}>{dataCompany.address?.name}</p>
                    </div>
                    <div className={'other_info_manager'}>
                        <p className={'title_other_info'}>{dataCompany.management?.post ?
                            dataCompany.management?.post : 'Должность отсутствует'}</p>
                        <p>{dataCompany.management?.name ?
                            dataCompany.management?.name : 'Руководитель отсутствует'}</p>
                    </div>
                </div>
                <div className={'main_info'}>
                    <p><span>ИНН</span> {dataCompany.inn}</p>
                    <p><span>КПП</span> {dataCompany.kpp}</p>
                    <p><span>ОГРН</span> {dataCompany.ogrn}</p>
                </div>
            </div>
            {
                !checkElementInSavedOrgArray(dataCompany) ?
                    <div className={'item_saved'}>Сохранено</div>
                    :
                    <button className={'item_save'} onClick={addElementInSavedOrgArray}>Сохранить</button>
            }
        </div>
    )
}
export default DetailItem
import {FC, useContext, useState} from "react";
import './itemListSaved.scss'
import {getCompanies} from "../../axios/axios";
import trash from '../../images/trash.svg'
import {savedOrgContext} from "../../context/savedOrgContext";


type itemListSavedProps = {
    dataCompany: getCompanies
}
const ItemListSaved: FC<itemListSavedProps> = ({dataCompany}) => {
    const [detailSaved, setDetailSaved] = useState<boolean>(false)
    const {savedOrg, setSavedOrg} = useContext(savedOrgContext)
    const delElementInSavedOrgArray = () => {
        savedOrg.splice(savedOrg.findIndex(item => item.inn === dataCompany.inn), 1)
        setSavedOrg([...savedOrg])
    }

    return (
        <div className={!detailSaved ? 'itemList_saved' : 'itemList_saved active'}>
            <div className={'main_info_saved'}>
                <h2 className={'title_itemList_saved'}>{dataCompany.name}</h2>
                <p className={'inn_itemList_saved'}><span>ИНН</span>{dataCompany.inn}</p>
                {
                    detailSaved &&
                    <>
                        {
                            dataCompany.kpp && <p><span>КПП</span>{dataCompany.kpp}</p>
                        }
                        <p><span>ОГРН</span>{dataCompany.ogrn}</p>
                        <p><span>Юридический адрес</span>{dataCompany.address?.name}</p>
                        <p><span>{dataCompany.management?.post}</span>{dataCompany.management?.name}</p>
                    </>
                }
            </div>
            <div className={'other_info_saved'}>
                <img className={'trashIcon'} src={trash} alt={'Удалить'} onClick={delElementInSavedOrgArray}/>
                <p className={!detailSaved ? 'show_more' : 'show_more show_more_active'}
                   onClick={() => setDetailSaved(!detailSaved)}>{!detailSaved ? 'подробнее' : 'скрыть подробности'}<span/>
                </p>
            </div>
        </div>

    )
}
export default ItemListSaved
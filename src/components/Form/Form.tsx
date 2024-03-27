import React, {ChangeEvent, FC, useMemo, useState} from "react";
import './form.scss'
import DescriptionAdd from "../DescriptionAdd/DescriptionAdd";
import getData, {getCompanies} from "../../axios/axios";
import useDebounce from "../../hooks/useDebounce";
import ItemList from "../ItemList/ItemList";

const Form: FC = () => {
    const [valueInput, setValueInput] = useState<string>('')
    const [arrayCompany, setArrayCompany] = useState<getCompanies[]>([])
    const valueInputDebounce = useDebounce(valueInput, 800)
    useMemo(async () => await getData(valueInputDebounce).then(value => setArrayCompany(value)), [valueInputDebounce])
    return (
        <div className={'form'}>
            <div className={'title'}>
                <p id={'titleForm'}>Организация или ИП</p>
                <input type={'text'}
                       placeholder={'Введите название, ИНН или адрес организации'}
                       onChange={(event: ChangeEvent<HTMLInputElement>) => setValueInput(event.target.value)}/>
            </div>

            {
                valueInput === '' ? <DescriptionAdd/> :
                    <ul>
                        {/*arrayCompany.slice(0,5).map((item:getCompanies)=>*/}
                        {/*<ItemList key={item.inn} dataCompany={item} nameSavedButton={true}/>)*/}
                    </ul>
            }
        </div>
    )
}


export default Form
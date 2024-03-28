import React, {ChangeEvent, FC, useMemo, useState} from "react";
import './form.scss'
import DescriptionAdd from "../DescriptionAdd/DescriptionAdd";
import getData, {getCompanies} from "../../axios/axios";
import useDebounce from "../../hooks/useDebounce";
import DetailItem from "../DetailItem/DetailItem";
import SuggestionsItems from "../SuggestionsItems/SuggestionsItems";
import {statesForm} from "../../utils/enums/formEnums";

const Form: FC = () => {

    const [stateDetailItem, setStateDetailItem] = useState<getCompanies | undefined>()


    const [valueInput, setValueInput] = useState<string>('')
    const [arrayCompany, setArrayCompany] = useState<getCompanies[]>([])
    const valueInputDebounce = useDebounce(valueInput, 800)

    useMemo(async () =>
            valueInputDebounce !== '' ? await getData(valueInputDebounce)
                .then(value => setArrayCompany(value)) : null
        , [valueInputDebounce])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValueInput(event.target.value);
        setStateDetailItem(undefined)
    }

    return (
        <div className={'form'}>
            <div className={'title'}>
                <p id={'titleForm'}>Организация или ИП</p>
                <input type={'text'}
                       placeholder={'Введите название, ИНН или адрес организации'}
                       onChange={handleChange}/>
            </div>

            {
                valueInput === '' ? <DescriptionAdd/> :
                    !stateDetailItem ?
                        <SuggestionsItems arrayCompany={arrayCompany} setStateDetailItem={setStateDetailItem}/>
                        : <DetailItem dataCompany={stateDetailItem}/>
            }
        </div>
    )
}


export default Form
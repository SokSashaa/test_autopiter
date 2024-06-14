import React, {FC, useContext, useEffect} from "react";
import {savedOrgContext} from "../../context/savedOrgContext";
import './tabs.scss'
import {statesForm} from "../../utils/enums/formEnums";

type tabsProps = {
    form: statesForm,
    setForm: React.Dispatch<React.SetStateAction<statesForm>>
}

const Tabs: FC<tabsProps> = ({setForm, form}) => {

    const {savedOrg, setSavedOrg} = useContext(savedOrgContext)

    useEffect(() => {
        if (savedOrg.length === 0) setForm(statesForm.search)
    }, [savedOrg, savedOrg.length])

    return (
        <div className={'choiceForm'}>
            <button className={form===statesForm.search?'btn-active':'btn-no-active'} onClick={() => setForm(statesForm.search)} >Новая организация</button>
            <button className={form===statesForm.saved?'btn-active':'btn-no-active'} onClick={() => setForm(statesForm.saved)}
                    disabled={savedOrg.length === 0}>
                Сохраненные организации <span
                className={form === statesForm.saved ? 'choiceForm_saved' : ''}>({savedOrg.length})</span>
            </button>
        </div>
    )
}
export default Tabs
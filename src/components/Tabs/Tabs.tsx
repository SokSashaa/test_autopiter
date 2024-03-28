import React, {FC, useContext, useEffect} from "react";
import {savedOrgContext} from "../../context/savedOrgContext";
import './tabs.scss'
import {statesForm} from "../../utils/enums/formEnums";

type tabsProps = {
    setForm: React.Dispatch<React.SetStateAction<statesForm>>
}

const Tabs: FC<tabsProps> = ({setForm}) => {

    const {savedOrg, setSaved0rg} = useContext(savedOrgContext)

    useEffect(() => {
        if (savedOrg.length === 0) setForm(statesForm.search)
    }, [savedOrg, savedOrg.length])

    return (
        <div className={'choiceForm'}>
            <button onClick={() => setForm(statesForm.search)} className={'btn-active'}>Новая организация</button>
            <button onClick={() => setForm(statesForm.saved)}
                    disabled={savedOrg.length === 0}>
                Сохраненные организации <span>({savedOrg.length})</span>
            </button>
        </div>
    )
}
export default Tabs
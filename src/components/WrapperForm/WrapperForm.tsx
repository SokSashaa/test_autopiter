import {FC, useEffect, useState} from "react";
import './wrapperForm.scss'
import Form from "../Form/Form";
import {getCompanies} from "../../axios/axios";
import {savedOrgContext} from "../../context/savedOrgContext";

enum statesForm {
    search,
    saved
}



const WrapperForm: FC = () => {

    const [form, setForm] = useState<statesForm>(statesForm.search);
    const [savedOrg, setSavedOrg] = useState<getCompanies[]>([]);

    useEffect(() => {
        if (savedOrg.length === 0) setForm(statesForm.search)
    }, [savedOrg, savedOrg.length])

    return (
        <savedOrgContext.Provider value={{savedOrg: savedOrg, setSaved0rg: setSavedOrg}}>
            <div className={'wrapperForm'}>
                <p id={'titleWrapperForm'}>Мои организации</p>
                <div className={'choiceForm'}>
                    <button onClick={() => setForm(statesForm.search)}>Новая организация</button>
                    <button onClick={() => setForm(statesForm.saved)}
                            disabled={savedOrg.length === 0}>
                        Сохраненные организации({savedOrg.length})
                    </button>
                </div>
                <Form/>
            </div>
        </savedOrgContext.Provider>

    )
}
export default WrapperForm
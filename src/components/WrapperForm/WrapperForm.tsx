import {FC, useMemo, useState} from "react";
import './wrapperForm.scss'
import Form from "../Form/Form";
import {getCompanies} from "../../axios/axios";
import {savedOrgContext} from "../../context/savedOrgContext";
import Tabs from "../Tabs/Tabs";
import {statesForm} from "../../utils/enums/formEnums";
import FormSaved from "../FormSaved/FormSaved";

const WrapperForm: FC = () => {

    const [savedOrg, setSavedOrg] = useState<getCompanies[]>([]);
    const [form, setForm] = useState<statesForm>(statesForm.search);

    const q = useMemo(() => {
        return {savedOrg,setSavedOrg}
    }, [savedOrg,setSavedOrg]);

    return (
        <savedOrgContext.Provider value={q}>
            <div className={'wrapperForm'}>
                <h1 id={'titleWrapperForm'}>Мои организации</h1>
                <Tabs form={form} setForm={setForm}/>
                {form === statesForm.search ?
                    <Form/> : <FormSaved/>
                }
            </div>
        </savedOrgContext.Provider>


    )
}
export default WrapperForm
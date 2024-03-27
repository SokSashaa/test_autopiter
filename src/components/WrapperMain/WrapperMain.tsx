import {FC} from "react";
import './wrapperMain.scss'
import WrapperForm from "../WrapperForm/WrapperForm";

const WrapperMain: FC = () => {
    return (
        <div className={'wrapper'}>
            <WrapperForm/>
        </div>
    )
}
export default WrapperMain
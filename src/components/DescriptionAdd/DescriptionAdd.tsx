import {FC} from "react";
import plus from '../../images/plus.svg'
import './DescriprionAdd.scss'
const DescriptionAdd:FC = ()=>{
    return(
        <div className={'descAdd'}>
            <img src={plus} alt={'Добавьте'}/>
            <p>Для добавления новой организации <br/> введите ее название, ИНН или адрес.</p>
        </div>
    )
}
export default DescriptionAdd
import {FC} from "react";
import logo from '../../images/logo.svg'
import './header.scss'

const Header:FC = ()=>{
    return (<div className={'header'}>
      <img src={logo} alt={'logo'}/>
    </div>)
}
export default Header
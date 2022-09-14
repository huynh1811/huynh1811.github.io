import image from '../img/store1.png';
import '../styles/Header.css'
import { BsCart } from 'react-icons/bs';
import { GiSelfLove } from 'react-icons/gi';
import { Link } from 'react-router-dom';




function Header(props) {
    const {countCartItems,oder,Out} = props

    let loginStyle = {}
    let logoutStyle = {}

    if(oder !== ""){
        loginStyle = {display: "none"}
    }
    else{
        logoutStyle={display:"none"}
    }
  
    return (
        <div className="header">
            <Link to={'/'}>  <img className="outfiz" src={image} alt="" /> </Link>
            <div className="header_right">
                <div className="login_in" style={loginStyle}>
                    <nav>
                        <Link to={'/login'} >  <button className="login">ĐĂNG NHẬP</button> </Link>
                    </nav>
                </div>
                <div className="dangky_in" style={loginStyle}>
                    <button className="dangky"> ĐĂNG KÝ</button>
                </div>
                
                <div className="cart_in">
                
                    <nav>
                        <Link to={'/cart'}> <span className="header_cart">
                        <BsCart />
                        {countCartItems? (
                        <button  className="badge">{countCartItems}</button>
                    ) : ('')}
                    </span> </Link>
                    </nav>
                </div>
                <div className="love_in">
                    <span className="header_love">
                        <GiSelfLove />
                    </span>
                </div>
                <div className="dangxuat_in" style={logoutStyle}>
                <nav>
                        <Link to={'/login'} ><button onClick={Out} className="logout" >ĐĂNG XUẤT</button> </Link>
                </nav>
                </div>
            </div>
        </div>
    );
}
export default Header;

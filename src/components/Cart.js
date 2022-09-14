import Somi from '../img/Somi.webp';
import CartSad from '../img/cart sad.png';
import '../styles/Cart.css'

function Cart(props) {
    const {cartItems, onAdd, onRemove, deleteCart} = props
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
    return (
        <div>
            <h1 className='you-cart'>GIỎ HÀNG CỦA BẠN</h1>
            <div className='cart-sad'>
                {cartItems.length === 0 
                &&<div><div>  <img src={CartSad} className="cart-img"/></div>
                   Chưa có sản phẩm nào</div>}
            </div>
            <div className="cart-group">
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item._id} className="cart-item">
                            <img src={Somi} className="cart-img"/>
                            <div className="cart-title">Tên sản phẩm: {item.title}</div>
                            <div className="cart-button"><button onClick={() => onRemove(item)}>-</button></div>
                            <div className="cart-button"><button onClick={() => onAdd(item)}>+</button></div>
                            <div className="cart-qty">Số lượng :{item.qty}</div>
                            <div className="cart-price">Giá : ${item.price}</div>
                        </div>
                    ))}
                </div>
                {cartItems.length !== 0 && (
                    <div className="total-cart">
                        {/* <p>Tổng số lượng: {itemsQty}</p> */}
                        <p>Tổng giá: ${itemsPrice}</p>
                        
                        <nav>
                        <button onClick={deleteCart} className="product-buy">Đặt hàng</button>
                    </nav>
                    </div>
                )}
            </div>
        </div>
    )
    
}




export default Cart;
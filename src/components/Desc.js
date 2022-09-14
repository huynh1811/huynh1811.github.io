import Somi from '../img/Somi.webp';
import '../styles/Desc.css'
import {useEffect,useState} from "react";
import{useParams} from "react-router-dom";


function DescProduct(props){
    const { cartItems, onAdd, onRemove} = props;
    const { slug } = useParams();
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch(`https://api.storerestapi.com/products/${slug}`)
        .then(response => response.json())
        .then(json => setProduct(json.data))
    },[])
return <div className='desc'>
<h1>CHI TIẾT SẢN PHẨM</h1>
<div>
    <img className='desc-img' src={Somi}/>
</div>
<p className="product-title">Tên sản phẩm : {product.title} </p>
<p className="product-price">Giá thành : ${product.price}</p>
<button onClick={() => onAdd(product)} className="product-buy1">thêm vào giỏ hàng</button>
    </div>
}
export default DescProduct
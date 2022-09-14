import '../styles/Product.css'
import Somi from '../img/Somi.webp';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Product(props) {
    const {onAdd} = props;
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch('https://api.storerestapi.com/products')
            .then((response) => response.json())
            .then((json) => setProducts(json.data));
        console.log(products);  
    }, []);
    useEffect(() => {
        fetch('https://api.storerestapi.com/categories')
        .then(response => response.json())
        .then(json => setCategory(json.data))
    }, []);
    


    const filterProducts = (event) => {
        fetch("https://api.storerestapi.com/categories/" + event.target.value)
          .then((res) => res.json())
          .then((json) => setProducts(json.data.products));
        };
    return (
        <div><div className="search">
            <h4 className="search-title">Tìm kiếm sản phẩm</h4>
            <div className="login1">
                <p>Theo danh mục</p>
                <select onChange={filterProducts}>
                    {category.map((cate, index) => (
                        <option key={index} value={cate.slug}>{cate.name}</option>
                    ))}
                </select>
            </div>
        </div><div className="product-section">
                {products.map((product) => (
                    <div key={product._id} className="product-item">
                        <nav>
                            <Link to={`/desc/${product.slug}`}><img className="product_img" src={Somi} alt="" /></Link>
                        </nav>
                        <p className="product-title">Tên sản phẩm: {product.title}</p>
                        <p className="product-price">Giá thành : ${product.price}</p>
                        <button onClick={() => onAdd(product)} className="product-buy">Thêm vào giỏ hàng</button>
                    </div>
                ))}
            </div>
            </div>
    );
}

export default Product;

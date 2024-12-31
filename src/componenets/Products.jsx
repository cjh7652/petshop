import React from 'react';
import {useNavigate, Link} from 'react-router-dom'
import { GiHollowCat } from "react-icons/gi";
import axios from 'axios';
import './products.scss'

const Products = () => {
  const navigate = useNavigate();
  axios.get('')
  .then((res)=>{
    console.log(res)
  }).catch((error) =>{
    console.log(error)
  })
  return (
    <div className='products'>
      <h2>Products</h2>
      <p>상품업로드</p>
      <button className='button' onClick={() =>navigate('/uploadpage')}>상품 업로드</button>
      <div className="product-list">
        <div className="product-card">
          <Link to="">
            <div className="productImg">
              <img src={process.env.PUBLIC_URL + 'img/cat01.jpg'} alt="" />
            </div>
            <div className="productCnt">
              <span className="product-name">고양이 사료</span>
              <span className="product-price">50000원</span>
              <span className="product-seller">
              <GiHollowCat className='icon' />
              <strong>캣컵</strong>
              </span>
            </div>
          </Link>
        </div>
        <div className="product-card">
          <Link to="">
            <div className="productImg">
              <img src={process.env.PUBLIC_URL + 'img/cat01.jpg'} alt="" />
            </div>
            <div className="productCnt">
              <span className="product-name">고양이 사료</span>
              <span className="product-price">50000원</span>
              <span className="product-seller">
              <GiHollowCat  className='icon'/>
              <strong>캣컵</strong>
              </span>
            </div>
          </Link>
        </div>
        <div className="product-card">
          <Link to="">
            <div className="productImg">
              <img src={process.env.PUBLIC_URL + 'img/cat01.jpg'} alt="" />
            </div>
            <div className="productCnt">
              <span className="product-name">고양이 사료</span>
              <span className="product-price">50000원</span>
              <span className="product-seller">
              <GiHollowCat />
              <strong>캣컵</strong>
              </span>
            </div>
          </Link>
        </div>
        <div className="product-card">
          <Link to="">
            <div className="productImg">
              <img src={process.env.PUBLIC_URL + 'img/cat01.jpg'} alt="" />
            </div>
            <div className="productCnt">
              <span className="product-name">고양이 사료</span>
              <span className="product-price">50000원</span>
              <span className="product-seller">
              <GiHollowCat />
              <strong>캣컵</strong>
              </span>
            </div>
          </Link>
        </div>
        <div className="product-card">
          <Link to="">
            <div className="productImg">
              <img src={process.env.PUBLIC_URL + 'img/cat01.jpg'} alt="" />
            </div>
            <div className="productCnt">
              <span className="product-name">고양이 사료</span>
              <span className="product-price">50000원</span>
              <span className="product-seller">
              <GiHollowCat />
              <strong>캣컵</strong>
              </span>
            </div>
          </Link>
        </div>
        <div className="product-card">
          <Link to="">
            <div className="productImg">
              <img src={process.env.PUBLIC_URL + 'img/cat01.jpg'} alt="" />
            </div>
            <div className="productCnt">
              <span className="product-name">고양이 사료</span>
              <span className="product-price">50000원</span>
              <span className="product-seller">
              <GiHollowCat />
              <strong>캣컵</strong>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
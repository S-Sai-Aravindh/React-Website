import React from 'react';
import './style.css';
import Gold from '../Assests/gold necklace.jpg';
import Diamond from '../Assests/diamond ring.jpg';
import Wedding from '../Assests/wedding collection.jpg';
import Platinum from '../Assests/platinum jewel.avif';
import Custom from '../Assests/custom design.jpeg'


const Product = () => {
  return (
    <div className="product-page">

      <h1 className='product-pagetitle'>Explore Our Products</h1>

      <div className="product-container">
        <div className="product-image">
          <img
            src={Gold} // Replace with your product image URL
            alt="Gold Necklace"
            className="product-img"
          />
        </div>

        <div className="product-details">
          <h2 className="product-name">Product Details</h2>
          <table className="product-table">
            <tbody>
              <tr>
                <td className='prodtitle'>Product Name</td>
                <td className='prodvalue'>Gold Necklace</td>
              </tr>
              <tr>
                <td className='prodtitle'>Price</td>
                <td className='prodvalue'>₹ 75,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className='differentiateline'></hr>

      <div className="product-container">
        <div className="product-image">
          <img
            src={Diamond} // Replace with your product image URL
            alt="Product"
            className="product-img"
          />
        </div>

        <div className="product-details">
          <h2 className="product-name">Product Details</h2>
          <table className="product-table">
            <tbody>
              <tr>
                <td>Product Name</td>
                <td>Diamond Ring</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>₹ 1,25,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr className='differentiateline'></hr>

      <div className="product-container">
        <div className="product-image">
          <img
            src={Wedding} // Replace with your product image URL
            alt="Product"
            className="product-img"
          />
        </div>

        <div className="product-details">
          <h2 className="product-name">Product Details</h2>
          <table className="product-table">
            <tbody>
              <tr>
                <td>Product Name</td>
                <td>Wedding Collection</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>₹ 5,00,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr className='differentiateline'></hr>

      <div className="product-container">
        <div className="product-image">
          <img
            src={Platinum} // Replace with your product image URL
            alt="Product"
            className="product-img"
          />
        </div>

        <div className="product-details">
          <h2 className="product-name">Product Details</h2>
          <table className="product-table">
            <tbody>
              <tr>
                <td>Product Name</td>
                <td>Platinum Ring</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>₹ 1,50,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr className='differentiateline'></hr>

      <div className="product-container">
        <div className="product-image">
          <img
            src={Custom} // Replace with your product image URL
            alt="Product"
            className="product-img"
          />
        </div>

        <div className="product-details">
          <h2 className="product-name">Product Details</h2>
          <table className="product-table">
            <tbody>
              <tr>
                <td>Product Name</td>
                <td>Custom Design</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>₹ 2,00,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Product;

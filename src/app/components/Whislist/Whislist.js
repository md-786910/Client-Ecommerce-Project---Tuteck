import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeLocalStorage } from "../../settings/services/whislist/whislist.slice";

function Whislist() {
  const dispatch = useDispatch();
  // const [product, setProduct] = useState([]);
  const product = useSelector((state) => state.whislist.product);

  const handleRemove = (id) => {
    dispatch(removeLocalStorage(id));
  };

  // useEffect(() => {
  //   const prod = JSON.parse(localStorage.getItem("whislist"));
  //   setProduct(prod);
  // }, []);

  return (
    <>
      <main className="main">
        <div
          className="page-header text-center"
          style={{ backgroundImage: "url('assets/images/page-header-bg.jpg')" }}
        >
          <div className="container">
            <h1 className="page-title">
              Wishlist<span>Shop</span>
            </h1>
          </div>
        </div>
        <nav aria-label="breadcrumb" className="breadcrumb-nav">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>

              <li className="breadcrumb-item active" aria-current="page">
                Wishlist
              </li>
            </ol>
          </div>
        </nav>

        {product.length !== 0 ? (
          <div className="page-content">
            <div className="container">
              <table className="table table-wishlist table-mobile">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Stock Status</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {product?.map((prod) => {
                    return (
                      <tr>
                        <td className="product-col">
                          <div className="product">
                            <figure className="product-media">
                              <Link to={`/product/${prod?.productId}`}>
                                <img src={prod.images[0]} alt="Product " />
                              </Link>
                            </figure>

                            <h3 className="product-title">
                              <Link to={`/product/${prod?.productId}`}>
                                {prod?.name.slice(0, 60)}...
                              </Link>
                            </h3>
                          </div>
                        </td>
                        <td className="price-col">{prod?.pricing}</td>
                        <td className="stock-col">
                          <span className="in-stock">In stock</span>
                        </td>
                        <td className="action-col">
                          <button className="btn btn-block btn-outline-primary-2">
                            <i className="icon-cart-plus"></i>Add to Cart
                          </button>
                        </td>
                        <td className="remove-col">
                          <button
                            className="btn-remove"
                            onClick={() => handleRemove(prod?.productId)}
                          >
                            <i className="icon-close"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="container">
            <h5>Empty Whislist</h5>
          </div>
        )}
      </main>
    </>
  );
}

export default Whislist;

import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeLocalStorage } from "../../settings/services/whislist/whislist.slice";
import { useAddToCartMutation } from "../../settings/services/cart.service";
import { showError, showSuccess } from "../../../utils/errorHandling";
import Loader from "../../../utils/Loader";
import BtnLoader from "../../../utils/BtnLoader";

function Whislist() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [product, setProduct] = useState([]);
  const product = useSelector((state) => state.whislist.product);

  // add to cart
  const [
    creatingCart,
    {
      data: cartData,
      isLoading: isCreating,
      isSuccess,
      isError: isCartError,
      error: cartError,
    },
  ] = useAddToCartMutation();

  const addToCart = (prod) => {
    const { productId, name, images, pricing } = prod;
    const actPrice = pricing.split("$").filter(Boolean);

    const data = {
      productId,
      name,
      image: images[0],
      description: "",
      information: "",
      price: parseInt(actPrice[0]),
      qty: 1,
    };
    creatingCart(data);
  };

  const handleRemove = (id) => {
    dispatch(removeLocalStorage(id));
  };

  if (isCartError) {
    showError(cartError?.data?.message);
  }
  useEffect(() => {
    if (isSuccess) {
      if (cartData?.message === "product already exist!") {
        showSuccess(cartData?.message, "", "warning");
      } else {
        showSuccess(cartData?.message, "");
        navigate("/cart");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

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

        {<Loader loading={isCreating} />}

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
                        <td className="price-col">
                          ${prod?.pricing.split("$").filter(Boolean)[0]}
                        </td>
                        <td className="stock-col">
                          <span className="in-stock">In stock</span>
                        </td>
                        <td className="action-col">
                          <button
                            className="btn btn-block btn-outline-primary-2"
                            onClick={() => addToCart(prod)}
                            disabled={isCreating}
                          >
                            <i className="icon-cart-plus"></i>
                            {isCreating ? (
                              <BtnLoader />
                            ) : (
                              <span>add to cart</span>
                            )}
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

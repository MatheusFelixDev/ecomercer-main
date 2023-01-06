import { useDispatch, useSelector } from "react-redux";
import { useNavigate} from "react-router";
import { addToCart } from "../features/cartSlice";

import { useGetAllProductsQuery } from "../features/productsApi";

const Home = () => {
  const { items: products, status} = useSelector((state) => state.products);
 
  
  
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const { data, error, isLoading } = useGetAllProductsQuery();
  


  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");

  };

  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured...</p>
      ) : (
        <>
          <h2>Confira Nossas Ofertas</h2>
          <div className="products">
            {data?.map((product) =>(
              <div key={product.id} className="product">
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <div className="details">
                  <span>{product.desc}</span>
                  <span className="price">${product.price}</span>
                </div>
                <button onClick={() => handleAddToCart(product)}>
                  Adicionar ao carrinho
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
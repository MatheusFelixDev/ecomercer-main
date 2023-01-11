import axios from "axios";
import { useSelector } from "react-redux";
import { url } from "../features/api";


const PayButton = ({cartItems}) => {
    const user = useSelector((state) => state.auth);
    const handleCheckout = () => {
        console.log(cartItems)
        axios
            .post(`${url}/stripe/create-checkout-success`,{
                cartItems,
                userID: user._id,
            })
            .then((res) => {
                if (res.data.url){
                    window.location.href = res.data.url;
                }
            })
            .cath((err) => console.log(err.message));
    };
    return (
        <>
            <button onClick={() => handleCheckout ()}>Check Out</button>
        </>
    );
};
export default PayButton;
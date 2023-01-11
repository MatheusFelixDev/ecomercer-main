import axios from "axios";
import { useSelector } from "react-redux";
import { url } from "../features/api";


const PayButton = ({cartItems}) => {
    const handleCheckout = () => {
        console.log(cartItems)
    };
    return (
        <>
            <button onClick={() => handleCheckout ()}>Check Out</button>
        </>
    );
};
export default PayButton;
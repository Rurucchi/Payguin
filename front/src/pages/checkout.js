import { Outlet, Link } from "react-router-dom";

    let amount = "0"

    function addNum(nb) {
        amount += nb
    } 

const Checkout = () => {
    return (
        <>

        <h1 className="justify-content-center">{"Enter the amount you'dd like to Withdraw"}</h1>

        <div className="amount justify-content-center">
        <p>{amount}</p>
        </div>
        
        <div className="numpad">
            <div>
                <button onclick="addNum('7')">7</button>
                <button onclick="addNum('8')">8</button>
                <button onclick="addNum('9')">9</button>
            </div>
            <div>
                <button onclick="addNum('4')">4</button>
                <button onclick="addNum('5')">5</button>
                <button onclick="addNum('6')">6</button>
            </div>
            <div>
                <button onclick="addNum('1')">1</button>
                <button onclick="addNum('2')">2</button>
                <button onclick="addNum('3')">3</button>
            </div>
        </div>
        <div className="button">
            <Link to="/pin">Checkout</Link>
        </div>
        </>
    )
}; 

export default Checkout;
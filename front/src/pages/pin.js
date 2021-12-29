import { Outlet, Link } from "react-router-dom";

const Pin = () => {
	return (
		<>
		<h1 className="justify-content-center">Please provide your PIN code</h1>

		<div className="numpad">
	        <div>
	            <button>7</button>
	            <button>8</button>
	            <button>9</button>
	        </div>
	        <div>
	            <button>4</button>
	            <button>5</button>
	            <button>6</button>
	        </div>
	        <div>
	            <button>1</button>
	            <button>2</button>
	            <button>3</button>
	        </div>
        </div>
         <input type="submit" value="Submit"/>
		</>
	)
}

export default Pin;
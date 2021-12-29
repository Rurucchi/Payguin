import { Outlet, Link } from "react-router-dom";

const Mainscreen = () =>{
	return (
		<>
		<Link to="/languages">Languages</Link>
		<h1>Welcome to Payguin Assistant !</h1>
		<h2>Login</h2>
		<input type="text" id="login" name="login"></input>

		</>
	)
}

export default Mainscreen;
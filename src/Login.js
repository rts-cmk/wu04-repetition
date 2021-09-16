import { navigate } from "@reach/router"
import { useContext } from "react"
import Store from "./Store"

export default function Login() {
	var {setToken} = useContext(Store)

	function submitHandler(event) {
		event.preventDefault()
		fetch("http://localhost:4000/auth/token", {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify({
				username: event.target.username.value,
				password: event.target.password.value
			})
		})
		.then(res => res.json())
		.then(data => {
			setToken(data)
			navigate("/myschedule")
		})
	}

	return (
		<form onSubmit={submitHandler}>
			<div>
				<label>
					Brugernavn
				</label>
				<input type="text" name="username" />
			</div>
			<div>
				<label>
					Adgangskode
				</label>
				<input type="password" name="password" />
			</div>
			<button type="submit">Log ind</button>
		</form>
	)
}
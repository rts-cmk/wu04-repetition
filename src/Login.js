import { navigate } from "@reach/router"
import { useContext, useEffect, useState } from "react"
import Store from "./Store"
import { useCookies } from "react-cookie"
import { FaSpinner } from "react-icons/fa"
import "./spinner.css"

export default function Login() {
	var {setToken} = useContext(Store)
	var [cookies] = useCookies(["bf-token"])
	var [isLoading, setIsloading] = useState(false)
	
	useEffect(function() {
		if (cookies["bf-token"]) {
			setToken(cookies["bf-token"])
			navigate("/myschedule")
		}
	}, [])

	function submitHandler(event) {
		event.preventDefault()
		setIsloading(true)
		
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

			if (event.target.rememberme.checked) {
				var expires = new Date(data.validUntil).toUTCString()
				document.cookie = `bf-token=${JSON.stringify(data)};expires=${expires}`
			}

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
			<div>
				<input type="checkbox" name="rememberme" />
				<label>Husk mig</label>
			</div>
			<button type="submit" disabled={isLoading}>Log ind {isLoading ? <FaSpinner className="spinner" /> : null}</button>
		</form>
	)
}
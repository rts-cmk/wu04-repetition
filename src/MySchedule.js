import { navigate } from "@reach/router"
import { useContext, useEffect, useState } from "react"
import Store from "./Store"

export default function MySchedule() {
	var {token, setToken} = useContext(Store)
	var [content, setContent] = useState({})

	function logout() {
		setToken(null)
		navigate("/")
	}

	useEffect(function() {
		fetch(`http://localhost:4000/api/v1/users/${token.userId}`, {
			headers: {
				"Authorization": `Bearer ${token.token}`
			}
		})
			.then(res => res.json())
			.then(data => setContent(data))
	}, [token])

	return (
		<>
		<h1>My Schedule</h1>
		<button onClick={logout}>Log ud</button>
		{content.classes?.map(element => <h2>{element.className}</h2>)}
		</>
	)
}

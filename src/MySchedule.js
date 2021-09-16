import { navigate } from "@reach/router"
import { useContext, useEffect, useState } from "react"
import { FaSpinner } from "react-icons/fa"
import Store from "./Store"
import "./spinner.css"

export default function MySchedule() {
	var { token, setToken } = useContext(Store)
	var [content, setContent] = useState({})
	var [isLoading, setIsLoading] = useState(true)

	function logout() {
		setToken(null)
		navigate("/")
	}

	useEffect(function () {
		fetch(`http://localhost:4000/api/v1/users/${token.userId}`, {
			headers: {
				"Authorization": `Bearer ${token.token}`
			}
		})
			.then(res => res.json())
			.then(data => {
				setContent(data)
				setIsLoading(false)
			})
	}, [token])

	return (
		<>
			<h1>My Schedule</h1>
			<button onClick={logout}>Log ud</button>
			{isLoading
				? <FaSpinner className="spinner" />
				: content.classes?.map(element =>
					<h2>{element.className}</h2>)
			}
		</>
	)
}

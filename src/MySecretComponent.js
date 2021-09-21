import { useContext } from "react"
import { TokenStore, DarkmodeStore } from "./Store"
import "./style.css"

export default function MySecretComponent() {
	var {token} = useContext(TokenStore)
	var {darkmode, setDarkmode} = useContext(DarkmodeStore)

	return (
		<div className={darkmode ? "darkmode" : ""}>
			<h1>{token}</h1>
			<button onClick={() => setDarkmode(!darkmode)}>Darkmode</button>
		</div>
	)
}
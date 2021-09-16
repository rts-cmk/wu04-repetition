import Store from "../Store"
import { useContext } from "react"

export default function Cart() {
	var {cartContent} = useContext(Store)

	return (
		<>
			<p>Indkøbskurv</p>
			{cartContent.map(element => <p>{element.className}</p>)}
		</>
	)
}
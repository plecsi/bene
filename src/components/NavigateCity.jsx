import { Link } from "react-router-dom"

const NavigateCity = ({ cities }) => {
    return (
        <ul className="items-center justify-center text-blue-900">
            {cities?.map((item, index) => <li key={index}><Link to={`cities/${item}`} key={index} className="text-2xl font-bold">{item}</Link> </li>)}
        </ul>
    )
}

export default NavigateCity
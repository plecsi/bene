import { Link } from "react-router-dom"

const BackButton = () => {
    return (
        <Link to="/" className="btn btn-backbtn">
            <span className="icon icon-chevron-left" />
        </Link >
    )
}

export default BackButton
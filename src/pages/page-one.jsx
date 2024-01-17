import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { apiService } from "../hooks/apiService"
import { selectedCapitals } from "../reducers/cities"
import { Link } from "react-router-dom"
import NavigateCity from "../components/navigateCity"

const PageOne = () => {
    const ize = useSelector(selectedCapitals)

    return (
        <>
            <NavigateCity cities={ize} />
            <Link to='PageTwo' className="text-3xl text-green text-center">+</Link>
        </>
    )
}
export default PageOne
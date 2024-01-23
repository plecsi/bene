import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { apiService } from "../hooks/apiService"
import { selectedCapitals } from "../reducers/cities"
import { Link } from "react-router-dom"
import NavigateCity from "../components/navigateCity"
import { useLocalStorage } from "../hooks/localStorage"

const PageOne = () => {
    const selectedCities = useSelector(selectedCapitals)

    const { readStore } = useLocalStorage()
    return (
        <>
            {selectedCities || readStore('cities') && < NavigateCity cities={selectedCities} />}
            <Link to='PageTwo' className="text-3xl text-green text-center">+</Link>
        </>
    )
}
export default PageOne
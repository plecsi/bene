import { useParams } from "react-router-dom"
import { apiService } from "../hooks/apiService"
import { useEffect, useState } from "react"
import CityDetails from "../components/City"

const PageThree = () => {
    const params = useParams()
    const { query } = apiService()
    const [city, setCity] = useState([])
    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const resp = await query(import.meta.env.VITE_API_WEATHER_URL, { q: params.id, units: 'metric', appid: import.meta.env.VITE_API_WEATHER_KEY })
                setCity(resp.data)
            } catch (error) {
                console.log('error', error)
            }
        }

        fetchWeather()
    }, [])


    return <CityDetails {...city} />
}
export default PageThree
import { useSelector } from "react-redux"
import { allCapitals } from '../reducers/cities'
import Autocomplete from "../components/Autocomplete"
import BackButton from "../components/BackButton"

const PageTwo = () => {
    const cities = useSelector(allCapitals)

    return (
        <>
            <BackButton />
            <div>
                <Autocomplete suggestion={cities.capitals} limit={8} />
            </div>
        </>
    )
}
export default PageTwo
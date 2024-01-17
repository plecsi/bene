import { useState } from "react"
import FilteredSuggestion from "./Suggestion"
import { useDispatch, useSelector } from "react-redux"
import { selectedCity, selectedCapitals } from "../reducers/cities"
import { useNavigate } from "react-router-dom"
import styles from "./Autocomplete.module.scss"

const Autocomplete = ({ suggestion, limit }) => {
    const [suggestions] = useState(suggestion)
    const [autocompleteState, setAutocompleteState] = useState(
        {
            currentValue: '',
            filteredValue: [],
            canSave: false
        }
    )
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const storeOfCapital = useSelector(selectedCapitals)

    const handleChange = (e) => {
        const value = e.currentTarget.value

        const filteredSuggestions = suggestions.filter(
            suggestion => suggestion?.capital.toLowerCase().indexOf(value.toLowerCase()) !== -1 && !storeOfCapital.includes(suggestion?.capital)
        )
            .slice(0, limit)
            .map(item => {

                let string = item.capital.substr(
                    0,
                    item.capital.toLowerCase().indexOf(value.toLowerCase())
                );
                let endString = item.capital.substr(
                    item.capital.toLowerCase().indexOf(value.toLowerCase()) +
                    value.length
                );

                let highlightedText = item.capital.substr(
                    item.capital.toLowerCase().indexOf(value.toLowerCase()),
                    value.length
                )
                return `${string}<span class=${styles.highlight}>${highlightedText}</span>${endString}`
            })
        setAutocompleteState({ currentValue: value, filteredValue: filteredSuggestions })
    }

    const handleClick = (e) => {
        setAutocompleteState({ currentValue: e.currentTarget.innerText, filteredValue: [], canSave: true })
    }


    const handleSubmit = (e) => {
        dispatch(selectedCity(autocompleteState.currentValue))
        navigate('/')
    }

    return (
        <div className={styles.Autocomplete}>
            <div className={styles.fieldset}>
                <input
                    type="text"
                    onChange={handleChange}
                    name="cities"
                    value={autocompleteState.currentValue}
                    className={styles.input}
                />
                {autocompleteState.currentValue && <span className="icon icon-chevron-down" />}
            </div>
            {autocompleteState.canSave && <button onClick={handleSubmit} className="btn btn-primary">Save</button>}
            <FilteredSuggestion value={autocompleteState.filteredValue} click={handleClick} styles={styles} />
        </div>
    )

}

export default Autocomplete
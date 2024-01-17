const FilteredSuggestion = ({ value, click, styles }) => {
    return (
        <>
            <ul className={styles.ul}>
                {value.map((item, index) => {
                    return <li key={index} onClick={click} dangerouslySetInnerHTML={{ __html: item }}></li>
                })}
            </ul>
        </>
    )
}

export default FilteredSuggestion
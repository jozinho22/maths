const MainTitle = ( {title, hidden} ) => {
    return <h1 className={`${hidden ? "Hidden" : ""}`}>{title}</h1>
}

export default MainTitle;
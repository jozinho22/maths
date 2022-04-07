const GenericChapter = ( {name, component} ) => {

    return (
        <>
            <p className="Title1">{name}</p>
            {component}
        </>
    )
}

export default GenericChapter;
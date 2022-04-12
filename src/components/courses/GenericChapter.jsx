const GenericChapter = ( {name, component} ) => {

    return (
        <>
            <p className="Title">{name}</p>
            {component}
        </>
    )
}

export default GenericChapter;
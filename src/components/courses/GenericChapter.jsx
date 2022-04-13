const GenericChapter = ( {name, component, count} ) => {

    return (
        <>
            <p className="Title">chapitre {count} : {name}</p>
            {component}
        </>
    )
}

export default GenericChapter;
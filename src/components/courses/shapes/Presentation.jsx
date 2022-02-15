const Presentation = ( {children}) => {
    console.log(children)
    return (
        <>
            <p>
                Nous allons présenter ici quelques formes élémentaires.
                {"\n"}
                Essentiellement le carré, le cube, le triangle, la pyramide, le cylindre, le cône et la sphère.
            </p> 
            <p>
                Nous allons aussi calculer leurs différents volumes par intégration.
            </p>
            <p>Let's go ?</p>
        </>
    )

}

export default Presentation;
import GenericTableOfContents from '../immutable/GenericTableOfContents';

const GamesTableOfContents = ( {gameItems} ) => {

    var prefix = 'jeux';
    var title = 'Tous les jeux';

    return (
        <>
            <GenericTableOfContents items={gameItems} prefix={prefix} title={title} />
        </>
    )

}

export default GamesTableOfContents;
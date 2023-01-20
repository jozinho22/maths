import { Container } from 'react-bootstrap';

const ChaptersTableOfContents = ( {chapters, setCount} ) => {

    return (
        <>
            <Container className="TableOfContents">
            {
                chapters.map(chapter => (
                    <div key={chapter.id} className="TableOfContentsLink">
                        <div 
                            className="Clickable"
                            onClick={() => setCount(chapter.id)}>
                            <p><u>chapitre {chapter.id}</u> - {chapter.name}</p>
                        </div> 
                    </div>
                ))
            }
            </Container>
        </>
    )

}

export default ChaptersTableOfContents;
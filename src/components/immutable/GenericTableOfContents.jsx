import { Container } from 'react-bootstrap';
import Link from '../immutable/nav/Link';

const GenericTableOfContents = ( {items, prefix, title} ) => {

    return (
        <>
            <p className="MainTitle">{title}</p>
            <Container className="TableOfContents">
                {
                    items.map(item => (     
                        <div key={item.id} className="TableOfContentsLink" >
                            <Link link={`/${prefix}/${item.relativePath}`} internalLink={true} >
                                <div>{item.title}</div>
                            </Link>
                        </div>    
                    ))
                }
            </Container>
        </>
    )

}

export default GenericTableOfContents;
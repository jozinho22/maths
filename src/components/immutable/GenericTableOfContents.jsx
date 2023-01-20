import { Container } from 'react-bootstrap';
/* import Link from '../immutable/nav/Link'; */
import { NavLink } from 'react-router-dom';

const GenericTableOfContents = ( {items, prefix, title} ) => {

    return (
        <>
            <p className="MainTitle">{title}</p>
            <Container className="TableOfContents">
                {
                    items.map(item => (     
                        <div key={item.id} className="TableOfContentsLink" >
                            {/* <Link link={`/${prefix}/${item.relativePath}`} internalLink={true} >
                                <div>{item.title}</div>
                            </Link> */}
                            <NavLink  
                                    to={`/${prefix}/${item.relativePath}`} 
                                    state={
                                            { 
                                                title: item.title,
                                                metaContent: item.metaContent,
                                                canonicalLink: item.relativePath
                                            }
                                        } >
                                {item.title}
                            </NavLink>
                        </div>    
                    ))
                }
            </Container>
        </>
    )

}

export default GenericTableOfContents;
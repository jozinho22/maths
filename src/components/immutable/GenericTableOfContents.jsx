import { Container } from 'react-bootstrap';
/* import Link from '../immutable/nav/Link'; */
import { NavLink } from 'react-router-dom';
import pathBuilder from '../helpers/pathBuilder';

const GenericTableOfContents = ( {items, prefix, title} ) => {

    return (
        <>
            <p className="MainTitle">{title}</p>
            <Container className="TableOfContents">
                {
                    items.map(item => (     
                        <div key={item.id} className="TableOfContentsLink" >
                            <NavLink  
                                    to={pathBuilder(`/${prefix}${item.relativePath}`)} 
                                    state={
                                            { 
                                                title: item.title,
                                                metaContent: item.metaContent,
                                                relativePath: item.relativePath
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
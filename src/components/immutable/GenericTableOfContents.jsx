import { Container } from 'react-bootstrap';
/* import Link from '../immutable/nav/Link'; */
import { NavLink } from 'react-router-dom';
import pathBuilder from '../helpers/pathBuilder';
import MainTitle from './MainTitle';

const GenericTableOfContents = ( {items, prefix, title} ) => {

    return (
        <>
            <MainTitle title={title} />
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
                                <p>{item.title}</p>
                            </NavLink>
                        </div>    
                    ))
                }
            </Container>
        </>
    )

}

export default GenericTableOfContents;
import React from 'react';
import { Container } from 'react-bootstrap';
/* import Link from '../immutable/nav/Link'; */
import { NavLink } from 'react-router-dom';
import pathBuilder from '../helpers/pathBuilder';
import MainTitle from './MainTitle';

const GenericTableOfContents = ( {items, prefix, title, action} ) => {

    React.useEffect(() => {
        setTimeout(function(){
            window.scrollTo(0, 0)
        }, 2000);

    }, [prefix]); 

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
                                        } 
                                    onClick={action} >
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
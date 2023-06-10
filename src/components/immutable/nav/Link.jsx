import pathBuilder from "../../helpers/pathBuilder";
import { NavLink } from "react-router-dom";

const Link = ( {url, external, children} ) => {

    return (
        
            external ?
                <a 
                    className="Link" 
                    href={url} 
                    target={"_blank"} rel="noreferrer">
                    {children}
                </a> : 
                        <NavLink to={pathBuilder(url)}>
                            {children}
                        </NavLink>
    );
}

export default Link;
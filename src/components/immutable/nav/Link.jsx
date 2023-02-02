const Link = ( {link, children} ) => {

    return (
        <a 
            className="Link" 
            href={link} 
            target={"_blank"} rel="noreferrer">
            {children}
        </a>
    );
}

export default Link;
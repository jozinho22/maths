const Link = ( {link, internalLink, children} ) => {

    return (
        <a 
            className="Link" 
            href={link} 
            target={internalLink ? "_self" : "_blank"} 
            rel="noopener">{children}
        </a>
    );
}

export default Link;
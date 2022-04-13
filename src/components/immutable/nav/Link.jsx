const Link = ( {link, children} ) => {

    return (
        <a href={link} target="_blank" rel="noopener">{children}</a>
    );
}

export default Link;
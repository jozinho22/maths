import Link from "../immutable/nav/Link";
import CoursesLinks from "./CoursesLinks";

const UnsplashCopyRight = ( { item } ) => {

    return (
            <p className="AuthorCopyRight">{item} : &copy; <Link link={CoursesLinks.UNSPLASH} external>unsplash.com</Link></p> 
        );  
}

export default UnsplashCopyRight;
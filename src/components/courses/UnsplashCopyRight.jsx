import Link from "../immutable/nav/Link";
import CoursesConstants from "./CoursesConstants";

const UnsplashCopyRight = ( { item } ) => {

    return (
            <p className="AuthorCopyRight">{item} : &copy; <Link link={CoursesConstants.UNSPLASH} external>unsplash.com</Link></p> 
        );  
}

export default UnsplashCopyRight;
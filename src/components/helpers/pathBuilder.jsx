import Constants from "../immutable/Constants";

const pathBuilder = (path) => {
    /* return `${process.env.NODE_ENV === 'production' ? Constants.GH_PAGES_PREFIX : ""}${path}`; */
    return path;
}

export default pathBuilder;
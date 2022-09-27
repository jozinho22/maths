import GenericTableOfContents from '../immutable/GenericTableOfContents';
import Link from '../immutable/nav/Link';

const PdfTableOfContents = ( {pdfItems} ) => {

    var SAVOIR_SANS_FRONTIERES = 'http://www.savoir-sans-frontieres.com/JPP/telechargeables/free_downloads.htm';
    var prefix = 'bds-de-jpp';
    var title = 'Toutes les BDs de Jean-Pierre Petit';

    return (
        <>
            <GenericTableOfContents items={pdfItems} prefix={prefix} title={title} />
            <p className="AuthorCopyRight">Avec l'accord de Mr Petit - <Link link={SAVOIR_SANS_FRONTIERES} >toutes ses BDs</Link></p>     
        </>
    )

}

export default PdfTableOfContents;
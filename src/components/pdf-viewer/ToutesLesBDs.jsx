import { Button } from 'react-bootstrap'

const ToutesLesBDs = ( {pdfItems} ) => {

    return (
        
            pdfItems.map(pdfItem => (
                <Button key={pdfItem.id} className="DefaultButton" href={`bds-de-jpp/${pdfItem.relativePath}`}>
                    {pdfItem.title}
                </Button>
            ))

    );

}

export default ToutesLesBDs;
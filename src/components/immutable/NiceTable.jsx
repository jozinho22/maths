import React from 'react';
import { Container, Table } from 'react-bootstrap';

const NiceTable = ( {children} ) => {

    return (
            React.useMemo(() => 
                <Container className="TableContainer" >
                    <Table responsive striped bordered >
                        {children}
                    </Table>
                </Container>
            ));
}

export default NiceTable;
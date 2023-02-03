import styled from 'styled-components';

const HomeTableOfContents = styled.span
    `   position: relative;
        top: 120px;
        padding: 30px;
        padding-left: 25%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: flex-start;

        @media (max-width: 450px) {
            padding-left: 8%;
            top: 100px;
        }
    `
;

export default HomeTableOfContents;
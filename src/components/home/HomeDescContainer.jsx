import styled from 'styled-components';

const HomeDescContainer = styled.span
    `   position: relative;
        top: 100px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: flex-start;
        font: var(--scholar-font);
        text-align: justify;

        @media (max-width: 450px) {
            top: 50px;
        }
    `
;

export default HomeDescContainer;
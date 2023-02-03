import styled from 'styled-components';

const HomeTitleContainer = styled.span
    `   position: relative;
        top: 30px;
        background-image: linear-gradient(to bottom right, var(--front-color), grey);
        border-radius: 10px;
        color: var(--links-color);
        font-size: large;
        padding: 30px;
        box-shadow: 20px 20px 5px 5px var(--navbar-color);
        margin-bottom: 100px;

        @media (min-width: 450px) {
            top: 50px;
            width: 400px;
            display: inline-block;
        }
    `
;

export default HomeTitleContainer;
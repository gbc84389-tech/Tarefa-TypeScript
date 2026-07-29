import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 100vh;
    min-width: 100vw;

    form {
        grid-area: top;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
    }

    div {
        grid-area: center;
    }
`
import styled from "styled-components";

export const Container = styled.div`
    height: 4rem;

    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 2rem;
    font-weight: bold;
`

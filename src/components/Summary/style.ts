import styled from 'styled-components';


export const Container = styled.div`

/* usamos o grid para criar colunas para os cards*/

display: grid;
grid-template-columns: repeat(3,1fr);
gap: 2rem;
margin-top:-10rem;

div{
    background: #fff;
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color:#363F5F;

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    strong{
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
    }
    &.highlight-background{
        background:#33CC95;
        color: #fff;
    }

}

`
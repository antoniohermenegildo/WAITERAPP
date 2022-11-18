import styled from 'styled-components';

export const Cabecalho = styled.header`
  height: 198px;
  background: #D73035;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details{
    color:#ffffff;
    h1{
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }
    h2{
      font-size: 1rem;
      font-weight: 400;
      opacity: 0.9;
    }
  }
`;

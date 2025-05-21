import styled from "styled-components";

export const Container = styled.div`
  background: #8652ff;
  padding: 35px;
  border-radius: 18px;
  opacity: 0.9;

  .content {
    max-height: 200px;
    overflow: auto;
  }

  .content::-webkit-scrollbar {
    border-radius: 20px;
    max-width: 10px;
  }

  .content::-webkit-scrollbar-track {
    border-radius: 20px;
  }

  .content::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background: #971dee;
    max-width: 10px;
  }

  h1 {
    color: #fff;
    font-size: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    height: 40px;
    border-radius: 5px;
    border: none;
    margin-top: 30px;
    outline: none;
    padding-left: 5px;
    padding-right: 25px;
  }

  .totalGeral {
   display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border: 1px solid none;
    background: #8652ff;
    margin-top: 10px;
  }
  
  .divInput {
   display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr)); /* Cria colunas com largura mínima de 200px e distribui o espaço restante */
    grid-gap: 5px; /* Espaçamento entre as colunas */
     text-align: center;
  }
  
   .btn {
     margin-top: 10px;
     margin-bottom: 10px;
     display: flex;
    justify-content: center;
    align-items: center;
     
   }
`;

export const AddButton = styled.button`
  background: #6cf000;
  color: #353535;
  height: 35px;
  padding: 5px 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
 // width: 160px;
 

  &:hover {
    opacity: 0.8;
  }
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background: #fff;
  border-radius: 5px;
  margin-top: 15px;
  padding: 0 15px;

  p {
    text-transform: capitalize;
    font-weight: bold;
    padding: 3px;
     font-size: 12px;
  }
`;

export const TrashButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;

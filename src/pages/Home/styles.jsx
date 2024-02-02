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
  }

  input {
    height: 35px;
    border-radius: 5px;
    border: none;
    margin-top: 30px;
    outline: none;
    padding-left: 5px;
    padding-right: 25px;
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
  margin-left: 10px;

  &:hover {
    opacity: 0.8;
  }
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  background: #fff;
  border-radius: 5px;
  margin-top: 15px;
  padding: 0 10px;

  p {
    text-transform: capitalize;
    font-weight: bold;
  }
`;

export const TrashButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;

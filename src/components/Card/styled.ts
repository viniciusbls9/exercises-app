import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  margin-right: 50px;
  background-color: #f7f7f7;
  margin-bottom: 20px;
  border-bottom: 2px solid transparent;
  border-right: 2px solid #ccc;
  transition: border-bottom-color 0.3s ease-in-out;

  &:hover {
    border-bottom-color: #ccc;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    margin-right: 20px;
  }
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 16px;
  text-align: center;
`;
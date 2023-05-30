import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-bottom: 20px;
  border-bottom: 2px solid transparent;
  transition: border-bottom-color 0.3s ease-in-out;

  &:hover {
    border-bottom-color: #ccc;
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
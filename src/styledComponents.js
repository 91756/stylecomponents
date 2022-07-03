import styled from 'styled-components'

export const Heading = styled.h1`
  color: #007c01;
  font-family: 'Roboto';
`
export const CustomButton = styled.button`
  color: ${props => props.color};
  font-size: 16px;
  padding: 10px;
  margin-right: 20px;
  background-color: ${props => props.bgColor};
  border-radius: 5px;
  border: 2px solid #0070c1;
`

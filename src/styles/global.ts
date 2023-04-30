import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

 * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
 }

 body {
  background: radial-gradient(circle at 120%, #000000, #333 35%, #000 55%, #000000 175%);
  color: #fff;
  -webkit-font-smoothing: antialiased;
  height: 100%;
  min-height: 100vh;
  overflow-x: hidden;
 }

 body, input, button, table {
  font-size: 14px;
  font-family: din-2014, sans-serif;
  font-weight: 400;
  font-style: normal;
 }

 #app {
  margin: 0 auto;
  padding: 0 30px;
  max-width: 80%;
  height: 100%;
 }

 button {
  cursor: pointer;
 }
`;

import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
${normalize}

body {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-style: normal;
  width: 100%;
  height: 100vh;
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
img {
  display: block;
}
button {
  cursor: pointer;
}

::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-thumb {
  background-color: #9ebbff;
  border-radius: 8px;
}

::-webkit-scrollbar-track {
  background-color: rgba(239, 237, 232, 0.1);
}
`;

export default GlobalStyle;

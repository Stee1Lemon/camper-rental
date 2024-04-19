import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
${normalize}

:root{
  --white-color: #fff;
  --first-color: #101828;
  --second-color: #475467;
  --third-color: #e44848;
  --fourth-color: #ffc531;
  --fifth-color: #f2f4f7;
  --sixth-color: #f7f7f7;
  --button-hover: #d84343;
  --placeholder-color: rgba(16, 24, 40, 0.6);
  --border-color: rgba(16, 24, 40, 0.2)
}

body {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
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
  margin: 0;
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

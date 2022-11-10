import { html } from '../../node_modules/lit-html/lit-html.js'

const listTemplate = (data) => html`
  <ul>
    ${data.forEach((el) => {
      html` <li>${el}</li> `;
    })}
  </ul>
`;

export default listTemplate()
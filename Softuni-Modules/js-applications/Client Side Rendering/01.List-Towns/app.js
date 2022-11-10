import { html, render } from "../node_modules/lit-html/lit-html.js";

document.getElementById("btnLoadTowns").addEventListener("click", getTowns);

function getTowns(e) {
  e.preventDefault();
  const towns = document.getElementById("towns").value.split(", ");
  const root = document.getElementById("root");
  const ul = document.createElement("ul");

  const listTemplateResult = listTemplate(towns);

  render(listTemplateResult, root);

  document.getElementById("towns").value = "";
}

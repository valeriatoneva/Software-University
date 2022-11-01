async function getInfo() {
  const stopId = document.getElementById("stopId").value;
  let submitBtn = document.getElementById("submit");
  const stopNameEl = document.getElementById("stopName");
  const timetableEl = document.getElementById("buses");
  const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

  try {
    stopNameEl.textContent = "Loading...";
    timetableEl.replaceChildren();
    const response = await fetch(url);

    if(!response.ok){
      throw new Error('Stop ID not found')
    }

    const data = await response.json();
    stopNameEl.textContent = data.name;

    Object.entries(data.buses).forEach((bus) => {
      const li = document.createElement("li");
      li.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;
      timetableEl.appendChild(li);
    }); // returs array
  } catch (error) {
    stopNameEl.textContent = "Error";
  }
}

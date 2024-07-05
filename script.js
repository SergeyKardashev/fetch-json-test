async function asyncFetch() {
  const response = await fetch("./data.json");
  console.log("ответ получен", response);
  const readableData = await response.json();
  console.log("ответ распарсен", readableData);
  return readableData;
}

async function renderData() {
  const fetchedData = await asyncFetch();
  console.log("fetchedData", fetchedData);
  console.log(fetchedData.job);
}

renderData();

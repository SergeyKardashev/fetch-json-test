async function asyncFetchPerson() {
  const response = await fetch("./person.json");
  console.log("ответ получен", response);
  const readableData = await response.json();
  console.log("ответ распарсен", readableData);
  return readableData;
}

async function consolePerson() {
  const fetchedPerson = await asyncFetchPerson();
  console.log("fetchedData", fetchedPerson);
  console.log(fetchedPerson.job);
}

consolePerson();

fetchParamsSales = { url: "./sales.json" };

async function fetchData(params) {
  const rawData = await fetch(params.url);
  const data = await rawData.json();
  console.log("fetch function return ", data);
  return data;
}

async function renderSales() {
  const salesData = await fetchData(fetchParamsSales);
  console.log("salesData ", salesData);
  // нахожу контейнер для таблицы
  const tableContainer = document.querySelector(".table-wrap");

  // создаю таблицу в переменную, а не в дом
  const mainTable = document.createElement("table");
  mainTable.classList.add("main-table");

  // создаю шапку таблицы
  const tableHeader = document.createElement("thead");

  // создаю строку для шапки
  const headerRow = document.createElement("tr");

  // наполняю строку шапки данными из json
  salesData.headers.forEach((item) => {
    const td = document.createElement("td");
    td.textContent = item;
    headerRow.append(td);
  });

  // вставляю строку заголовка в шапку
  tableHeader.append(headerRow);

  // вставляю шапку в таблицу
  mainTable.append(tableHeader);

  // вставляю таблицу контейнер для таблицы (в ДОМ)
  tableContainer.append(mainTable);
}

renderSales();

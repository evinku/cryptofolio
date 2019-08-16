export function getFromLocal(name) {
  return JSON.parse(localStorage.getItem(name));
}

export function setToLocal(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

export function getPortfolios() {
  return fetch("/api/portfolios").then(res => res.json());
}

export function postPortfolio(data) {
  return fetchPortfolio("POST", data);
}

/*export function patchPortfolio(data, id) {
  return fetchPortfolio("PATCH", data, id);
}*/

function fetchPortfolio(method, data, id = "") {
  return fetch("/api/portfolios/" + id, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

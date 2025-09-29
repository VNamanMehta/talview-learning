import fetch from "node-fetch";

export async function getUser(id) {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return response.json();
}

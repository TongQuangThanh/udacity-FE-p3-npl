import { checkForName } from "./nameChecker"

export function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById('inputURL').value
  checkForName(formText)
  fetch('http://localhost:8080/test', {
    mode: "no-cors",
    credentials: 'same-origin',
    method: "POST",
    header: {
      "Content-Type": "application/json",
      credentials: "same-origin",
      'Access-Control-Allow-Origin': '*',
    }
  })
    .then(res => res.json())
    .then(async function (key) {
      console.log(key);
      const rawResponse = await fetch('https://api.meaningcloud.com/sentiment-2.1', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ key })
      });
      const respond = await rawResponse.json();
      console.log(respond);
      document.getElementById('results').innerHTML = res.message
    })
}

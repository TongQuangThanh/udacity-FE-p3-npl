import { checkForName } from './nameChecker'

async function handleSubmit(event) {
  event.preventDefault();

  let formText = document.getElementById("inputURL").value;
  if (checkForName(formText)) {
    try {
      const rawParam = await fetch("http://localhost:8080/api-param");
      const { key } = await rawParam.json();
      const formData = new FormData();
      formData.append("key", key);
      formData.append("txt", formText);
      const requestOptions = {
          method: 'POST',
          body: formData,
          redirect: 'follow'
      };
      const rawData = await fetch(`https://api.meaningcloud.com/sentiment-2.1`, requestOptions);
      const data = await rawData.json();
      console.log(data);
      document.getElementById("results").innerHTML = data.subjectivity + " / " + data.score_tag + " - " + data.agreement + " (" + data.confidence + ")";
    } catch (error) {
      console.error(error);
      document.getElementById("results").innerHTML = "Error!!! Please try again later";
    }
  } else {
    document.getElementById("results").innerHTML = "Error!!! Please input text";
  }
}

export { handleSubmit };

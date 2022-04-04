import axios from "axios";



const data = "";

export const getTweets = async ({prompt}) => {

  prompt.toString() 
 
  var info = JSON.stringify({
    "prompt": `${prompt}`,
    "temperature": 0.7,
    "max_tokens": 1000,
    "top_p": 1,
    "frequency_penalty": 0,
    "presence_penalty": 0
  });
  
  var config = {
    method: 'post',
    url: 'https://api.openai.com/v1/engines/text-davinci-001/completions',
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': 'Bearer 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'
    },
    data : info
  };
  
 await axios(config)
  .then(function (response) {
    data = response.data;
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
  
  return data;
}
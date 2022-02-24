import axios from "axios";

export const getTweets = async () => {
    const { data } = await axios.get('https://api.openai.com/v1/engines/text-davinci-001/completions', {
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${process.env.API_KEY_OPEN_AI}`
      }
      }).catch(function (error) {
        console.log(error);
      });
    return data;
}
import axios from "axios";


export const getOpenKeys = async () => {
    const { data } = await axios.get('https://pegbnyipjeakcosdknne.supabase.co/rest/v1/config_openai?select=*', {
        headers: { 
            'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
          }
      }).catch(function (error) {
        console.log(error);
      });
    return data;
}


export const setOpenKeys = async (credencial) => {
    const data = await axios.post('https://pegbnyipjeakcosdknne.supabase.co/rest/v1/config_openai', credencial, {
        headers: { 
            'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
            'Content-Type': 'application/json',
          }
      })
      .catch(function (error) {
        console.log(error);
      });
    return data;
}



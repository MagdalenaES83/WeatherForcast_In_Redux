
apiKey= process.env.REACT_APP_API_KEY

export const fetchCity= (city) => {
    return async (dispatch) => {
      try {
        let response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Stavanger&APPID=` + apiKey
        );
  
        if (response.ok) {
          const data = await response.json();
          
            console.log("sdfhsifhs", data);
          dispatch({
            type: "FETCH_CITY",
            payload: data, 
            
          });
        } else {
          console.log("not fetch");
        }
      } catch (error) {
        console.log(error);
      }
    };
  };
  
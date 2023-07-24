
const CityPage = async ({ params, searchParams }) => {

  const name = params.id;
  const latitude = searchParams.latitude;
  const longitude = searchParams.longitude;

  const getCityWeather = async () => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,rain&current_weather=true`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Request failed:', error);
    }
  };


  const data = await getCityWeather(); 

  return (<>
    <h1>{name}</h1>
    <h3>Latitude: {data.latitude}</h3>
    <h3>Longitude: {data.longitude}</h3>
    <h3>Temperature: {data.current_weather.temperature} &deg;C </h3>
    <h3>Wind Speed: {data.current_weather.windspeed} km/h</h3>
  </>
  )
}

export default CityPage;
export const getCovidData = async () => {
    const data = await fetch("https://api.covid19tracker.ca/summary");
    const covidData = await data.json();

    const dataAttributes = {
        total_cases: covidData.data[0].total_cases,
        total_fatalities: covidData.data[0].total_fatalities,
        change_cases: covidData.data[0].change_cases,
        change_fatalities: covidData.data[0].change_fatalities,
        total_vaccinated: covidData.data[0].total_vaccinated,
        last_updated: covidData.last_updated,
    }
    return dataAttributes;
}
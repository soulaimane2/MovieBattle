const apiFetch = async () => {
    const data = await axios.get('http://www.omdbapi.com/',{
        params:{
            apikey:"cee05158",
            s:"batman"
        }
    });
    console.log(data.data);
    return data.data;
};


apiFetch().then( async (res) => {
    console.log(res.Search[0].Title);
    const title = await axios.get('http://www.omdbapi.com/',{
        params:{
            apikey:"cee05158",
            i: res.Search[0].imdbID
        }
    });
    console.log(title.data.Actors);
});
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import InputSearch from './components/InputSearch';
import spin from './assets/img/tail-spin.svg'
import Show from './components/Show';
import { nanoid } from 'nanoid';
import noImg from './assets/img/no-img.png'
import { generate } from "random-words";
import Footer from './components/Footer';

function App() {
  const [value, setValue] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [dataElements, setDataElements] = useState([]);
  const [showElements, setShowElements] = useState(false);
  const [query, setQuey] = useState(generate());

    const handleValue = (e) => {
        const inputValue = e.target.value;
        setValue(inputValue)
    }

    async function getShows () {
      try {
        setQuey(value.toLowerCase())
        let api = `https://api.tvmaze.com/search/shows?q=${query}`,
        res = await fetch(api),
        data = await res.json();
        setError(false)
        setLoader(false)

        if (data.length === 0) {
          setError(true)
          setMessage(`No matches for ${query}`)
        }

        else{
            setDataElements(data.map(el =>
              <Show 
              key={nanoid()}
              id={el.show.id}
              name={el.show.name}
              url={el.show.url}
              img={(el.show.image === null)?
                noImg : el.show.image.medium}
              status={el.show.status}
              country={el.show.network === null? 
                "N/A" : el.show.network.country.name}
              summary={el.show.summary? el.show.summary:
                "Description not available"}
              type={el.show.type}
              />
            ))
            setShowElements(true);
        }

      } catch (err) {
          console.log(err)
          setLoader(false)
          setError(true)
          setMessage(err.status || "Error while fetching, please check your internet connection and reload")
          setShowElements(false);
      }
    }
  return (
    <div className="App">
      <Header/>
      <div className='search'>
        <h1>SEARCH FOR TV SHOWS</h1>
        <InputSearch value={value} onChange={handleValue} 
        getShows={getShows} loader={loader} setLoader={setLoader}
        setError={setError} setShowElements={setShowElements}
        setDataElements={setDataElements}
        query={query}/>
        {value ==="" && <p className='intro'>Write your show name</p>}
      </div>
      <section id='shows-query' className='content'>
      {showElements && <p className='showing-results'>Showing results for: <mark>{query}</mark></p>}
        {loader && <img src={spin} alt='Loading' className='loader'/>}
        {error && <p className='loader'>{message}</p>}
        {showElements && dataElements}
      </section>
      <Footer/>
    </div>
  );
}

export default App;

import React from "react";
import "./home.css";
import Sidebar from "../../components/sidebar/sidebar";
import SingleCharacter from "../../components/single-character/single-character";
import { ReactComponent as ButtonIcon } from "../../assets/chevron-right-solid.svg";
import MobileHeader from "../../components/mobile-header/mobile-header";
import { useHistory } from "react-router-dom";
import SearchBar from "../../components/search-bar/search-bar";
import { useEffect } from "react";
import { getRandomCharacter } from "../../api";

function Home() {
  const [random, setRandom] = React.useState([]);
  const [stories, setStories] = React.useState([]);
  const [search, setSearch] = React.useState([]);
  const [filteredResults, setFilteredResults] = React.useState([]);
  const [advancedSearch, setAdvancedSearch] = React.useState(false);
  const history = useHistory();

  useEffect(async () => {
    // fetch("https://urchin-app-l7pyx.ondigitalocean.app/characters/random")
    //   .then((res) => res.json())
    //   .then((resJson) => {
    //     console.log(resJson);
    //     const newRandom = resJson.data;
    //     console.log(newRandom);
    //     console.log(filteredResults.length);
    //     setRandom(newRandom);
    //   });
    const randomCharacter = await getRandomCharacter();
    setRandom(randomCharacter.data.result);
  }, []);

  return (
    <div className="Home">
      <Sidebar />
      <MobileHeader />

      <div className="home-container">
        <div className="welcome">
          <h2>Welcome to the database</h2>
          <p>
            Enter a few keywords in the search bar below to find an aromantic or
            asexual character in the database! These can be orientations
            (demisexual, grayromantic, etc.), story genres (fantasy,
            contemporary), or many more—and you can use more than one.
          </p>
          <p>
            Not sure what to enter? Check out the{" "}
            <a href="/about">About the Database</a> page for the list of
            categories and terms used, or hit the “Give me a new character”
            button for inspiration!
          </p>
        </div>
        <div className="free-search">
          <form
            onSubmit={(event) => {
              console.log(search);

              event.preventDefault();
              history.push(`/results?search=${search}`);
              // fetch(
              //   `https://aroacedb-back.herokuapp.com/character/infinite?search=${search}`
              // )
              //   .then((res) => res.json())
              //   .then((resJson) => {
              //     console.log(search);
              //     console.log(resJson.data);

              //     if (resJson.data) {
              //       const newResults = resJson.data.characters;
              //       setFilteredResults(newResults);
              //       console.log(filteredResults);
              //     }
              //   });
            }}
          >
            <input
              type="text"
              placeholder="Enter your keywords here to search"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            ></input>
            <button>
              <ButtonIcon fill="white" height="20px" width="30px" />
            </button>
          </form>
        </div>

        {/* <div className="button-container">
          <div className="common-searches">
            <span>Common searches: </span>
            <a href="/results?search=acespec">All Aces</a>
            <a href="/results?search=canonaros">All Aros</a>
            <a href="/results?search=canonaces">In-Canon Aro/Ace leads </a>
          </div>

          <button
            onClick={() => {
              setAdvancedSearch(!advancedSearch);
            }}
          >
            Advanced Search
          </button>
        </div>
        {advancedSearch ? <SearchBar /> : ""} */}

        <div className="results">
          <div className="random">
            <h2>Your random character</h2>
            <SingleCharacter character={random} />
            <div className="char-btn">
              <button
                onClick={async () => {
                  const randomCharacter = await getRandomCharacter();
                  setRandom(randomCharacter.data.result);
                }}
              >
                Give me a new character!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

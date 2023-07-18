import React from "react";
import Header from "../components/header/Header.jsx";
import SearchBar from "../components/searchBar/SearchBar.jsx";
import InfoSection from "../components/infoSection/InfoSection.jsx";
import {createContext} from "react";


export const SearchContext = createContext(null)
const Home = () => {
  const [word, setWord] = React.useState('keyboard')

  return (
      <div>
        <Header/>
        <SearchContext.Provider value={{word, setWord}}>
          <SearchBar/>
          <InfoSection/>
        </SearchContext.Provider>
      </div>
  );
};

export default Home;
import React, {useContext} from "react";
import {BiSearch} from "react-icons/bi";
import {SearchContext} from "../../page/Home.jsx";

const SearchBar = () => {
  const {word,setWord} = useContext(SearchContext)
  const [value, setValue] = React.useState(word)


  const handleEnter = (e) =>{
    if (e.key === 'Enter'){
      setWord(value)
    }
  }
  return (
      <div className="container">
        <div className=" input-container">
        <input
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyDown={(e) => handleEnter(e)}
            className="input"
            type="text"
        />
        <BiSearch className="w-[24px] h-[24px] fill-black"/>

      </div>
      </div>
  );
};

export default SearchBar;
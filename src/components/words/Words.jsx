import {useContext} from "react";
import {SearchContext} from "../../page/Home.jsx";

const Words = ({item,title}) => {
  const {setWord} = useContext(SearchContext)
  return (
      <div className="flex gap-4 mt-4 items-start pl-[20px] flex-wrap">
        <p className="italic dark:text-white">{title}</p>
        {
          item.map((word, index) =>
              <p
                  onClick={(e)=> setWord(e.target.innerText)}
                  className="cursor-pointer px-2 border-amber-700 flex border rounded-full text-amber-700 text-[14px] dark:text-white"
                  key={word + index}
              >{word}</p>
          )
        }
      </div>
  );
};

export default Words;
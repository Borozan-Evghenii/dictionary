import React from 'react';
import {SearchContext} from "../../page/Home.jsx";
import useSWR from "swr";
import Phonetics from "../phonetic/Phonetics.jsx";
import Meanings from "../meanings/Meanings.jsx";
import NotFound from "../notFound/NotFound.jsx";



const fetcher = (...arg) => fetch(...arg).then(res=> res.json())
const InfoSection = () => {
  const {word} = React.useContext(SearchContext)
 const {data= []} = useSWR(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`, fetcher)

  if (data.hasOwnProperty('title')){
    return <NotFound data={data}/>
  }
  return (
      <div className="container">
        <div className="my-[50px] flex flex-col gap-4">
          <p className="text-5xl font-bold dark:text-white">{data[0]?.word}</p>
          <div className="flex flex-col gap-4">
            {
              data[0]?.phonetics.map((item,index) =>{
                if (item.audio !== ''){
                  return <Phonetics key={item.text + index} data={item} />
                }
              }
              )
            }
          </div>
          {
            data[0]?.meanings?.map((item, index) =>
                <Meanings key={`meaning` + index} data={item}/>
            )
          }

        </div>

      </div>
  );
};

export default InfoSection;
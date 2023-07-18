import React from 'react';
import Words from "../words/Words.jsx";

const DefinitionItem = ({data}) => {
  return (
      <>
        {data?.map((item, index) =>
            <div  key={item + index} className="border-b pb-[20px] mt-[20px]">
              <p>{item.definition}</p>
              {item.antonyms.length !== 0  && <Words title={'Antonyms'} item={item.antonyms}/>}
              {item.synonyms.length !== 0  && <Words title={'Synonyms'} item={item.synonyms}/>}
            </div>
        )}
      </>
  );
};

export default DefinitionItem;
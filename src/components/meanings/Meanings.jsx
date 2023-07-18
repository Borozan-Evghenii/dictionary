import Words from "../words/Words.jsx";
import DefinitionItem from "../definitionItem/DefinitionItem.jsx";

const Meanings = ({data}) => {
  return (
      <div className="flex flex-col mt-[50px]">
        <div className="flex items-center gap-4">
          <p className="whitespace-nowrap text-xl italic">{data.partOfSpeech}</p>
          <hr className="w-full"/>
        </div>
        <div className="mt-[25px] flex flex-col gap-[20px] pl-[20px]">

          {data.antonyms.length !== 0 && <Words title={'Antonyms'}item={data.antonyms}/>}
          {data.synonyms.length !== 0 && <Words title={'Synonyms'} item={data.synonyms}/>}

          <DefinitionItem data={data.definitions}/>

        </div>
      </div>
  );
};

export default Meanings;
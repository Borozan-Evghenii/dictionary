import {BsFillPlayFill} from "react-icons/bs";
import {useRef} from "react";

const Phonetics = ({data}) => {
  const audioRef = useRef(null)
  const handlePlay = () => {
    audioRef.current.play()
  }
  return (
      <div className="flex items-center justify-between">
        <p className="text-2xl text-amber-700">{data.text}</p>
            <div className="flex flex-col items-start">
              <audio ref={audioRef}>
                <source src={data.audio}/>
              </audio>
              <button
                  onClick={handlePlay}
                  className="flex w-[45px] h-[45px] rounded-full bg-blue-500 items-center justify-center hover:bg-blue-600">
                <BsFillPlayFill className="text-white w-[24px] h-[24px] "/>
              </button>
            </div>
      </div>
  );
};

export default Phonetics;
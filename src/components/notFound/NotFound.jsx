import {GiArchiveResearch} from "react-icons/gi";

const NotFound = ({data}) => {
  return (
      <div className="container mt-[90px] flex flex-col gap-4 items-center">
        <GiArchiveResearch className="w-[100px] h-[100px] mb-2.5 text-amber-700"/>
        <p className="text-4xl  dark:text-white">{data.title}</p>
        <p className="italic dark:text-white">{data.message}</p>
        <p className=" dark:text-white">{data.resolution}</p>
      </div>
  );
};

export default NotFound;
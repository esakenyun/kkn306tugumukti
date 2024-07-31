import Link from "next/link";
import { FaCode } from "react-icons/fa6";

export default function ActivityCard({ imgUrl, title, date, previewUrl }) {
  return (
    <div>
      <div className="h-52 md:h-72 rounded-t-xl relative group" style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#E0FBE2] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 rounded-t-xl">
          <Link href={previewUrl} className="h-14 w-14 mr-2 border-2 relative rounded-full border-slate-500 hover:border-white group/link">
            <FaCode className="h-10 w-10 text-primarytext absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-slate-700 py-6 px-4">
        <h5 className="sm:text-md font-semibold mb-2">{title}</h5>
        <p className="sm:text-sm text-slate-400">{date}</p>
      </div>
    </div>
  );
}

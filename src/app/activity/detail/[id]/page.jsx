"use client";

import { useEffect, useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import activityDataJson from "../../../../components/data/activityData.json";
import Image from "next/image";
import LoadingAnimation from "@/components/animation/LoadingAnimation";
import Link from "next/link";

export default function DetailActivity({ params }) {
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    const getActivityById = () => {
      const data = activityDataJson.activity.find((item) => item.id === parseInt(params.id));
      setTimeout(() => {
        setActivity(data);
      }, 1000);
    };
    getActivityById();
  }, [params.id]);

  if (!activity) {
    return <LoadingAnimation />;
  }

  return (
    <div className="flex justify-center min-h-screen px-5 py-5 sm:px-10 sm:py-10">
      <div className="bg-green-100 w-full rounded-xl">
        <div className="px-3 py-3 sm:px-8 sm:py-8">
          <Link href={"/activity"}>
            <div className="flex items-center gap-2 py-2 bg-white w-fit px-4 rounded-full">
              <IoChevronBackOutline className="text-sm sm:text-xl" />
              <p className="text-xs sm:text-base">Back</p>
            </div>
          </Link>
          <p className="text-center sm:pt-2 sm:text-3xl font-extrabold">{activity.title}</p>
          <div className="flex justify-center items-center gap-2">
            <p className="text-center text-xs sm:text-base font-semibold text-gray-500">{activity.date}</p>
            <FaCircle className="text-xs sm:text-base text-gray-300" />
            <p className="text-xs sm:text-base font-semibold text-gray-500">8.45 AM</p>
          </div>
          <div className="flex justify-center">
            <Image src={activity.image} width={500} height={500} alt={activity.title} className="w-auto h-auto rounded-xl mt-2" />
          </div>
          <div className="mt-3 sm:mt-5 mb-3 sm:px-5">
            <p className="text-justify">{activity.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

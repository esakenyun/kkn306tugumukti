"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ActivityCard from "@/components/card/ActivityCard";
import activityDataJson from "../../components/data/activityData.json";
import Link from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";

export default function Activity() {
  const [activityData] = useState(activityDataJson.activity);
  // const activityData = [
  //   {
  //     id: 1,
  //     title: "Pembekalan Bersama DPL",
  //     date: "15 Juli 2024",
  //     image: "/activity/pembekalandpl.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "Pemberian Materi Bersama DPL",
  //     date: "16 Juli 2024",
  //     image: "/activity/pembekalandpl.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Diberi Materi Bersama DPL",
  //     date: "11 Juli 2024",
  //     image: "/activity/pembekalandpl.jpg",
  //   },
  //   {
  //     id: 4,
  //     title: "Pertemuan Bersama DPL",
  //     date: "17 Juli 2024",
  //     image: "/activity/pembekalandpl.jpg",
  //   },
  //   {
  //     id: 5,
  //     title: "Perbincangan Bersama DPL",
  //     date: "14 Juli 2024",
  //     image: "/activity/pembekalandpl.jpg",
  //   },
  // ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [filterType, setFilterType] = useState("nama");
  const [filteredActivities, setFilteredActivities] = useState(activityData);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const handleFilterAndSort = () => {
    let sortedActivities = [...filteredActivities];

    if (filterType === "nama") {
      sortedActivities = sortedActivities.sort((a, b) => {
        const firstWordA = a.title.split(" ")[0];
        const firstWordB = b.title.split(" ")[0];
        return firstWordA.localeCompare(firstWordB);
      });
    } else if (filterType === "date") {
      sortedActivities = sortedActivities.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    setFilteredActivities(sortedActivities);
  };

  const handleFilterTypeChange = (e) => {
    setFilterType(e.target.value);
  };

  return (
    <section className="min-h-screen bg-[#B0EBB4]">
      <div className="py-10 px-3 sm:px-10">
        <h1 className="text-center font-bold text-xl sm:text-3xl text-slate-800">
          All Activities <br />
          KKN 306 Tugumukti
        </h1>
        <div className="flex justify-between items-center py-2">
          <div>
            <Link href={"/"}>
              <div className="flex items-center gap-2 py-2 bg-white w-fit px-4 rounded-full">
                <IoChevronBackOutline className="text-sm sm:text-xl" />
                <p className="text-xs sm:text-base">Back</p>
              </div>
            </Link>
          </div>
          <div className="bg-[#E0FBE2] w-fit px-2 py-2 rounded-lg">
            <p className="sm:text-xl font-semibold text-slate-800">Filter</p>
            <div className="flex items-center gap-2">
              <p>Urutkan berdasarkan :</p>
              <select name="filter" id="filter" className="text-sm bg-slate-400 rounded-lg" value={filterType} onChange={handleFilterTypeChange}>
                <option value="nama">Nama</option>
                <option value="date">Date</option>
              </select>
            </div>
            <div className="flex items-center justify-center pt-3">
              <button onClick={handleFilterAndSort} className="text-sm text-white font-semibold rounded-md bg-blue-500 px-4 py-1 hover:scale-105">
                Apply
              </button>
            </div>
          </div>
        </div>
        <div>
          <ul ref={ref} className="py-5 grid md:grid-cols-3 gap-8 md:gap-12">
            {filteredActivities.map((activity, index) => (
              <motion.li key={index} variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"} transition={{ duration: 0.3, delay: index * 0.4 }}>
                <ActivityCard key={activity.id} imgUrl={activity.image} title={activity.title} date={activity.date} previewUrl={`/activity/detail/${activity.id}`} />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ActivityCard from "../card/ActivityCard";
import activityDataJson from "../data/activityData.json";

export default function ActivitySection() {
  const activityData = activityDataJson.activity.slice(0, 6);
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="activity">
      <div className="py-14 sm:py-20 px-3 sm:px-10">
        <h1 className="text-slate-800 text-2xl sm:text-4xl font-extrabold text-right">Activity</h1>
        <ul ref={ref} className="py-5 grid md:grid-cols-3 gap-8 md:gap-12">
          {activityData.map((activity, index) => (
            <motion.li key={index} variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"} transition={{ duration: 0.3, delay: index * 0.4 }}>
              <ActivityCard key={activity.id} imgUrl={activity.image} title={activity.title} date={activity.date} previewUrl={`/activity/detail/${activity.id}`} />
            </motion.li>
          ))}
        </ul>
        <div className="flex justify-center py-3">
          <Link href="/activity">
            <button className="text-slate-800 text-xl py-2 px-5 rounded-full border border-black hover:bg-slate-800 hover:text-white hover:scale-105 focus:bg-slate-800 focus:text-white">See More</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

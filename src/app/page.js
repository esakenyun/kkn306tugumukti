"use client";
import Navbar from "@/components/navigation/navbar";
import ActivitySection from "@/components/section/ActivitySection";
import Footer from "@/components/section/FooterSection";
import HomeSection from "@/components/section/HomeSection";
import LocationSection from "@/components/section/LocationSection";
import TeamsSection from "@/components/section/TeamsSection";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-[#B0EBB4]">
        <Navbar />
        <div className="container mt-24 mx-auto">
          <HomeSection />
          <TeamsSection />
          <ActivitySection />
          <LocationSection />
        </div>
        <Footer />
      </main>
    </>
  );
}

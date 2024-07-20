import { FaInstagram, FaYoutube } from "react-icons/fa";
import { AiOutlineTikTok } from "react-icons/ai";
import Link from "next/link";

export default function LocationSection() {
  return (
    <section className="bg-[#E0FBE2]" id="location">
      <div className="py-10 sm:py-20">
        <h1 className="font-extrabold text-2xl sm:text-4xl text-center text-slate-800">Location</h1>
        <div className="py-10">
          <div className="grid sm:grid-cols-2 gap-10 justify-center items-center">
            <div className="px-10">
              <div className="google-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31694.122689264663!2d107.52332681087316!3d-6.798379400448994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e24f376e8139%3A0x983a5bdd8fcd6f90!2sTugumukti%2C%20Cisarua%2C%20West%20Bandung%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1721060737229!5m2!1sen!2sid"
                  width="600"
                  height="450"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"></iframe>
              </div>
            </div>
            <div className="px-10 text-left">
              <div className="flex flex-col gap-2">
                <h1 className="sm:text-2xl font-bold">Desa Tugumukti</h1>
                <h1 className="sm:text-2xl font-bold">Kecamatan Cisarua</h1>
                <h1 className="sm:text-2xl font-bold">Kabupaten Bandung Barat</h1>
                <h1 className="sm:text-2xl font-bold">Provinsi Jawa Barat</h1>
              </div>
              <div className="sm:pt-10">
                <p className="sm:text-2xl font-bold sm:mb-5">My Social Media</p>
                <div className="flex gap-3 sm:gap-5 items-center">
                  <Link href="https://www.instagram.com/kkn_tugumukti_306/" target="_blank">
                    <div className="py-2 px-2 bg-[#b0ebb4] rounded-lg text-slate-50 hover:text-pink-500 cursor-pointer hover:scale-105">
                      <FaInstagram className="text-3xl" />
                    </div>
                  </Link>
                  <Link href="https://www.tiktok.com/@kkn_tugumukti_306" target="_blank">
                    <div className="py-2 px-2 bg-[#b0ebb4] rounded-lg text-slate-50 hover:text-black cursor-pointer hover:scale-105">
                      <AiOutlineTikTok className="text-3xl" />
                    </div>
                  </Link>
                  <div className="py-2 px-2 bg-[#b0ebb4] rounded-lg text-slate-50 hover:text-red-500 cursor-pointer hover:scale-105">
                    <FaYoutube className="text-3xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HomeSection() {
  return (
    <section className="lg:py-16 px-12 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-3xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold whitespace-pre-line">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5b3c0c] to-[#d88a38]">Selamat Datang,</span>
            <br />
            <TypeAnimation sequence={["Di Halaman Website\n KKN 306 Tugumukti", 1000, "", 1000]} wrapper="span" speed={50} repeat={Infinity} />
          </h1>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image src="/logo.svg" alt="Logo KKN 306 Tugumukti" width={500} height={500} className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" priority />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

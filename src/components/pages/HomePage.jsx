import MainLayout from "../layout/MainLayout";
import { RoundedText } from "../component";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

const HomePage = () => {
  return (
    <MainLayout>
      <main className="px-4 xl:px-16  mt-16">
        <div className="text-[#e8eaed]">
          <div className="container lg:px-20 px-0 py-6 mx-auto">
            <div className="max-w-[1200px] h-full ">
              <div className=" text-center flex flex-col justify-center xl:pt-24 xl:text-left h-full container mx-auto">
                <motion.h1
                  variants={fadeIn("down", 0.2)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="text-[35px] leading-tight md:text-[60px] md:leading-[1.3] mb-8 font-semibold"
                >
                  I'm Software ingneer <br /> into{" "}
                  <span className="text-green ">Gereltbaatar</span>
                </motion.h1>
                <motion.p
                  variants={fadeIn("down", 0.3)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="max-w-ms xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16  "
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium atque non voluptas quo quas quia qui tempora
                  obcaecati quasi mollitia, odit animi possimus debitis magni
                  earum! Perspiciatis quasi assumenda impedit error fugiat amet
                  nam laboriosam, neque illo! Iure, fugiat tempore?
                </motion.p>
                <motion.div
                  variants={fadeIn("down", 0.4)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="mx-auto xl:mx-0 xl:flex hidden"
                >
                  <RoundedText />
                </motion.div>
              </div>
            </div>
            <div className="mx-auto xl:mx-0  flex justify-center  xl:hidden relative">
              <RoundedText />
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
};

export default HomePage;
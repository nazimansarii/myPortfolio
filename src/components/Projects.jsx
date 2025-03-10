import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import tailorshop from "../assets/tailorshop.png";
import expenseTracker from "../assets/expense-tracker.png";

export default function Projects() {
  return (
    <>
      <h2 className="text-3xl sm:text-[40px] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae]  font-[inherit]">
        Latest Works
      </h2>
      <section className="max-w-screen-xl mx-auto px-7 relative py-12 sm:pb-16 flex flex-wrap  justify-around space-y-30 sm:space-x-2  gap-4 font-[inherit]">
        {/* project no 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className=" text-center bg-black shadow-cyan-600 shadow-sm hover:shadow-md flex flex-col items-center relative group hover:scale-105 ease-in-out sm:mr-auto duration-200  px-3 py-5 rounded-md">
            <Link
              to="https://ansaritailor.netlify.app/"
              target="_black"
              className="flex flex-col items-center justify-center"
            >
              <img
                className="max-w-[350px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)] hover:scale-110 duration-300"
                src={tailorshop}
                alt=""
              />

              <span className="flex group-hover:-top-14  ease-jump duration-200 bg-[#FBE37B] text-black sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Tailor Shop
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </Link>

            <div className="mt-6 max-w-[350px] w-full">
              <h4 className="text-center text-2xl text-[#FBE37B] font-bold">
                Tailor Shop
              </h4>
              <p className="text-md my-1">A tailor shop platform</p>
              <p className="text-justify">
                This website is fully generated with the help of AI (Artificial
                Intelligence), designed to showcase a tailor shop’s 15 years of
                expertise with a clean, modern, and user-friendly interface.
              </p>
              <ul className="flex justify-evenly items-center my-3 flex-wrap gap-2">
                <li className="border rounded-md px-4 py-1">#ReactJS</li>
                <li className="border rounded-md px-4 py-1">
                  #AI (Artificial Intelligence)
                </li>
                <li className="border rounded-md px-4 py-1">#TailwindCSS</li>
              </ul>
              <Link
                to="https://github.com/nazimansarii/tailor-web"
                target="_blank"
              >
                <button className="w-full bg-[#1788ae]  cursor-pointer mt-4 hover:scale-105 duration-300 py-2 rounded-md flex items-center justify-center">
                  GitHub
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                      className="w-7 h-7 text-white  transition-colors duration-300 overflow-hidden rounded-lg p-1 "
                    >
                      <path
                        fill="currentColor"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                      />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
        {/* project no 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className=" text-center bg-black shadow-cyan-600 shadow-sm hover:shadow-md flex flex-col items-center relative group hover:scale-105 ease-in-out sm:mr-auto duration-200  px-3 py-5 rounded-md">
            <Link
              to="https://track-expeneses.netlify.app/"
              target="_black"
              className="flex flex-col items-center justify-center"
            >
              <img
                className="max-w-[350px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)] hover:scale-110 duration-300"
                src={expenseTracker}
                alt=""
              />

              <span className="flex group-hover:-top-14  ease-jump duration-200 bg-[#fc815c] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Expense Tracker
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </Link>

            <div className="mt-6 max-w-[350px] w-full">
              <h4 className="text-center text-2xl text-[#FC815C] font-bold">
                Expense Tracker
              </h4>
              <p className="text-md my-1">An Expense Tracker platform</p>
              <p className="text-justify">
                A simple and efficient app to track your income and expenses. It
                helps you manage your budget and monitor your spending. Stay
                organized and take control of your finances with ease.
              </p>
              <ul className="flex justify-evenly items-center my-3 flex-wrap gap-2">
                <li className="border rounded-md px-4 py-1">#HTML (JSX)</li>
                <li className="border rounded-md px-4 py-1">#CSS</li>
                <li className="border rounded-md px-4 py-1">#JavaScript</li>
                <li className="border rounded-md px-4 py-1">#ReactJS</li>
              </ul>
              <Link
                to="https://github.com/nazimansarii/expense-tracker"
                target="_blank"
              >
                <button className="w-full bg-[#1788ae]  cursor-pointer mt-4 hover:scale-105 duration-300 py-2 rounded-md flex items-center justify-center">
                  GitHub
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                      className="w-7 h-7 text-white  transition-colors duration-300 overflow-hidden rounded-lg p-1 "
                    >
                      <path
                        fill="currentColor"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                      />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

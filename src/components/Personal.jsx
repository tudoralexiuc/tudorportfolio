import React from 'react';
import { motion, useScroll, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  IoIosArrowRoundForward,
  IoIosArrowRoundBack,
  IoIosHome,
} from 'react-icons/io';
import table from '../pics/table.svg';
import context from '../pics/context.svg';
import research from '../pics/research.svg';
import style from '../pics/realisation.svg';

function Personal() {
  return (
    <>
      <motion.div className="homeButton">
        <Link to="/">
          <button className="text-3xl">
            <IoIosHome />
          </button>
        </Link>
      </motion.div>
      <motion.div className="backButton">
        <Link to="/">
          <button className="text-3xl">
            <IoIosArrowRoundBack />
          </button>
        </Link>
      </motion.div>
      <div className="bg-personal-project h-full w-full flex flex-col p-[5rem]">
        <div className="flex justify-center">
          <svg
            width="273"
            height="276"
            viewBox="0 0 73 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="personalProject">
              <g id="myhead">
                <path
                  id="Vector 165"
                  d="M63.106 16.709C63.106 14.8206 63.3431 13.0796 62.2904 11.4253C59.5794 7.16507 53.5131 5.84593 49.1343 4.26211C39.9302 0.93295 29.3794 1.43555 20.198 4.74084C15.0646 6.58888 12.5627 11.001 8.9214 14.7231C6.1114 17.5956 3.27552 20.7324 2.39655 24.6877C0.29891 34.1271 6.82215 42.5034 14.9143 46.5495C17.1212 47.6529 19.7246 47.8321 22.0952 48.4467C25.1113 49.2286 28.4204 49.5685 31.5101 49.9715C36.2116 50.5847 40.8922 50.164 45.5527 49.5814C49.907 49.0371 54.1328 46.6753 57.9996 44.7942C61.0814 43.2949 64.447 40.6582 65.9783 37.5956C66.8889 35.7744 68.5095 33.9573 69.0989 32.0282C69.6484 30.2298 70.0509 28.3612 70.606 26.5849C71.3126 24.3238 70.9212 20.6653 70.1273 18.482C69.6275 17.1075 68.6848 16.0821 67.645 15.0423C67.0469 14.4441 64.9062 12.8792 64.0634 12.8792"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </g>
              <path
                id="mylefteye"
                d="M17.7867 21.1772C17.8805 22.0214 19.2244 23.5401 19.8612 24.0495C20.9487 24.9196 21.3682 25.6453 23.0527 25.6453C25.3854 25.6453 29.0719 26.7682 29.2761 23.0921C29.314 22.4108 29.6345 19.6766 29.1166 19.2623C28.1056 18.4535 25.9546 18.2582 24.6485 17.968C22.9746 17.596 18.0915 17.0571 17.1484 18.9431"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                id="myrighteye"
                d="M49.3824 25.007C47.0181 25.007 43.631 24.9189 42.0419 22.9325C41.4368 22.1762 41.7228 20.7182 41.7228 19.741C41.7228 18.2205 43.8561 18.2461 44.9143 18.3049C46.8801 18.4141 50.2606 20.1406 51.4391 21.6559C52.1479 22.5672 51.8706 23.4585 50.8363 24.0496C49.7364 24.6781 49.1155 24.6094 48.4249 25.6453"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
              <g id="sad">
                <path
                  id="Vector 168"
                  d="M19.3823 37.1348C21.6496 37.1348 23.8113 37.4539 26.0845 37.4539C28.707 37.4539 32.4412 36.8407 34.8434 37.9326C35.6161 38.2839 36.8795 38.4114 37.7335 38.4114C38.6681 38.4114 39.9009 39.1935 40.925 39.3511C42.8003 39.6396 44.8909 39.5167 46.5101 40.3263"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </g>
              <g id="Group 9">
                <path
                  id="Vector 169"
                  d="M29.2761 50.5391C29.2761 54.3589 29.2761 58.2665 29.2761 62.188C29.2761 62.6395 29.6502 64.6726 29.5243 64.8299C28.822 65.7078 27.5589 66.2117 26.5811 66.6561C24.7306 67.4973 23.0727 68.8004 21.2974 69.6881"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  id="Vector 170"
                  d="M28.957 65.5391C29.103 66.7071 30.5928 68.3007 31.3507 69.227C32.3932 70.5012 33.6632 72.079 34.3826 73.5178"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  id="Vector 171"
                  d="M28.6378 57.5603C26.4942 57.5603 24.5691 58.1986 22.4144 58.1986C21.656 58.1986 20.8715 58.8369 20.0208 58.8369C19.1806 58.8369 17.8314 59.4752 19.3825 59.4752"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  id="Vector 172"
                  d="M29.2761 58.1987C30.6918 58.1987 32.8019 60.306 33.8151 61.3193C35.0147 62.5189 37.1368 62.6078 38.5315 63.3051"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </g>
            </g>
          </svg>
        </div>
        <div className="mt-[5rem] dmb text-[3.5rem] text-left text-[#666d89]">
          PERSONAL PROJECT
        </div>
        <div className="flex">
          <div>
            <div className="flex mt-[3rem]">
              <div className="dmb text-[1.5rem] text-left text-[#666d89]">
                CATEGORY
              </div>
            </div>
            <div className="flex mt-[1.5rem]">
              <div className="dmb text-[1.5rem] text-left text-[#666d89]">
                YEAR
              </div>
            </div>
            <div className="flex mt-[1.5rem]">
              <div className="dmb text-[1.5rem] text-left text-[#666d89]">
                DEVELOPER
              </div>
            </div>
          </div>
          <div className="ml-[5rem]">
            <div className="flex mt-[3rem]">
              <div className="dmr text-[1.5rem] text-left text-[white]">
                WEB DEVELOPMENT
              </div>
            </div>
            <div className="flex mt-[1.5rem]">
              <div className="dmr text-[1.5rem] text-left text-[white]">
                2023
              </div>
            </div>
            <div className="flex mt-[1.5rem]">
              <div className="dmr text-[1.5rem] text-left text-[white]">
                TUDOR ALEXIUC
              </div>
            </div>
          </div>
        </div>
        <div className="select-none">
          <div className="mt-[5rem] flex justify-center">
            <img src={table} className="shadow-2xl select-none" />
          </div>
          <div className="mt-[5rem] flex justify-center">
            <img src={context} className="shadow-2xl" />
          </div>
          <div className="mt-[5rem] flex justify-center">
            <img src={research} className="shadow-2xl" />
          </div>
          <div className="mt-[5rem] flex justify-center">
            <img src={style} className="shadow-2xl" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Personal;

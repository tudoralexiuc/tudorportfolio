import React from 'react';
import { motion, useScroll, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  IoIosArrowRoundForward,
  IoIosArrowRoundBack,
  IoIosHome,
} from 'react-icons/io';
import checkoutpageafterchanges from '../pics/checkoutpageafterchanges.png';
import myfirstcheckoutpageshowcase from '../pics/mycheckoutpageshowcase.mkv';
import cartprototypemobile from '../pics/cartprototypemobile.png';
import cartvideo from '../pics/cartvideo.mp4';
import footerprototype from '../pics/footerprototype.jpg';
import footerprototypemobile from '../pics/footerprototypemobile.png';
import BackButton from './personal/BackButton';

import Hotjar from '@hotjar/browser';

const siteId = 5153122;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

function Tuinexpress() {
  return (
    <>
      <div className="noise"></div>
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
      <div
        className="bg-international-project h-full w-full flex flex-col p-[5rem]"
        id="start"
      >
        <BackButton />
        <motion.div
          className="flex justify-center"
          initial={{ y: '100vw' }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', duration: 2, bounce: 0.3 }}
        >
          <svg
            width="267"
            height="242"
            viewBox="0 0 67 142"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="tuinexpress">
              <path
                id="topleaf"
                d="M33.1412 2.17448C33.1412 2.73282 33.4598 5.16138 33.0552 5.48965C32.784 5.70971 32.9011 6.56124 32.759 6.88551C32.554 7.35327 32.7268 8.19614 32.4149 8.59157C31.9706 9.1549 31.2827 10.2988 31.0864 10.9956C30.8052 11.9938 30.7263 13.1893 30.0064 14.0005C29.542 14.5239 29.8726 16.5395 29.8726 17.2672C29.8726 17.7149 29.7352 18.4453 30.0064 18.7891C30.1707 18.9973 30.5308 19.7133 30.5608 19.9717C30.6524 20.7617 31.7351 22.3424 32.3671 22.841C33.2506 23.5379 33.7836 23.8103 34.9476 23.8103C36.6612 23.8103 38.064 20.6898 38.6463 19.361C39.1319 18.2529 39.1624 17.2085 39.1624 15.9586C39.1624 14.9538 39.4238 13.5277 39.1528 12.5659C38.5632 10.4728 37.0209 8.57474 36.4194 6.43961C36.2283 5.76121 35.5959 4.67575 35.1674 4.13257C34.8188 3.69063 33.7726 2 33.3133 2"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                id="rightleaf1"
                d="M52.7588 26.1896C52.5616 26.2147 51.3734 28.4358 51.3382 28.7229C51.2593 29.366 49.3884 30.6813 48.8521 30.7134C48.2304 30.7507 47.5957 31.0921 46.9974 31.2663C46.5171 31.4061 45.9635 31.539 45.4781 31.7589C45.0224 31.9653 44.2993 32.2168 43.7911 32.3319C43.2175 32.4618 42.6467 32.9967 42.104 33.0658C41.6467 33.124 41.022 33.7274 40.6045 33.9706C40.1495 34.2355 39.3534 34.4033 38.9471 34.7346C38.1845 35.3562 36.9662 35.9556 36.0663 36.3632C35.3104 36.7055 34.5607 37.9207 34.4681 38.6753C34.4153 39.1058 33.8865 39.6187 33.7677 40.0425C33.6313 40.5289 33.8282 41.4471 34.2017 41.7515C34.6697 42.133 35.0835 42.2568 35.7112 42.2944C36.0388 42.314 37.0817 42.3867 37.3982 42.5658C37.9808 42.8956 38.8489 42.506 39.4798 42.6965C40.1328 42.8937 40.8018 42.8373 41.4825 42.8373C42.7117 42.8373 43.9755 42.1582 45.113 41.651C46.1855 41.1729 46.8495 40.3527 47.8655 39.7611C49.9632 38.5396 51.045 36.2649 51.5256 34.061C51.7742 32.9211 52.2261 31.6035 52.2261 30.442C52.2261 29.3198 52.4037 27.9573 52.4037 26.7324"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                id="rightleaf2"
                d="M56.8331 45.2241C56.6946 46.441 55.5888 47.8144 54.7214 48.6616C53.7454 49.6148 52.3868 50.2326 51.0261 50.3803C50.6508 50.421 49.5126 50.8066 49.2273 51.0296C48.6679 51.4666 47.4821 51.5572 46.8028 51.8889C46.1207 52.222 45.3925 52.5002 44.6912 52.8247C44.1932 53.055 43.2664 53.5871 42.7555 53.6458C41.6074 53.7778 40.4699 54.5998 39.4121 55.059C38.2005 55.5849 37.0607 56.1066 35.8927 56.7777C34.6442 57.495 34.5061 59.0562 33.9961 60.1769C33.4048 61.4764 33.7939 62.5417 35.0128 63.137C35.7448 63.4944 35.8912 63.7862 36.7725 63.7862C37.5351 63.7862 38.2976 63.7862 39.0601 63.7862C40.3037 63.7862 42.0008 64.0566 43.1074 63.5762C43.7283 63.3067 44.4118 63.2391 45.0431 62.9651C45.5514 62.7444 46.5887 62.442 47.1547 62.4113C48.4637 62.3402 49.9176 61.5996 51.0261 60.9981C52.4935 60.2019 53.8352 59.1536 54.8583 57.9044C55.2186 57.4645 55.3518 56.444 55.6404 55.8802C55.983 55.2108 56.0483 54.4681 56.3443 53.8177C57.524 51.2252 57.009 48.454 57.009 45.7397"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                id="leftleaf2"
                d="M33.3275 56.0229C33.1643 54.7223 32.7252 53.3665 32.4412 52.0932C32.2641 51.2992 30.809 49.6559 29.9965 49.5607C29.7439 49.531 28.5682 49.1356 28.4187 48.9494C28.1457 48.6094 27.1575 48.4704 26.8408 48.0761C26.4884 47.6373 25.4999 47.5139 25.0487 47.1543C24.5086 46.7239 23.4836 46.8371 23.0228 46.378C22.6243 45.981 21.5511 45.5078 20.9677 45.3786C20.3586 45.2437 19.6878 44.8449 19.0392 44.8449C17.5518 44.8449 16.4733 43.7718 15.2699 43.1372C14.3525 42.6533 13.1597 42.1298 12.4649 41.2645C12.0876 40.7947 11.537 40.3794 11.2376 39.8575C10.6686 38.8655 10.3651 39.2674 9.93251 40.1292C9.46756 41.0556 9.29751 44.1485 10.0494 44.9808C10.4397 45.4128 10.6399 46.2995 10.887 46.8535C11.1649 47.4763 11.5968 48.0133 11.9389 48.6098C13.2621 50.9167 13.843 53.4672 16.4095 54.8877C17.7939 55.6539 19.1522 56.3057 20.5294 57.0321C21.9065 57.7584 23.4357 57.7695 25 57.7695C26.663 57.7695 28.4878 58.2493 30.0744 57.459C30.7178 57.1385 31.6098 56.833 32.1393 56.4111C32.5842 56.0564 33.3275 55.4728 33.3275 56.1976"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                id="leftleaf3"
                d="M33.3276 78.8794C33.3276 76.9085 32.5992 75.3723 32.0775 73.5589C31.6451 72.0559 30.3705 71.4938 29.1309 70.8099C28.4483 70.4333 27.6152 70.428 26.8987 70.0513C26.2438 69.707 25.4789 69.2812 24.9343 68.7704C23.4792 67.4056 21.3435 66.8494 19.5769 65.9722C18.0383 65.2082 16.1828 65.2622 14.666 64.4253C14.0744 64.0989 13.4771 63.8679 12.8802 63.5386C12.5257 63.343 12.0229 63.3798 11.7194 63.0952C11.4255 62.8195 11.314 62.4861 10.9258 62.3759C10.3854 62.2226 10.106 61.2711 9.4872 61.1345C8.82005 60.9872 8.11424 60.3864 7.7907 59.8241C7.64143 59.5647 6.71863 58.1763 6.55056 58.9275C6.38075 59.6863 6.36206 60.4389 6.36206 61.233C6.36206 61.972 6.36206 62.7109 6.36206 63.4499C6.36206 64.366 6.84844 65.2278 6.8978 66.1101C6.94248 66.9089 7.24421 67.6823 7.57243 68.4157C7.90906 69.1679 8.59318 70.4451 8.68359 71.2533C8.73404 71.7042 9.10265 72.7213 9.4872 73.0268C9.71845 73.2105 9.68565 73.7231 9.89397 73.953C10.1743 74.2623 10.3094 74.7353 10.5686 75.0663C11.377 76.0985 11.8432 77.6518 13.0687 78.3473C16.2235 80.1377 20.3789 80.1208 24.0017 80.1208C25.6817 80.1208 27.3617 80.1208 29.0417 80.1208C30.5775 80.1208 31.943 79.5151 33.3276 79.0567"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                id="leftleaf1"
                d="M31.7302 32.1668C32.064 32.7758 32.9312 33.8879 32.9312 34.5714C32.1958 34.9547 31.5047 35.5951 30.8843 36.1699L30.8722 36.1811C30.1012 36.8955 28.6794 36.8965 27.6979 36.8965C24.5141 36.8965 21.7913 36.8688 19.5476 34.3925C17.7501 32.4086 17.1465 29.9238 16.1159 27.5067C15.7302 26.6021 15.0864 25.1128 15.0864 24.1184C15.0864 23.3725 15.0881 22.7168 15.2961 22.012C15.3628 21.7863 15.8376 20.4461 15.9443 21.3363C16.0128 21.9075 17.2185 22.7439 17.6221 23.1646C18.2352 23.8036 19.2224 24.2083 19.9766 24.6451C20.8121 25.1289 21.8506 25.4548 22.4646 26.2547C22.8614 26.7718 24.3844 27.5159 25.0383 27.5961C25.9181 27.704 26.7835 28.4291 27.7837 28.4904C28.53 28.5362 29.4929 29.5232 30.2621 29.7523C30.7473 29.8968 31.5017 31.7501 31.7302 32.1668Z"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                id="Vector 249"
                d="M33.3276 23.8104V88.8449"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                id="Vector 250"
                d="M3.58618 89.2413H63.4655"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                id="Vector 251"
                d="M63.4653 89.2413C63.5149 89.5994 64.1267 90.2709 64.4633 90.4869C65.2567 90.9961 65.0178 91.9988 65.0178 92.7112C65.0178 93.8381 65.0178 94.9651 65.0178 96.092C65.0178 98.4349 65.0178 100.778 65.0178 103.121"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                id="Vector 252"
                d="M64.6553 103.121C64.6553 103.59 63.9919 104.555 63.6624 104.842C63.202 105.243 62.6461 105.461 62.1558 105.766C61.847 105.958 61.4398 105.881 61.0944 105.881C60.4882 105.881 59.8821 105.881 59.2759 105.881C57.4016 105.881 55.5273 105.881 53.653 105.881C47.7207 105.881 41.7884 105.881 35.8561 105.881C25.2317 105.881 14.6073 105.881 3.98291 105.881"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                id="Vector 253"
                d="M3.98276 105.897C3.73365 105.858 3.59243 105.433 3.4206 105.242C3.2359 105.038 2.98638 104.938 2.80526 104.738C2.5687 104.476 2.41142 104.339 2.25829 103.962C2.142 103.676 2.11019 103.392 2 103.121"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                id="Vector 254"
                d="M2 90.431V103.121"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                id="Vector 255"
                d="M2 90.431C2.30228 90.1687 2.47386 89.8653 2.89243 89.7218C3.20757 89.6138 3.66203 89.2413 3.98276 89.2413"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                id="Vector 256"
                d="M7.15527 105.896C7.15527 106.446 7.36479 107.072 7.55041 107.59C7.8547 108.439 8.02885 109.432 8.18264 110.324C8.45576 111.91 8.7065 113.502 9.05195 115.071C9.38216 116.572 10.2819 118.036 10.3164 119.601C10.3299 120.217 10.482 120.844 10.5491 121.454C10.6169 122.07 10.7401 122.672 10.9311 123.271C11.0831 123.749 11.3162 124.304 11.3438 124.805C11.3697 125.276 11.6594 125.74 11.7433 126.205C12.0189 127.736 12.0141 129.305 12.2877 130.824C12.4537 131.745 12.4206 132.857 12.8848 133.701C13.0822 134.059 13.3083 134.852 13.3195 135.256C13.3316 135.697 13.6356 136.164 13.6356 136.573C13.6356 137.139 13.8642 137.85 14.0922 138.368C14.1803 138.568 14.2965 139.185 14.5444 139.241C14.7645 139.29 15.1927 139.417 15.3566 139.582C15.9431 140.174 17.1057 139.963 17.868 139.963C19.4485 139.963 21.0291 139.963 22.6097 139.963C32.2628 139.963 41.9159 139.963 51.569 139.963"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                id="Vector 257"
                d="M51.9653 139.865C52.0162 140.274 52.8913 139.638 52.9964 139.506C53.2405 139.199 53.4704 138.847 53.6485 138.509C53.8631 138.101 54.1552 137.702 54.3446 137.273C54.6189 136.653 54.7209 136.024 54.9174 135.382C55.1139 134.739 55.2171 134.089 55.2171 133.406C55.2171 132.621 55.5343 131.864 55.5343 131.093C55.5343 130.627 55.7613 130.04 55.8912 129.57C56.0308 129.064 55.9672 128.428 56.0146 127.904C56.0697 127.294 56.1684 126.626 56.2877 126.026C56.3713 125.606 56.3444 125.115 56.5036 124.714C56.6552 124.334 56.8014 123.916 56.9002 123.518C57.0207 123.034 57.1345 122.548 57.3144 122.083C57.4826 121.648 57.4309 121.103 57.5567 120.648C57.8042 119.752 57.6557 118.785 57.8167 117.875C57.9195 117.293 57.8219 116.614 58.0326 116.063C58.3794 115.156 58.3113 114.05 58.4071 113.099C58.5177 112.001 58.7671 110.928 58.8609 109.843C58.9341 108.998 59.1412 108.023 59.4822 107.252C59.5973 106.992 59.6947 105.998 59.8964 105.896"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
            </g>
          </svg>
        </motion.div>
        <motion.div
          className="mt-[5rem] dmb text-[3.5rem] text-left text-white lg:text-5xl md:text-2xl"
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', duration: 2, bounce: 0.3 }}
        >
          TUINEXPRESS PROJECT
        </motion.div>
        <div className="flex">
          <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', duration: 1, bounce: 0.5 }}
          >
            <div className="flex mt-[3rem]">
              <div className="dmb text-[1.5rem] text-left text-[white] lg:text-3xl md:text-base">
                CATEGORY
              </div>
            </div>
            <div className="flex mt-[1.5rem]">
              <div className="dmb text-[1.5rem] text-left text-[white] lg:text-3xl md:text-base">
                YEAR
              </div>
            </div>
            <div className="flex mt-[1.5rem]">
              <div className="dmb text-[1.5rem] text-left text-[white] lg:text-3xl md:text-base">
                CLIENT
              </div>
            </div>
          </motion.div>
          <motion.div
            className="ml-[5rem]"
            initial={{ x: '-50vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', duration: 2, bounce: 0.3 }}
          >
            <div className="flex mt-[3rem]">
              <div className="dmr text-[1.5rem] text-left text-[#BE7536] lg:text-3xl md:text-base">
                WEB DEVELOPMENT
              </div>
            </div>
            <div className="flex mt-[1.5rem]">
              <div className="dmr text-[1.5rem] text-left text-[#BE7536] lg:text-3xl md:text-base">
                2022
              </div>
            </div>
            <div className="flex mt-[1.5rem]">
              <div className="dmr text-[1.5rem] text-left text-[#BE7536] lg:text-3xl md:text-base">
                TUINEXPRESS
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col items-center">
          <motion.div
            className="mt-[4rem] dmb text-[1.5rem] text-left text-[white]"
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', duration: 2.5, bounce: 0.3 }}
          >
            CHECKOUT
          </motion.div>
          <motion.div
            className="mt-[2rem] w-[900px] lg:w-[700px] md:w-[450px]"
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', duration: 2.5, bounce: 0.3 }}
          >
            <img src={checkoutpageafterchanges} className="shadow-2xl" />
          </motion.div>
          <motion.video
            autoPlay
            loop
            muted
            playsInline
            className="mt-[5rem] w-[900px] shadow-2xl lg:w-[700px] md:w-[500px]"
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', duration: 2, bounce: 0.2 }}
          >
            <source src={myfirstcheckoutpageshowcase}></source>
          </motion.video>
          <div className="mt-[10rem] dmb text-[1.5rem] text-left text-[white]">
            CART
          </div>
          <div className="mt-[2rem] w-[300px]">
            <img src={cartprototypemobile} className="shadow-2xl" />
          </div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="mt-[5rem] w-[900px] shadow-2xl lg:w-[700px] md:w-[500px]"
          >
            <source src={cartvideo}></source>
          </video>
          <div className="mt-[10rem] dmb text-[1.5rem] text-left text-[white]">
            FOOTER
          </div>
          <div className="mt-[2rem] w-[900px] lg:w-[700px] md:w-[450px]">
            <img src={footerprototype} className="shadow-2xl" />
          </div>
          <div className="mt-[5rem] w-[300px]">
            <img src={footerprototypemobile} className="shadow-2xl" />
          </div>
          <div className="mt-[10rem] dmb text-[1.5rem] text-left text-[white] cursor-pointer hover:text-[#dbdbdb]">
            <a
              target="_blank"
              href="https://internship-portfolio-wheat.vercel.app/"
            >
              <div className="flex">
                <div id="l1">V</div>
                <div id="l2">I</div>
                <div id="l3">E</div>
                <div id="l4">W</div>
                <div id="l5">T</div>
                <div id="l6">H</div>
                <div id="l7">E</div>
                <div id="l8">E</div>
                <div id="l9">N</div>
                <div id="l10">T</div>
                <div id="l11">I</div>
                <div id="l12">R</div>
                <div id="l13">E</div>
                <div id="l14">P</div>
                <div id="l15">R</div>
                <div id="l16">O</div>
                <div id="l17">J</div>
                <div id="l18">E</div>
                <div id="l19">C</div>
                <div id="l20">T</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tuinexpress;

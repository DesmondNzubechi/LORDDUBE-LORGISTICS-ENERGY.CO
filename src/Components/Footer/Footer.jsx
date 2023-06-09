import {React, useEffect} from "react";
import { GoLocation } from 'react-icons/go';
import { AiOutlineMail, AiFillLinkedin, AiFillInstagram, AiOutlineGithub, AiTwotoneHeart } from 'react-icons/ai';
import { FiPhoneCall, FiExternalLink } from 'react-icons/fi';
import { RiWhatsappFill } from 'react-icons/ri';
import { TfiWorld } from 'react-icons/tfi';
import { BsTwitter } from 'react-icons/bs';
import { BiLink } from 'react-icons/bi';
import { Link } from "react-router-dom";
import logo from '../../Images/logo.png';
import Aos from "aos";
import "aos/dist/aos.css";


export const Footer = () => {

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

    return (
        <footer  className="bg-slate-900 p-5">
            <div className="flex flex-col items-start md:flex-row gap-2 justify-between">
            <div className="flex flex-col md:items-end md:flex-row gap-2">
              <div className=" rounded max-w-[150px] " >
              <img src={logo} alt="" className=" rounded " srcset="" />
              </div>
              <div>
         <p className="text-slate-200 text-[12px] pt-[20px] max-w-[400px]">Our team of experts is comprised of seasoned professionals with extensive knowledge and experience in the oil and gas sector. They are always ready to assist you in finding the right tools for your specific needs. Whether you require advice on selecting the ideal equipment, assistance with technical specifications, or guidance on industry best practices, our knowledgeable staff is here to support you every step of the way.

         {/*
              <div>
                <h1 className="text-20px font-semibold mt-[15px] mb-[10px] text-white">Connect with the developer</h1>
                <div className="flex flex-row gap-5 mb-[20px]">
                  <a href="https://www.linkedin.com/in/desmond.nzubechukwu-38895422" className="text-[20px] hover:bg-slate-200 shadow-xl p-1 bg-white text-slate-900 rounded-full"><AiFillLinkedin /></a> 
                  <a href="https://www.twitter.com/nzubechukwu101" className="text-[20px] shadow-xl p-1 bg-white text-slate-900 rounded-full"> < BsTwitter /></a>
                   <a href="https://wa.me/2347084183611?text=Hello,%20Nzubechukwu(B2R)%20My%20name%20is%20.....%20I%20got%20Your%20Contact%20From%20A%20Website%20that%20you%20built%20AirtimeSeller" className="text-[20px] shadow-xl p-1 bg-white text-slate-900 rounded-full"><RiWhatsappFill /></a>
               <a href="https://www.github.com/DesmondNzubechi" className="text-[20px] shadow-xl p-1 bg-white text-slate-900 rounded-full"><AiOutlineGithub /></a>
               <a href="https://nzubechukwu.com" className="text-[20px] shadow-xl p-1 bg-white text-slate-900 rounded-full"><FiExternalLink /></a>
                
                </div>
                </div>*/}
             </p>
             </div>
         </div>
                <div className="flex flex-col gap-2">
       <h1 className="text-slate-100 font-bold text-[25px]">Contact In<span className="">fomation</span></h1>
         <p className="flex flex-row items-center gap-3 my-2"><span className=" p-2 rounded-full font-bold"><GoLocation className="text-[25px] text-slate-50  " /></span> <span className="text-slate-300 text-[15px] ">132/144 ABA express way Porthacourt Nigeria</span></p>
         <p><a href="tel:+2347068622370" className="flex flex-row items-center gap-3 my-2"><span className=" p-2 rounded-full text-slate-50 font-bold"><FiPhoneCall className="text-[25px]  "/></span> <span className="text-slate-300 text-[15px] ">+234 706 8622 370</span></a></p>
         <p><a href="mailto:lorddube@gmail.com" className="flex flex-row items-center gap-3 my-2"><span className=" p-2 rounded-full font-bold"><AiOutlineMail className="text-[25px] text-slate-50  "/></span> <span className="text-slate-300 text-[15px] ">lorddube@gmail.com</span></a></p>
       </div>
<div className="flex flex-col gap-2">
    <h1 className="text-slate-100 font-bold text-[25px]">Important Links</h1>
    <div className="flex flex-col gap-1">
<Link to='/' className="text-slate-300 text-[20px] flex flex-row items-center hover:text-slate-500 active:text-sky-500 gap-2"><BiLink /> Home</Link>
<Link to='/about' className="text-slate-300 text-[20px] flex flex-row items-center gap-2 hover:text-slate-500 active:text-sky-500"><BiLink /> About Us</Link>
<Link  to='/Contact' className="text-slate-300 text-[20px] flex flex-row items-center gap-2 hover:text-slate-500 active:text-sky-500"><BiLink />Contact Us</Link>
<Link  to='/products' className="text-slate-300 text-[20px] flex flex-row items-center gap-2 hover:text-slate-500 active:text-sky-500"><BiLink />Our Products</Link>
<Link  to='/service' className="text-slate-300 text-[20px] flex flex-row items-center gap-2 hover:text-slate-500 active:text-sky-500"><BiLink />Our Services</Link>
    </div>
</div>
<div>
</div>
       </div>
       <br />
       <hr />
      
          <div className="flex md:flex-row flex-col gap-3 items-center justify-around mt-[20px]">
       {    <p className="flex flex-row items-center gap-1 text-slate-400 text-[12] md:text-[18px]">Website built by <a className="uppercase font-bold text-slate-500 " href="https://nzubechukwu.com">Nzubechukwu-Tech</a> </p>}
            <p className="md:text-[20px] text-[15px] text-slate-50">&copy; Lorddube Logistics Energy.Co 2023</p>
          </div>
        </footer>
    )
}
"use client";

import { useState } from "react";
import Image from "next/image";

export default function Walkthrough() {
 const [videoSrc, setVideoSrc] = useState("");

 const openVideo = () => {
  setVideoSrc("https://www.youtube.com/embed/GRvDsxBJMwQ?autoplay=1");
 };

 const closeVideo = () => {
  setVideoSrc("");
 };

 return (
  <section style={{ backgroundColor: "#FEFEFE" }} id="Walkthrough" className="section">
   <div className="container ">
    <div className="row justify-content-center text-center">
     <div className=" text-center">
      <h2
       className="text-capitalize "

      >

       Walkthrough 
      </h2>
     </div>
     <div className="col-md-12">


      {/* Thumbnail Image */}
      <div className="walkthrough-section text-center">
       <Image
        src="https://img.youtube.com/vi/GRvDsxBJMwQ/maxresdefault.jpg"
        alt="Walkthrough Thumbnail"
        width={1293}
        height={727}
        style={{ maxWidth: "100%", cursor: "pointer" }}
        data-bs-toggle="modal"
        data-bs-target="#videoModal"
        onClick={openVideo}
        className="img-fluid rounded"
       />
      </div>
     </div>
    </div>
   </div>

   {/* Bootstrap Modal */}
   <div
    className="modal fade"
    id="videoModal"
    tabIndex={-1}
    aria-hidden="true"
    onClick={closeVideo}
   >
    <div className="modal-dialog modal-dialog-centered modal-lg">
     <div className="modal-content bg-black">
      <div className="modal-body p-0">
       {videoSrc && (
        <iframe
         id="walkthroughVideo"
         width="100%"
         height="450"
         src={videoSrc}
         title="Walkthrough Video"
         frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowFullScreen
        ></iframe>
       )}
      </div>
      <button
       type="button"
       className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
       data-bs-dismiss="modal"
       aria-label="Close"
       onClick={closeVideo}
      ></button>
     </div>
    </div>
   </div>
  </section>
 );
}

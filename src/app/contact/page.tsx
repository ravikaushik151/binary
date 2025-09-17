import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <>
      <div id="carouselExampleDark" className="header-section">
        <div className='row'>
          <div className='col-md-12'>
            <div className="image-container">
              <Image src="/img/banner (1).png" height={2880} width={1920} className='img-fluid masterpiece rounded-4' alt="masterpiece" />
              <div className="overlay2 ">
                <div className="text-white d-block"> <p className="text-center d-block fs-1 mb-0 text-uppercase"> Contact Us</p>
                  <p className="text-center d-block fs-6 "><Link className="text-white text-decoration-none" href={'./'}> Home</Link> / Contact Us </p>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>

      <section className="section-padding bg-white " id="">
        <div className="container bg-light px-4 px-3 px-md-5 py-md-5">
          <div className='row  '>
            <div className="col-md-12 d-block mx-auto ">
              <div className="heading ">
                <h2 className="text-center">
                  Contact Us
                </h2>

              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-10 d-block mx-auto">
              <div className="row">
                <div className="col-md-7">
                  <div className="contact_form_inner px-md-5 px-3">
                    <div className="contact_field">

                      <p className="text-main">
                        Feel Free to contact us any time. We will get back to you as soon as we can!.
                      </p>
                      <form id="contact-form">
                        <input
                          type="text"
                          className={`form-control form-group mb-3`}
                          placeholder="Name"

                        />


                        <input
                          type="email"
                          className={`form-control form-group mb-3 `}
                          placeholder="Email"

                        />


                        <input
                          type="tel"
                          className={`form-control form-group mb-3 `}
                          placeholder="Mobile"

                        />


                        <textarea
                          className={`form-control form-group mb-3`}
                          placeholder="Message"

                        />
                        <div className="text-center">
                          <button className="contact_form_submit mb-3 btn text-bg-dark " id="contact-button ">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-5  ">
                  <div className="contact_info_sec text-bg-dark px-md-5 py-md-5 px-4 py-4  text-white shadow">
                    <h4 className="text-white mb-3">Contact Info</h4>
                    <div className="d-flex info_single align-items-center text-white pb-2">
                      <a href="tel:+911234567890" className='text-white text-decoration-none'>
                      <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "24px", height: "24px" }} className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 640 640"><path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z" /></svg>
                                     
                        <span> (+91) 96112 11255</span></a>
                    </div>
                    <div className="d-flex info_single align-items-center text-white pb-2">
                      <a href="mailto:abc@gmail.com" className='text-white text-decoration-none'>
                      <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "24px", height: "24px" }} className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 640 640"><path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z" /></svg>   
                        <span> sales@binaryrealty.in </span> </a>
                    </div>
                    <div className="d-flex info_single text-white  pb-2">
                      <i className="fas fa-map-marked-alt text-white mt-1"></i>
                      <span>
                        <strong className="mb-3 mt-3"> EARA GROUP</strong>
                        <br />
                        <br />
                        Sy no. 110/1B Hosahalli road,<br /> Sree Narayana Nagar,<br /> Chikkadunnasandra
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  );
}
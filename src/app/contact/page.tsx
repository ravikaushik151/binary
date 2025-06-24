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
                        <i className="fas fa-headset"></i>
                        <span> +91 1234567890</span></a>
                    </div>
                    <div className="d-flex info_single align-items-center text-white pb-2">
                      <a href="mailto:abc@gmail.com" className='text-white text-decoration-none'>
                        <i className="fas fa-envelope-open-text"></i>
                        <span> ac@gmail.com </span> </a>
                    </div>
                    <div className="d-flex info_single text-white  pb-2">
                      <i className="fas fa-map-marked-alt text-white mt-1"></i>
                      <span>
                        <strong className="mb-3 mt-3"> EARA GROUP</strong>
                        <br />
                        <br />
                        123 Dream Street, Cityname - 505050, Country
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
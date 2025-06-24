"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Career() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    phone: "",
    post1: "Sales Manager",
    experience: "Fresher",
    msg: "",
    fileatt: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        body: form,
      });

      const result = await response.json();
      alert(result.message || "Form submitted successfully!");
    } catch (err) {
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <>
      <div id="carouselExampleDark" className="header-section">
        <div className="row">
          <div className="col-md-12">
            <div className="image-container">
              <Image
                src="/img/banner (1).png"
                height={2880}
                width={1920}
                className="img-fluid masterpiece rounded-4"
                alt="masterpiece"
              />
              <div className="overlay2 ">
                <div className="text-white d-block">
                  {" "}
                  <p className="text-center d-block fs-1 mb-0 text-uppercase">
                    {" "}
                    Career
                  </p>
                  <p className="text-center d-block fs-6 ">
                    <Link
                      className="text-white text-decoration-none"
                      href={"./"}
                    >
                      {" "}
                      Home
                    </Link>{" "}
                    / Career{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Careers – Explore Our Job Opportunities</h2>
          </div>

          <div className="row">
            {/* Accordion Section */}
            <div className="col-lg-6">
              <div className="accordion" id="jobAccordion">
                {[
                  {
                    title: "Sales Executive",
                    content: (
                      <>
                        <p>
                          Dynamic and highly energetic individuals needed...
                        </p>
                        <p>
                          Experience: 0-3 years
                          <br />
                          Education: Graduate
                          <br />
                          Collect data and update
                          laoreet tristique. fringilla. dolor nibh ullamcorper sit tristique. lacinia. ipsum nisi ullamcorper dolor, tristique. a vel quis non lacinia. nibh vel dignissim aliquet lacinia libero nibh at Donec dolor,
                          laoreet tristique. fringilla. dolor nibh ullamcorper sit tristique.
                        </p>
                      </>
                    ),
                  },
                  {
                    title: "Project Manager",
                    content: (
                      <>
                        <p>Responsible for planning, coordinating...</p>
                        <p>
                          <strong>Key Responsibilities:</strong>
                          <br />
                          1. Project Planning...
                        </p>
                      </>
                    ),
                  },
                  {
                    title: "Lead Architect",
                    content: (
                      <>
                        <p>Oversees design, planning, and execution...</p>
                        <p>
                          <strong>Qualifications:</strong>
                          <br /> Bachelor’s/Master’s in Architecture...
                        </p>
                      </>
                    ),
                  },
                  {
                    title: "Brand Manager",
                    content: (
                      <>
                        <p>Develop strategic marketing plans...</p>
                        <p>
                          Experience: 3–7 years
                          <br />
                          Education: PG
                          <br />
                          Location: Corporate Office
                        </p>
                      </>
                    ),
                  },
                ].map((job, index) => (
                  <div className="accordion-item" key={index}>
                    <h5 className="accordion-header ">
                      <button
                        className={`accordion-button text-dark fs-6 fw-bold ${index !== 0 ? "collapsed" : ""
                          }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded={index === 0 ? "true" : "false"}
                        aria-controls={`collapse${index}`}
                      >
                        {job.title}
                      </button>
                    </h5>
                    <div
                      id={`collapse${index}`}
                      className={`accordion-collapse collapse ${index === 0 ? "show" : ""
                        }`}
                      data-bs-parent="#jobAccordion"
                    >
                      <div className="accordion-body">{job.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Form */}
            <div className="col-lg-6 bg-white">
              <div className="px-3 px-md-4  py-4">
                <h5
                  className="text-uppercase mb-4"
                  style={{ color: "#1d577d" }}
                >
                  APPLY FOR YOUR JOB
                </h5>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className="row">
                    {[
                      ["name", "Name", "text", "Name"],
                      ["email", "Email address", "email", "Email"],
                      ["city", "City", "text", "City"],
                      ["phone", "Phone Number", "text", "Mobile No."],
                    ].map(([name, label, type, placeholder]) => (
                      <div className="form-group col-md-6" key={name}>
                        <label className="d-none" htmlFor={name}>
                          {label}
                        </label>
                        <input
                          type={type}
                          className="form-control mb-3 py-2"
                          name={name}
                          onChange={handleChange}
                          required
                          placeholder={placeholder}
                        />
                      </div>
                    ))}

                    <div className="form-group col-md-6">
                      <label className="d-none">Apply for:</label>
                      <select
                        name="post1"
                        className="form-control mb-3 py-2"
                        onChange={handleChange}
                      >
                        <option value="Sales Manager">Sales Manager</option>
                        <option value="Project Manager">Project Manager</option>
                        <option value="Lead Architect">Lead Architect</option>
                        <option value="Brand Manager">Brand Manager</option>
                      </select>
                    </div>

                    <div className="form-group col-md-6">
                      <label className="d-none">Experience:</label>
                      <select
                        name="experience"
                        className="form-control mb-3 py-2"
                        onChange={handleChange}
                      >
                        <option value="Fresher">Fresher</option>
                        <option value="1-2 Years">1-2 Years</option>
                        <option value="2-5 Years">2-5 Years</option>
                        <option value="5-7 Years">5-7 Years</option>
                        <option value="7-10 Years">7-10 Years</option>
                      </select>
                    </div>

                    <div className="form-group col-md-12">
                      <label className="d-none">Message:</label>
                      <textarea
                        name="msg"
                        className="form-control mb-3 py-2"
                        onChange={handleChange}
                        required
                        placeholder="Message"
                      ></textarea>
                    </div>

                    <div className="form-group col-md-12">
                      <label className="d-none">Resume:</label>
                      <input
                        type="file"
                        name="fileatt"
                        className="form-control mb-3 py-2"
                        accept=".pdf,.doc,.docx"
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="text-center form-group col-md-12">
                      <button
                        type="submit"
                        className="btn btn-primary py-2 px-4 mt-2"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

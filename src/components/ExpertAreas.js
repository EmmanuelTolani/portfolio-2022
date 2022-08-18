import { Fragment, useEffect, useState } from "react";
import { filter_hashtag } from "../utilits";
import Counter from "./Counter";

const counts = [
  { name: "Hours training", value: 1000 },
  // { name: "Written Book", value: 48 },
  // { name: "Listeners", value: 527 },
  { name: "Side Projects", value: 12 },
];

const skills = [
  { name: "HTML", icon: "img/svg/html5-brands.svg" },
  { name: "Javascript", icon: "img/svg/js-brands.svg" },
  { name: "CSS", icon: "img/svg/css3-brands.svg" },
  { name: "Git", icon: "img/svg/git-alt-brands.svg" },
  { name: "MySQL", icon: "img/svg/database-solid.svg" },
  { name: "PHP", icon: "img/svg/php-brands.svg" },
];

const experiences = [
  {
    company: "Luau Data Corp",
    designation: "Software Engineer",
    time: "2021 - Present",
  },
  {
    company: "Freelance",
    designation: "Web Developer",
    time: "2020 - present",
  },
];

const educations = [
  {
    institution: "University of Saskatchewan",
    certificate: "Computer Science",
    time: "2021",
  },
  {
    institution: "Coding Phase",
    certificate: "Full Stack & Front End Developer",
    time: "2020 - 2022",
  },
];

const ExpertAreas = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeContentTab = (value) => (activeTab == value ? "current" : "");

  useEffect(() => {
    filter_hashtag();
  }, [activeTab]);

  return (
    <Fragment>
      <div className="orido_tm_section">
        <div className="orido_tm_informations">
          <div className="container">
            <div className="informations_inner">
              <div className="left">
                <div className="orido_tm_main_title">
                  <h3>
                    <span>
                      My Background
                      <br />
                      areas
                    </span>
                  </h3>
                </div>
                <div className="text">
                  <p>
                    I do full-stack development. At LDC I worked on developing an application that enables quick and easy setup for our solar-powered security products.
                  </p>
                  <p>
                  My background is in Computer Science and I have done hundreds of hours of self-directed learning with platforms like Udemy, Coding Phase, and Freecode camp.
                  </p>
                </div>
                <div className="orido_tm_boxed_button">
                  <a href="img/Emmanuel-Tolani.pdf" target={"_blank"} download>
                    My Resume{" "}
                    <img className="svg" src="img/svg/paper.svg" alt="" />
                  </a>
                </div>
              </div>
              <div className="right">
                <div className="filter">
                  <ul>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(1)}`}
                        onClick={() => setActiveTab(1)}
                        data-tab="tab_1"
                      >
                        <span>Skills</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(2)}`}
                        onClick={() => setActiveTab(2)}
                        data-tab="tab_2"
                      >
                        <span>Experience</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(3)}`}
                        onClick={() => setActiveTab(3)}
                        data-tab="tab_3"
                      >
                        <span>Education</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                  <span className="ccc" />
                </div>
                <div className="content">
                  <div id="tab_1" className={`wrapper ${activeContentTab(1)}`}>
                    <div className="skillbox">
                      <ul>
                        {skills.map((skill, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <span className="icon">
                                <span className="in">
                                  <img
                                    className="svg"
                                    src={skill.icon}
                                    alt=""
                                  />
                                </span>
                              </span>
                              <p className="name">
                                {skill.name}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div id="tab_2" className={`wrapper ${activeContentTab(2)}`}>
                    <div className="timelinebox">
                      <ul>
                        {experiences.map((experience, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <div className="time">
                                <span className="year">{experience.time}</span>
                                <span className="company">
                                  {experience.company}
                                </span>
                              </div>
                              <div className="job">
                                <h3>
                                  <span>{experience.designation}</span>
                                </h3>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div id="tab_3" className={`wrapper ${activeContentTab(3)}`}>
                    <div className="timelinebox">
                      <ul>
                        {educations.map((education, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <div className="time">
                                <span className="year">{education.time}</span>
                                <span className="company">
                                  {education.institution}
                                </span>
                              </div>
                              <div className="job">
                                <h3>
                                  <span>{education.certificate}</span>
                                </h3>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /INFORMATIONS */}
      {/* COUNTER */}
      <div className="orido_tm_section">
        <div className="orido_tm_counter">
          <div className="container">
            <div className="counter_list">
              <ul>
                {counts.map((count, i) => (
                  <li key={i}>
                    <div className="list_inner">
                      <h3>
                        <Counter end={count.value} />
                      </h3>
                      <span className="title">{count.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ExpertAreas;

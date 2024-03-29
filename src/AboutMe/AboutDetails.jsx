import React, { useEffect } from "react";
import "../Header/Header.scss";
import WOW from "wow.js";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


function AboutDetails() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <>
      <Header />
      <div className="section" id="aboutsection">
        <div
          className="py-10 px-5 lg:mx-12"
          style={{ textAlign: "justify", textJustify: "auto" }}
        >
          <div className="text-center text-5xl text-blue-800 text-black font-extrabold wow fadeInUp">
            ABOUT
          </div>
          <div className="text-left text-3xl text-black font-extrabold mt-10">
            About SRM Faculty of Science and Humanities
          </div>
          <p className="text-base text-gray-500 mt-4 wow fadeInUp">
            SRM Faculty of Science and Humanities(formerly known as SRM
            University) is one of the top ranking Universities and most premier
            engineering destinations in India, which was established in 1985 by
            the Founder Chancellor, Dr. T.R. Paarivendhar, SRM Faculty of Science and Humanities and now it is functioning in five campuses
            located at Kattankulathur, Vadapalani and Ramapuram in Tamil Nadu ,
            the fourth campus at Modi Nagar, Ghaziabad and the fifth campus at
            Amaravathi, Andhra Pradesh with over 38,000 students and 2,600
            facultymembers.
          </p>
          {/* <p className="text-base text-gray-500 mt-4 wow fadeInUp">
            Essentially a hub of bustling student activities, the green and
            beautiful campus has been a second-home to thousands of students in
            their journey to pursue higher education. The Institution has moved
            up through international alliances and collaborative initiatives to
            achieve global excellence. SRM Institute of Science and Technology's
            International Advisory Board (IAB) is actively involved in building
            a stronger international dimension in research and teaching
            methodology, which creates avenues for research and successful
            careers. The SRM Institute of Science and Technology also
            collaborates with foreign Universities like MIT, Carnegie Mellon
            University (CMU), Pittsburg University etc. offering a postgraduate
            academic program MSIT-ESE. Over 150 students sponsored to 35 foreign
            Universities like MIT, Carnegie Mellon, UC Davis, Warwick and
            Western Australia.
          </p> */}
          <div className="text-left text-3xl text-black font-extrabold mt-5 wow fadeInUp">
            Our Campus
          </div>
          <p className="text-base text-gray-500 mt-4 wow fadeInUp">
            City Campus of SRM Faculty of Science and Humanities (formerly
            known as SRM University) is located in a sprawling campus of more
            than 5 acres and located at the heart of the metropolitan city of
            Chennai. It is well connected by road, rail and air. Apart from the
            public transport, Faculty buses are also available for transporting
            the staff and students from various places of the city. The campus
            hosts well planned,
            <li>Academic blocks</li>
            <li>Computer Centre</li>
            <li>Lecture Hall</li>
            <li>Library</li>
            <li>Laboratories</li>
            <li>Conference Halls</li>
            <li>Canteen</li>
            Campus is enabled with Wi Fi facility. All class rooms are equipped
            with centralized Air conditioning, LCD projectors, and ergonomic
            designed sitting tables for students. Campus has the corporate
            ambience.
          </p>
          <div className="text-black text-xl font-semibold mt-5 wow fadeInUp">
            Vision
          </div>
          <p className="text-base text-gray-500 mt-4 wow fadeInUp">
            To emerge as a world class University in creating and disseminating
            knowledge and providing students a unique learning experience in
            science, technology, medicine, management and other areas of
            scholarship that will best serve the world and betterment of
            mankind.
          </p>
          <div className="text-black text-xl font-semibold mt-5 wow fadeInUp">
            Mission
          </div>
          <p className="text-base text-gray-500 mt-4 wow fadeInUp">
            <li>
              MOVE UP through international alliances and collaborative
              initiatives to achieve global excellence.
            </li>
            <li>
              ACCOMPLISH A PROCESS to advance knowledge in a rigorous academic
              and research environment.
            </li>
            <li>
              ATTRACT AND BUILD PEOPLE in a rewarding and inspiring environment
              by fostering freedom, empowerment, creativity and innovation.
            </li>
          </p>
          
          <div className="text-black text-xl font-semibold mt-5 wow fadeInUp">
            About the Department
          </div>
          <p
            className="text-base text-gray-500 mt-4"
            style={{ textAlign: "justify", textJustify: "auto" }}
          >
            The Faculty of Science and Humanities, SRM Institute of Science and Technology, Vadapalani City Campus. Situated in the heart of
            Chennai, Faculty of Science and Humanities, a constituent of SRM
            Institute of science and technology Vadapalani city campus has
            carved a niche for itself among the academic fraternity with great
            accolades and provides an ideal ambience for the development and
            growth of its students. It reflects in the verve of the innovative
            teaching – learning strategies adopted by Faculty members and paves
            way for the learner to explore himself to match up with the
            standards of the global education. Our institution focuses on the
            holistic development of the students with the
            intellectually-inspired learning which drives theory erudition and
            realistic approach that is essential to meet the challenges in every
            walk of life. The strength of the institution lies in the relentless
            quest to shape the students as independent learners adopting the
            best practices by expanding the horizons of technology. The main
            objective of the Faculty is to ensconce the learning environment
            which makes the learners to build a future that encompasses the
            traditional roots and Indian culture. Over the years, the
            institution has witnessed a tremendous increase in the admission
            status attracting students from all over the country. The faculty
            also ensures in developing socially responsible nation builders as
            value-based education is imparted without compromising on high
            standards .Every passing batch has left a legacy for the future
            generations to follow.
          </p>
          <div className="text-black text-xl font-semibold mt-5 wow fadeInUp">
           Objectives
          </div>
          <p className="text-base text-gray-500 mt-4 wow fadeInUp">
            <li>
            To advance, evolve and enhance Computer Science fundamentals
            </li>
            <li>
            To build the interest in students for greater research
            </li>
            <li>
            To guide students in the development of newer languages
            </li>
            <li>
            To create the ability in students for better hardware production
            </li>
          </p>
          <p className="text-base text-gray-500 mt-4 wow fadeInUp">
            At SRM Institute of Science and Technology (formerly known as SRM
            University), the teaching environment is one that emphasizes depth,
            originality and critical thinking. The department also promotes
            innovative research and education programs in core computer science
            as well as multidisciplinary application areas. Upon graduation, our
            students will be able to perform research in all branches of the
            computing field.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AboutDetails;

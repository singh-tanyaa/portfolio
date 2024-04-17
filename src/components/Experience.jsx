import React from "react";
import experience from "./data/experience.json";

const Experience = () => {
  return (
    <div className="container ex" id="experience">
      <h1>EXPERIENCE</h1>
      {experience.map((data) => (
        <div
          key={data.id}
          className="ex-items text-center my-5"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="left">
            <img src={`/assets/${data.imageSrc}`} alt="" />
          </div>
          <div className="right">
            <h2>{data.role}</h2>
            <h4>
              <span style={{ color: "yellowgreen" }}>
                {data.startDate} {data.endDate}{" "}
              </span>{" "}
              <span style={{ color: "yellow" }}>{data.location}</span>
            </h4>
            {/* Check if experiences array exists and has elements */}
            {data.experiences && data.experiences.length > 0 && (
              <h5 style={{ color: "yellow" }}>{data.experiences[0]}</h5>
            )}
            {/* Check if there are at least two elements in experiences array */}
            {data.experiences && data.experiences.length > 1 && (
              <h5 style={{ color: "yellow" }}>{data.experiences[1]}</h5>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;

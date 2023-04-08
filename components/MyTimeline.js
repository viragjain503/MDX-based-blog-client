import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BsLaptop } from "react-icons/bs";
import { BsBook } from "react-icons/bs";

export default function MyTimeline() {
  return (
    <>
      <VerticalTimeline lineColor={ 'black' }
>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255,142,83)" }}
          date="2023 - present"
          iconStyle={{ background: "rgb(255,142,83)", color: "#fff" }}
          icon={<BsLaptop />}
        >
          <h3 className="vertical-timeline-element-title">Associate Consultant</h3>
          <h4 className="vertical-timeline-element-subtitle">Mumbai, Oracle</h4>
          <p>
            Java, EclipseLink, Knockout, OJET
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255,142,83)" }}
          date="2018 - 2022"
          iconStyle={{ background: "rgb(255,142,83)", color: "#fff" }}
          icon={<BsBook />}
        >
          <h3 className="vertical-timeline-element-title">B.Tech Information Technology</h3>
          <h4 className="vertical-timeline-element-subtitle">
          KJSCE, Mumbai
          </h4>
          <p>
            CGPA - 8.5/10
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255,142,83)" }}
          date="2021 - 2022"
          iconStyle={{ background: "rgb(255,142,83)", color: "#fff" }}
          icon={<BsLaptop />}
        >
          <h3 className="vertical-timeline-element-title">Backend and Cloud Technologies Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Digiliyo Technologies, Mumbai
          </h4>
          <p>AWS, LAMP Stack</p>
        </VerticalTimelineElement>
        
      </VerticalTimeline>
    </>
  );
}

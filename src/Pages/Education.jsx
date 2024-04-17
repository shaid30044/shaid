import { useEffect, useRef, useState } from "react";
import TimelineObserver from "react-timeline-animation";
import "./styles.css";
import Title from "../Components/Title";
import Message1 from "../Components/EducationalMessages/Message1";
import Message2 from "../Components/EducationalMessages/Message2";
import Message3 from "../Components/EducationalMessages/Message3";
import PropTypes from "prop-types";

const Timeline = ({ setObserver }) => {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);

  useEffect(() => {
    const someCallback = () => {
      setMessage1(<Message1 />);
    };

    const someCallback2 = () => {
      setMessage2(<Message2 />);
    };

    const someCallback3 = () => {
      setMessage3(<Message3 />);
    };

    setObserver(timeline1.current, someCallback);
    setObserver(timeline2.current, someCallback2);
    setObserver(timeline3.current, someCallback3);
    setObserver(circle1.current);
    setObserver(circle2.current);
    setObserver(circle3.current);
  }, []);

  return (
    <div className="wrapper">
      <div id="timeline1" ref={timeline1} className="timeline" />
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle" />

        <div className="message">{message1}</div>
      </div>

      <div id="timeline2" ref={timeline2} className="timeline" />
      <div className="circleWrapper">
        <div id="circle2" ref={circle2} className="circle" />

        <div className="message">{message2}</div>
      </div>

      <div id="timeline3" ref={timeline3} className="timeline" />
      <div className="circleWrapper">
        <div id="circle3" ref={circle3} className="circle" />

        <div className="message">{message3}</div>
      </div>
    </div>
  );
};

Timeline.propTypes = {
  setObserver: PropTypes.func.isRequired,
};

export default function App() {
  const [message, setMessage] = useState("");

  return (
    <div className="App ml-10 md:ml-20 lg:ml-32 xl:ml-60 mt-40">
      <div className="text-start -ml-10 md:-ml-20 lg:-ml-32 xl:-ml-60 mb-10 md:mb-20 xl:mb-24">
        <Title title={"< Academic Adventures />"} />
      </div>

      <TimelineObserver
        initialColor="#e5e5e5"
        fillColor="black"
        handleObserve={(setObserver) => (
          <Timeline className="timeline" setObserver={setObserver} />
        )}
      />
      <div className="stub2">{message}</div>
    </div>
  );
}

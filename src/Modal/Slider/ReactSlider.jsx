import React, { useRef, useEffect } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { Slider, Rail, Handles, Tracks } from "react-compound-slider";
import "./Slider.scss";

function ReactSlider({ startTime, endTime, update, day }) {
  const todayDate = moment().format("YYYY-MM-DD");
  const timeNow = useRef(new Date());
  const sevenAM = 420;
  const sevenPM = 1140;
  let valueStart = useRef();
  let valueEnd = useRef();

  function calcStartTime() {
    const endTimes = day[todayDate].map((item) => {
      return item.ended;
    });
    return Math.max(...endTimes);
  }

  const sliderStart = calcStartTime();

  let sliderEnd = timeToMinute(
    `${timeNow.current
      .getHours()
      .toString()
      .padStart(2, "0")}:${timeNow.current.getMinutes()}`
  );

  function minuteToHour(value) {
    let hours = Math.floor(value / 60)
      .toString()
      .padStart(2, "0");
    let minutes = (value - hours * 60).toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  function timeToMinute(time) {
    let minute = +time.slice(3);
    return parseInt(time) * 60 + minute;
  }

  let startTimeMin = timeToMinute(startTime);
  let endTimeMin = timeToMinute(endTime);

  return (
    <Slider
      className="sliderStyle"
      domain={[
        isFinite(sliderStart) ? sliderStart : sevenAM,
        sliderEnd > sevenPM ? sevenPM : sliderEnd,
      ]}
      step={1}
      mode={2}
      values={[+startTimeMin, +endTimeMin]}
    >
      <Rail>
        {({ getRailProps }) => (
          <div className="railStyle" {...getRailProps()} />
        )}
      </Rail>
      <Handles>
        {({ handles, getHandleProps }) => (
          <div className="slider-handles">
            {handles.map((handle) => (
              <Handle
                key={handle.id}
                handle={handle}
                getHandleProps={getHandleProps}
                minuteToHour={minuteToHour}
              />
            ))}
          </div>
        )}
      </Handles>
      <Tracks left={false} right={false}>
        {({ tracks, getTrackProps }) => (
          <div className="slider-tracks">
            {tracks.map(({ id, source, target }) => (
              <Track
                key={id}
                source={source}
                target={target}
                getTrackProps={getTrackProps}
                valueStart={valueStart}
                valueEnd={valueEnd}
                update={update}
              />
            ))}
          </div>
        )}
      </Tracks>
    </Slider>
  );
}

export function Handle({
  handle: { id, value, percent },
  getHandleProps,
  minuteToHour,
}) {
  return (
    <div
      style={{
        left: `${percent}%`,
        position: "absolute",
        marginLeft: -10,
        marginTop: -3,
        zIndex: 2,
        cursor: "pointer",
        color: "#4F4F4F",

        width: 16,
        height: 16,
        backgroundColor: "#FFCC40",
        borderRadius: "50%",
        border: "5px solid #ffffff",
        boxShadow: "0px 7px 15px rgba(148, 156, 160, 0.13)",
      }}
      {...getHandleProps(id)}
    >
      <div className="handle-value">{minuteToHour(value)}</div>
    </div>
  );
}

function Track({
  source,
  target,
  getTrackProps,
  valueStart,
  valueEnd,
  update,
}) {
  useEffect(() => {
    valueStart.current = source.value;
    valueEnd.current = target.value;
    update(valueStart.current, valueEnd.current);
  });

  return (
    <div
      style={{
        position: "absolute",
        height: 10,
        zIndex: 1,
        borderRadius: 5,
        cursor: "pointer",
        left: `${source.percent}%`,
        width: `${target.percent - source.percent}%`,

        backgroundColor: "#FFCC40",
        boxShadow: "0px 15px 30px rgba(216, 226, 232, 0.12)",
      }}
      {...getTrackProps()}
    />
  );
}
const mapStateToProps = (state) => {
  return {
    day: state.day,
  };
};

export default connect(mapStateToProps, null)(ReactSlider);

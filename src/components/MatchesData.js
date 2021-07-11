import React, { useState, useEffect, forwardRef } from "react";
import "../MatchesData.css";
import Match from "./Match";
import calendarLogo from "./img/calendarLogo.png";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import axios from "axios";
import { Redirect } from "react-router";

const API_KEY = process.env.REACT_APP_API_KEY;
const Matches = ({ standings, compId }) => {
  //useState const
  const [errorMessage, setErrorMessage] = useState("false");
  const [loading, setLoading] = useState(false);
  const [matches, setMatches] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  var matchDays = [];

  const fetchData = async () => {
    try {
      await axios
        .get(
          `https://api.football-data.org/v2/competitions/${compId}/matches`,
          {
            headers: {
              "X-Auth-Token": `${API_KEY}`,
              "Content-Type": "application/json",
            },
            crossDomain: true,
          }
        )
        .then((res) => {
          setMatches(res.data.matches);
        });
      setLoading(true);
    } catch (e) {
      if (e.response && e.response.data) {
        console.log(e.response.data.message); // some reason error message
        setErrorMessage(e.response.data.message);
      }
    }
  };

  const findMatchDays = () => {
    matches.forEach((match) => {
      var testDate = new Date(match.utcDate);
      var utc = new Date(
        testDate.getTime() + testDate.getTimezoneOffset() * 60000
      );
      matchDays.push(new Date(utc));
    });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  findMatchDays();

  if (compId === undefined) {
    return <Redirect to="/" />;
  }

  if (errorMessage !== "false") {
    alert(errorMessage);
    return <Redirect to="/" />;
  }

  const searchedMatchDay = matches.filter(
    (match) =>
      match.utcDate
        .substring(0, 10)
        .localeCompare(
          `${startDate.getFullYear()}-${(
            "0" +
            (startDate.getMonth() + 1)
          ).slice(-2)}-${("0" + startDate.getDate()).slice(-2)}`
        ) === 0
  );

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="customDateInput" onClick={onClick} ref={ref}>
      <img
        src={calendarLogo}
        alt="calendarLogo"
        style={{ height: "auto", width: "20%" }}
      />
      {value}
    </button>
  ));

  return (
    <div>
      {loading ? (
        <div className="mainMatchesContainer">
          <h2 className="mainHeadingText">Fixtures / Results :</h2>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            highlightDates={matchDays}
            disabledKeyboardNavigation
            customInput={<ExampleCustomInput />}
          />

          <div className="matchDayContainer">
            {searchedMatchDay.length === 0 ? (
              <p>No games scheduled for the day</p>
            ) : (
              searchedMatchDay.map((match) => {
                return (
                  <Match key={match.id} standings={standings} match={match} />
                );
              })
            )}

            <a
              className="calendarCitation"
              href="https://icons8.com/icon/23/calendar"
              target="_blank"
              rel="noreferrer noopener"
            >
              Calendar icon by Icons8
            </a>
          </div>
        </div>
      ) : (
        <p className="subText">Loading . . .</p>
      )}
    </div>
  );
};

export default Matches;

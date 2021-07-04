import React, { useState, useEffect } from "react";
import "../MatchesData.css";
import Match from "./Match";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import axios from "axios";
import { Redirect } from "react-router";

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
              "X-Auth-Token": "72aa30bc107e4c7fa1ca8f84861b8c95",
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

  return (
    <div>
      {loading ? (
        <div className="mainMatchesContainer">
          <h2 className="mainHeadingText">Fixtures / Results :</h2>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            highlightDates={matchDays}
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
          </div>
        </div>
      ) : (
        <p className="subText">Loading . . .</p>
      )}
    </div>
  );
};

export default Matches;

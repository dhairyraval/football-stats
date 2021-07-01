import React, { useState, useEffect } from "react";
import "../App.css";
import Matches from "./MatchesData";

import { Redirect } from "react-router";
import { Link } from "react-router-dom";

import axios from "axios";
import RankGraph from "./RankGraph";

const Standings = (props) => {
  const id = props.location.aboutProps;

  //Array of colors for different bar graphs
  //Added ~23 different colors to account for any future changes in the api
  const colors = [
    "#6393e0",
    "#3cb44b",
    "#e6194b",
    "#4363d8",
    "#f58231",
    "#911eb4",
    "#46f0f0",
    "#f032e6",
    "#bcf60c",
    "#ffe119",
    "#fabebe",
    "#008080",
    "#9a6324",
    "#fffac8",
    "#800000",
    "#aaffc3",
    "#808000",
    "#ffd8b1",
    "#000075",
    "#808080",
    "#ffffff",
    "#000000",
    "#ff9900",
    "#ace600",
    "#ff3300",
  ];

  //useState const
  const [competition, setCompetition] = useState([]);
  const [season, setSeason] = useState([]);
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("false");
  const [heightValue, setHeightValue] = useState(800);
  const [switchDisplay, setSwitchDisplay] = useState(2);

  const fetchData = async () => {
    try {
      await axios
        .get(
          `https://api.football-data.org/v2/competitions/${id.id.id}/standings`,
          {
            headers: {
              "X-Auth-Token": "72aa30bc107e4c7fa1ca8f84861b8c95",
            },
            crossdomain: true,
          }
        )
        .then((res) => {
          // console.log(res.data);
          setCompetition(res.data.competition);
          setSeason(res.data.season);
          setStandings(res.data.standings);
          setHeightValue(150 + res.data.standings[0].table.length * 30); //setting a custom height of graphs
          setErrorMessage("false");
        });
      setLoading(true);
    } catch (e) {
      if (e.response && e.response.data) {
        console.log(e.response.data.message); // some reason error message
        setErrorMessage(e.response.data.message);
      }
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleSwitch = () => {
    if (switchDisplay === 1) {
      setSwitchDisplay(2);
    } else {
      setSwitchDisplay(1);
    }
  };

  if (id === undefined) {
    return <Redirect to="/" />;
  }

  if (errorMessage !== "false") {
    alert(errorMessage);
    return <Redirect to="/" />;
  }

  // console.log(standings);
  return (
    <div className="mainContainer">
      {loading ? (
        <>
          <div
            className="mainHeadingContainer"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h2 className="mainHeadingText">{competition.name}</h2>

            <div
              className="subHeadingContainer"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                fontSize: "18px",
                width: "95%",
              }}
            >
              <p style={{ padding: "1%" }}>
                <strong>Match Day:</strong> {season.currentMatchday}
              </p>
              <p style={{ padding: "1%" }}>
                <strong>Start Date:</strong> {season.startDate}
              </p>
              <p style={{ padding: "1%" }}>
                <strong>End Date:</strong> {season.endDate}
              </p>
              <p style={{ padding: "1%" }}>
                <strong>Winner:</strong>{" "}
                {season.winner === null ? "TBA" : season.winner.name}
              </p>
            </div>
          </div>
          <hr />
          <div
            className="ButtonsContainer"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Link to="/">back</Link>

            <button onClick={() => toggleSwitch()}>
              {switchDisplay === 1 ? "Match Stats" : "League Positions"}
            </button>
          </div>

          <div className="switchDisplayContainer">
            {switchDisplay === 1 ? (
              <>
                {standings.map((standing, index) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "center",
                        width: "90%",
                        height: heightValue,
                        //backgroundColor: "lightgrey",
                      }}
                      key={index}
                    >
                      <RankGraph standing={standing} color={colors[index]} />
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <div className="matchesContainer">
                  <Matches compId={id.id.id} />
                </div>
              </>
            )}
          </div>
        </>
      ) : (
        <p className="subText">Loading . . .</p>
      )}
    </div>
  );
};

export default Standings;

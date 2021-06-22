import React, { useState, useEffect } from "react";
import "../App.css";

import { Redirect } from "react-router";
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
    -"#4363d8",
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
  const [competitionName, setCompetitionName] = useState("");
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("false");

  const fetchData = async () => {
    try {
      await axios
        .get(
          `http://api.football-data.org/v2/competitions/${id.id.id}/standings`,
          {
            headers: {
              "X-Auth-Token": "72aa30bc107e4c7fa1ca8f84861b8c95",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          setCompetitionName(res.data.competition.name);
          setStandings(res.data.standings);

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

  if (id === undefined) {
    return <Redirect to="/" />;
  }

  if (errorMessage !== "false") {
    alert(errorMessage);
    return <Redirect to="/" />;
  }

  console.log(standings);
  return (
    <div className="mainContainer">
      {loading ? (
        <>
          <h2>The Competition Name is : </h2>
          <h3>{competitionName}</h3>
          <hr></hr>

          {standings.map((standing, index) => {
            return (
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  width: "80%",
                  height: "800px",
                  //backgroundColor: "lightgrey",
                }}
              >
                <RankGraph
                  key={index}
                  standing={standing}
                  color={colors[index]}
                />
              </div>
            );
          })}
        </>
      ) : (
        <p>Loading . . .</p>
      )}
    </div>
  );
};

export default Standings;

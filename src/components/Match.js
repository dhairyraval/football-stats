import React, { useState, useEffect } from "react";

import axios from "axios";

const Match = ({ match }) => {
  const [errorMessage, setErrorMessage] = useState("false");
  const [homeTeamLogo, setHomeTeamLogo] = useState(null);
  const [awayTeamLogo, setAwayTeamLogo] = useState(null);
  const [teamNull, setTeamNull] = useState(0);

  const fetchData = async () => {
    if (match.homeTeam.id === null || match.awayTeam.id === null) {
      setTeamNull(1);
      return;
    }

    try {
      await axios
        .all([
          axios.get(
            `https://api.football-data.org/v2/teams/${match.homeTeam.id}`,
            {
              headers: {
                "X-Auth-Token": "72aa30bc107e4c7fa1ca8f84861b8c95",
              },
            }
          ),
          axios.get(
            `https://api.football-data.org/v2/teams/${match.awayTeam.id}`,
            {
              headers: {
                "X-Auth-Token": "72aa30bc107e4c7fa1ca8f84861b8c95",
              },
            }
          ),
        ])
        .then(
          axios.spread((data1, data2) => {
            // output of req.
            // console.log("data1", data1, "data2", data2);
            setHomeTeamLogo(data1.data.crestUrl);
            setAwayTeamLogo(data2.data.crestUrl);
          })
        );
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
  if (errorMessage !== "false") {
    alert(errorMessage);
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: "2%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {teamNull === 1 ? (
          "TBA"
        ) : (
          <>
            {match.homeTeam.name}
            {homeTeamLogo !== null ? (
              <img src={homeTeamLogo} alt="homeTeamLogo" className="teamLogo" />
            ) : null}
          </>
        )}
      </div>

      {match.status === "SCHEDULED" ? (
        <p> v </p>
      ) : (
        <p>
          {match.score.fullTime.homeTeam}-{match.score.fullTime.awayTeam}
        </p>
      )}

      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {teamNull === 1 ? (
          "TBA"
        ) : (
          <>
            {awayTeamLogo !== null ? (
              <img src={awayTeamLogo} alt="awayTeamLogo" className="teamLogo" />
            ) : null}
            {match.awayTeam.name}
          </>
        )}
      </div>
      <p className={match.status}>{match.status}</p>
    </div>
  );
};

export default Match;

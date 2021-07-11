import React, { useState, useEffect, useRef } from "react";
import "../App.css";

import Competition from "./Competition";
import axios from "axios";
import githubLogo from "./img/githubLogo.png";
import linkedinLogo from "./img/linkedinLogo.png";
import emailLogo from "./img/emailLogo.png";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const API_KEY = process.env.REACT_APP_API_KEY;

const HomePage = () => {
  const [competitions, setCompetitions] = useState([]);
  const [competitionName, setCompetitionName] = useState("");
  const [loading, setLoading] = useState(false);

  const availableComps = [
    2000, 2001, 2002, 2003, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2021,
    2152,
  ];

  const linkRef = useRef();
  const fetchData = async () => {
    try {
      await axios
        .get("https://api.football-data.org/v2/competitions/", {
          headers: {
            "X-Auth-Token": `${API_KEY}`,
          },
        })
        .then((res) => {
          setCompetitions(res.data.competitions);
        });
      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const inputName = (e) => {
    setCompetitionName(e.target.value);
  };

  //funtion to filter the competitions, search them

  const filterCompetition = competitions.filter(
    (competition) =>
      competition.name.toLowerCase().includes(competitionName.toLowerCase()) &&
      availableComps.includes(competition.id)
  );

  function handleBackClick() {
    linkRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      {loading ? (
        <div className="mainDiv">
          <h1 className="mainHeading">FOOTBALL-STATS</h1>

          <button className="subHeading" onClick={handleBackClick}>
            Made by Dhairy Raval
          </button>

          <p className="searchText">Search football competitions</p>
          <form className="competitionInputForm">
            <input
              type="text"
              placeholder="Search Name"
              className="competitionInput"
              onChange={inputName}
            />
          </form>
          <br></br>
          <Grid>
            <TableContainer
              className="mainTableContainer"
              component={Paper}
              elevation={8}
            >
              <Table className="mainTable" aria-label="simple table">
                <TableHead>
                  <TableRow className="headingRow">
                    <TableCell align="center">
                      <p className="headingCellText">Competition Name</p>
                    </TableCell>
                    <TableCell align="center">
                      <p className="headingCellText">Current Season Start</p>
                    </TableCell>
                    <TableCell align="center">
                      <p className="headingCellText">Current Season End</p>
                    </TableCell>
                    <TableCell align="center">
                      <p className="headingCellText">Last Updated</p>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filterCompetition.map((comp) => {
                    //changing competition name from "Premiera Division" to "La Liga"
                    if (comp.id === 2014) {
                      comp.name = "La Liga";
                    }
                    return (
                      <Competition
                        key={comp.id}
                        id={comp.id}
                        name={comp.name}
                        currentSeason={comp.currentSeason}
                        lastUpdated={comp.lastUpdated}
                      />
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          <p className="subText">
            All football data provided by{" "}
            <a
              href="https://www.football-data.org/"
              target="_blank"
              rel="noreferrer noopener"
              className="attribution"
            >
              Football-Data.org API
            </a>{" "}
            <br />
            <br />
            Photo by{" "}
            <a
              href="https://unsplash.com/@06mather?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noreferrer noopener"
              className="attribution"
            >
              Mathias Herheim
            </a>{" "}
            on{" "}
            <a
              href="https://unsplash.com/collections/1791496/soccer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noreferrer noopener"
              className="attribution"
            >
              Unsplash
            </a>
          </p>
          <div className="socialLinksContainer" ref={linkRef}>
            <a
              href="https://github.com/Nuey2310"
              target="_blank"
              rel="noreferrer noopener"
              className="socialLinks"
            >
              <img
                src={githubLogo}
                alt="githubLogo"
                className="socialLinksImages"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/dhairy-raval-2896b219a/"
              target="_blank"
              rel="noreferrer noopener"
              className="socialLinks"
            >
              <img
                src={linkedinLogo}
                alt="linkedinLogo"
                className="socialLinksImages"
              />
            </a>
            <a
              href="mailto:dhairyraval@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
              className="socialLinks"
            >
              <img
                src={emailLogo}
                alt="emailLogo"
                className="socialLinksImages"
              />
            </a>
          </div>
        </div>
      ) : (
        <div className="loadingContainer">
          <p>Loading . . .</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;

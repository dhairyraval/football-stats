import React, { useState, useEffect } from "react";
import "../App.css";

import Competition from "./Competition";
import axios from "axios";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const HomePage = () => {
  const [competitions, setCompetitions] = useState([]);
  const [competitionName, setCompetitionName] = useState("");
  const [loading, setLoading] = useState(false);

  const availableComps = [
    2000, 2001, 2002, 2003, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2021,
    2152,
  ];
  const fetchData = async () => {
    try {
      await axios
        .get("https://api.football-data.org/v2/competitions/", {
          headers: {
            "X-Auth-Token": "72aa30bc107e4c7fa1ca8f84861b8c95",
          },
        })
        .then((res) => {
          console.log(res.data.competitions);
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

  return (
    <div className="mainDiv">
      <div className="secondaryDiv">
        {loading ? (
          <>
            <h1 className="mainHeading">FOOTY</h1>
            <h3 className="subHeading">Made by Dhairy Raval</h3>

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
                className="mainTabelContainer"
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
              All football data provided by the Football-Data.org API
            </p>
          </>
        ) : (
          <p>Loading . . .</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;

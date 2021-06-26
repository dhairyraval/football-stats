import React from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import { Link } from "react-router-dom";

const Competition = ({ id, name, lastUpdated, currentSeason }) => {
  return (
    <TableRow key={id}>
      <TableCell align="center">
        <Link
          to={{
            pathname: "/standings",
            aboutProps: {
              id: { id },
            },
          }}
        >
          {name}
        </Link>
      </TableCell>
      <TableCell align="center">
        {currentSeason === null ? "TBD" : currentSeason.startDate}
      </TableCell>
      <TableCell align="center">
        {currentSeason === null ? "TBD" : currentSeason.endDate}
      </TableCell>
      <TableCell align="center">{lastUpdated}</TableCell>
    </TableRow>
  );
};

export default Competition;

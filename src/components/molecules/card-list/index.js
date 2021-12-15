import React from "react";
import Grid from "@material-ui/core/Grid";
import { Card } from "../card";

export const CardList = ({ data = [], xs = 4, sm = 4, onCardClick }) => (
  <Grid item container alignContent="center" xs={12} sm={12}>
    {data.map((x) => (
      <Grid item xs={xs} sm={sm} align="center" key={x.name}>
        <Card onClick={onCardClick} title={x.name} {...x} />
      </Grid>
    ))}
  </Grid>
);

CardList.defaultProps = {
  data: [],
  xs: 4,
  sm: 4,
  onCardClick: () => {
    console.log("should return true");
  },
};

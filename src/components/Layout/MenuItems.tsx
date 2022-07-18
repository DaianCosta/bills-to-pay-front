import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Router from "next/router";

function handleLink(path: string) {
  Router.push(path);
}

export const mainListItems = (
  <React.Fragment>
    <ListItemButton
      onClick={() => {
        handleLink("/");
      }}
    >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText
        primary="Date picker"
        onClick={() => {
          handleLink("date");
        }}
      />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText
        primary="Blank"
        onClick={() => {
          handleLink("blank");
        }}
      />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText
        primary="Grid"
        onClick={() => {
          handleLink("grid");
        }}
      />
    </ListItemButton>
    <ListItemButton
      onClick={() => {
        handleLink("category");
      }}
    >
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Categorias" />
    </ListItemButton>

    <ListItemButton
      onClick={() => {
        handleLink("form");
      }}
    >
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Form" />
    </ListItemButton>
  </React.Fragment>
);

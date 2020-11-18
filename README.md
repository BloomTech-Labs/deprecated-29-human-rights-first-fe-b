# Human Rights First Police Use of Force Map - Front End

## Description 👇

> **Disclaimer:** This application is currently in Alpha (as of Oct 20, 2020) and is not ready for production. Please use at your own risk as things will change almost daily.

- Our team is developing an interactive map that identifies potential instances of police use of force across the United States of America for [Human Rights First](https://www.humanrightsfirst.org/), an independent advocacy and action organization. We are also developing additional graphics to track and display police brutality trends.
- An application that takes information from data provided by the data science team collecting relevant incidents and data from Twitter, Reddit, and police agencies to display it on the map.
- This app will display various incidents of police use of force on a map that can be filtered by type of brutality and location with zipcodes and states.

## Deployed App

- https://d.humanrightsfirst.dev/
  <img src='./src/assets/hrf.jpg'>

## Features

- a dynamic navigation bar with tabs displaying either the Map, the Graph, or the About page as well as a popup with the Filter form
- Graph:
  - timelime view of number of incidents over the course of a year (data dates range)
  - ability to filter out data by type of brutality used
- Filter `(currently applying just for the map)`:
  - date range implemented `(not functional)`
  - reset filters
  - select state dropdown or search state by typing(selected state can be removed with one click on the x button on the right afterwards): zooms onto the selected state
  - search by zip-code (looked up zipcode can be removed with the x button on the right of it afterwards): zooms onto a zipcode location
  - filter incidents by type of brutality
  - filter incidents by type of source like Twitter, Reddit, etc `(not functional)`
- Map:
  - Control panel:
    - ability to navigate and zoom on to user's location
    - zoom in/out the map
    - reset bearing to north
  - dynamic Hide/Show Map Options menu:
    - enable/disable zooming on the map with mouse scroll wheel
    - enable/disable fast travel states: turns on a hover option for each screen and zooms onto the highlighted state when clicked
    - reset map view to the original view

## Requirements

- [Labs Engineering Standard requirements found here](https://www.notion.so/Human-Rights-First-Roadmap-Team-Kevin-c53ed8e80b0e4584aba47abee5753591)

### Environment variable

- `REACT_APP_MAPBOX_TOKEN` Mapbox access tokens (check `https://docs.mapbox.com/help/how-mapbox-works/access-tokens/`)
  > the token can be found on the previous team's deployment info page or recreated on mapbox studio

## Components

- Loading Page
- NavBar
- Filter Form
- Map
- Graph
- About

## Styling Our App

- `CSS`
- `AntD`

## Data Visualization

`MapBox` - https://docs.mapbox.com :

- using mapboxgl approach

## The Team

- [Hui Zhu](https://github.com/itshui3)[<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/itshui3) [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/xuhuizhu/) - Team Project Lead

- [Daniel Ajadi](https://github.com/theolamide)[<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/theolamide) [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/daniel-olamide-ajadi/) - Team Project Lead

- [Samuel Brown](https://github.com/sambrown0322)[<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/sambrown0322) [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/samuelbrown0322/) - Front End Engineer

- [Juan Carlos Alvarado-Arguello](https://github.com/CarlosAA10)[<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/CarlosAA10) [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/cedricwinbush/) - Front End Engineer

- [Charlie Lu](https://github.com/charlupuhh)[<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/charlupuhh) [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/charlie-lu1/) - Front End Engineer

- [Jazmine McGinnis](https://github.com/JazmineMT)[<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/JazmineMT) [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](linkedin.com/in/juan-rivera-dev) - Back End Engineer

- [Robert Sharp](https://github.com/BrokenShell)[<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/barbaralois) [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/robert-w-sharp/) - Data Science Engineer

- [Crystal Dixson](https://github.com/cdixson-ds)[<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/cdixson-ds) [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/crystaldixson/) - Front End Engineer

- [Jake Dennis](https://github.com/imdeja)[<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/imdeja) [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/marta-janina-krawczyk/) - Front End Engineer

## ⚠ Contributing - future features needed/desired for this project:

> Please refer to the highlited parentheses statements throughout this ReadMe for better understanding

- Backend categorizing incidents by Rank (type of force)
- Incidents associated with one rank only (currently, a rank 5 incident will also appear in rank 4, rank 3, rank 2, rank 1 filters)
- Register/Login functionality added so that users can save queries to their account
- Ability for users to save queries to their account
- ability to apply and filter by date range
- ability to filter by source type
- Change graph to show different data (rather than just showing the same data in a different format)
  - Maybe implement the calendar instead.

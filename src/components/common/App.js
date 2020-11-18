import React, { useState, useEffect } from 'react';
// import OldMap from './OldMap';
import { useDispatch } from 'react-redux';
import Map from './Map';
import Graph from './Graph';
import About from './About';
import FiltersForm from './FilterForm';
import 'antd/dist/antd.css';
import '../../styles/index.css';
import { Tabs, Button, Popover } from 'antd';
import NavBar from './NavBar';
import { fetchIncidents } from '../../state/actions';

export const App = () => {
  const { TabPane } = Tabs;
  const dispatch = useDispatch();

  const openFilters = (
    <Popover
      placement="bottomRight"
      title={<span>Filter Your Results</span>}
      content={<FiltersForm />}
      trigger="click"
    >
      <Button type="link">Open Filters</Button>
    </Popover>
  );
  useEffect(() => {
    // -> showcase our data instantly from the api call
    dispatch(fetchIncidents());
  }, []);

  return (
    <div>
      <NavBar />
      <div className="tabs-container">
        <Tabs
          defaultActiveKey="1"
          type="card"
          size="large"
          tabBarExtraContent={openFilters}
          tabBarStyle={{
            backgroundColor: '#003767',
            paddingTop: '10px',
            paddingLeft: '5px',
          }}
        >
          <TabPane tab="Map" key="1">
            <div className="map-container">
              <div id="map" style={{ display: 'block' }}>
                {<Map />}
              </div>
              {/* Future contribution: Make the calendar into a working component instead of just having a picture. Could possibly be used instead of graph. */}
              <img
                src="https://images.squarespace-cdn.com/content/v1/54ecf211e4b0ed744420c5b6/1602132420033-8PNPJPPPP270J5RF7OCA/ke17ZwdGBToddI8pDm48kB7j6pPDBrAq7KPGVajBvol7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UVpovQ6fx6i_w_vNol2126FL10KsLeiIYVVgnyhlrVCVy-bVSSRJZztkCOpAxPA4NA/calendar.jpg?format=1500w"
                alt="Calendar showing amount of days how many people die to police each day."
              ></img>

              <div className="map-tab-text">
                <div>
                  <h3> AMERICAN IDEALS. UNIVERSAL VALUES.</h3>
                  <p>
                    On human rights, the United States must be a beacon.
                    Activists fighting for freedom around the globe continue to
                    look to our country for inspiration and count on us for
                    support. Upholding human rights is not only a moral
                    obligation; it’s a vital national interest: America is
                    strongest when our policies and actions match our values.
                  </p>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Graph" key="2" style={{ backgroundColor: '#191a1a' }}>
            <div id="graph">{<Graph />}</div>
          </TabPane>
          <TabPane tab="About" key="3">
            <div id="about">{<About />}</div>
          </TabPane>
        </Tabs>
      </div>

      <footer className="page-footer">
        <small>© Copyright 2020. All rights reserved.</small>
        <ul></ul>
      </footer>
    </div>
  );
};

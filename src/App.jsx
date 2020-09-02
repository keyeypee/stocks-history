import React, { useState, useEffect } from "react";

import OHCLChart from "./components/OHCLChart";
import getHistory from "./apis/getHistory";
import { Container, Title, ViewSwitcher, Content } from "./styles";

const App = () => {
  const [isGraphView, setGraphView] = useState(false);
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    getHistory().then((res) => {
      setDataPoints([...res]);
    });
  }, []);

  console.log("dataPoints", dataPoints);

  return (
    <Container>
      <Title>
        Historical Data
        <ViewSwitcher
          onClick={() => {
            setGraphView(!isGraphView);
          }}
        >
          {isGraphView ? "Switch To Table View" : "Switch To Graph View"}
        </ViewSwitcher>
      </Title>
      <Content>
        {dataPoints.length > 0 && <OHCLChart dataPoints={dataPoints} />}
      </Content>
    </Container>
  );
};

export default App;

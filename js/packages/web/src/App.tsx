import React from 'react';
import {MaintenanceView} from "./views/maintenance";
import {Routes} from "./routes";

function App() {
  return (process.env.NEXT_MAINTENANCE === 'true' ? <MaintenanceView /> : <Routes />);
}

export default App;

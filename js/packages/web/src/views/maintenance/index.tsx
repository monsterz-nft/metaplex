import { Layout } from 'antd';
import React from 'react';

export const MaintenanceView = () => {
  return (
  <Layout style={{ margin: 0, marginTop: 30, alignItems: 'center'}}>
    <h2 style={{ marginTop: 50}}>Maintenance in progress</h2>
    <p>Please come back in a short while!</p>
    <img style={{ marginTop: 50}} src="/favicon-96x96.png"/>
  </Layout>
  );
};

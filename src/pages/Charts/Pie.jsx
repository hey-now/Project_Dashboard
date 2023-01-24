import React from 'react';

import { pieChartData } from '../../data/dummy';
import { Header, Pie as PieChart } from '../../components';

const Pie = () => (
  <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-main-dark-bg">
    <Header category="Pie" title="Project Cost Breakdown" />
    <div className="w-full">
      <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
    </div>
  </div>
);

export default Pie;
import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, SplineAreaSeries,  } from '@syncfusion/ej2-react-charts';

import { Header } from '../../components';
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Area = () => {
  const { currentMode } = useStateContext();
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-main-dark-bg'>
      <Header category='Area' title='Inflation Rate in Percentage' />
      <ChartComponent
        id='line-chart'
        height='420px'
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: {width: 0} }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      >
        <Inject services={[SplineAreaSeries, DateTime, Legend]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Area;
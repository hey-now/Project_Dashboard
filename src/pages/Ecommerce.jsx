import React from 'react'
import { BsCuurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Stacked, Pie, Button, SparkLine } from '../components';
import { earningData, SparklineAreaData, ecomPieChartDat } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg
        h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern
        bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div className='bg-black bg-opacity-70 rounded-xl text-center'>
              <p className='font-bold text-white '>Earnings</p>
              <p className='text-2xl text-white p-2'>$2,546,657.16</p>
            </div>
          </div>
          <div className='mt-3 ml-8'>
            <Button
              color='white'
              bgColor='blue'
              text='Download'
              borderRadius='10px'
              size='md'
            />
          </div>
        </div>
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {earningData.map((item) => (
            <div
            key={item.title}
            className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56
            p-4 pt-9 rounded-2xl'
            >
              <button type='button'
              style={{ color: item.iconColor,
              backgroundColor: item.iconBg }}
              className='text-2xl opacity-0.9
              rounded-full p-4 hover:drop-shadow-xl'>
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>
                  {item.amount}
                </span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className='text-sm text-gray-400 mt-1'>
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>Revenue Updates</p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span><GoPrimitiveDot /></span>
                <span>Expense</span>
              </p>
              <p className='flex items-center gap-2 text-green-200 hover:drop-shadow-xl'>
                <span><GoPrimitiveDot /></span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
            <div className='border-r-1 border-color m-4 pr-10'>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>$1,254,678.98</span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>25%</span>
                </p>
                <p className='text-gray-500 mt-1'>Budget</p>
              </div>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>$784,987.43</span>
                </p>
                <p className='text-gray-500 mt-1'>Expense</p>
              </div>
              <div className='mt-5'>
                <SparkLine 
                  currentColor='blue'
                  id='line-sparkline'
                  type='Line'
                  height='80px'
                  width='250px'
                  data={SparklineAreaData}
                  color='blue'
                />
              </div>
              <div className='mt-10'>
                <Button 
                  color='white'  
                  bgColor='blue'
                  text='Download Reports'
                  borderRadius='10px'
                />
              </div>
            </div>
            <div>
              <Stacked width='320px' height='360px'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce
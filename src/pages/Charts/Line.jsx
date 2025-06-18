import React from 'react'
import Header from '../../components/Header'
import { LineChart } from '../../components'

function Line() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-[#33373E] rounded-3xl">
      <Header category={"Chart"} title={"Line Chart"} />
      <LineChart/>
    </div>
  )
}

export default Line
import ChartContainer from '@/components/admin/ChartContainer'
import {
  ChartsLoadingContainer,
  StatsLoadingContainer,
} from '@/components/admin/Loading'
import StatsContainer from '@/components/admin/StatsContainer'
import React, { Suspense } from 'react'

const AdminPage = () => {
  return (
    <>
      <Suspense fallback={<StatsLoadingContainer />}>
        <StatsContainer />
      </Suspense>
      <Suspense fallback={<ChartsLoadingContainer />}>
        <ChartContainer />
      </Suspense>
    </>
  )
}

export default AdminPage

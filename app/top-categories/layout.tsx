"use client"

import Sidebar from '@/components/TopCategories/Sidebar'
import React from 'react'


type Props = {
  children: React.ReactNode
}

const TopCategoriesLayout = ({ children }: Props) => {
  const [activeCat, setActiveCat] = React.useState("Top Products")

  return (
    <div className="flex max-w-[1400px] mx-auto px-4 my-20">
      <div className="hidden mobile:block mt-3">
        <Sidebar {...{ activeCat, setActiveCat }} />
      </div>
      <main className="w-full mobile:w-[calc(100%-250px)] lg:w-[calc(100%-300px)]">
        {children}
      </main>
    </div>
  )
}

export default TopCategoriesLayout

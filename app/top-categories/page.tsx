import React from 'react'
import GiftCard from '@/components/Home/GiftCard'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: "Points - Top Catigories",
};


const TopCategory = () => {
  return (

    <>
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="grow">
        <Navbar/>
        <GiftCard />
        <Footer/>
      </main>
    </div>
  </>
  )
}

export default TopCategory

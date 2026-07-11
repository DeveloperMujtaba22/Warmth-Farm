import React from 'react'
import Hero from './_components/Hero'
import Features from './_components/Features'
import SpaceInsulation from './_components/SpaceInsulation'
import PricingCards from './_components/Pricingcards'
import PropertyTypes from './_components/PropertyTypes'
import ContactCTA from './_components/ContactCTA'
import BeforeAfter from './_components/BeforeAfter'
import RigidPPU from './_components/RigidPPU'
import CalculatorCTA from './_components/CalculatorCTA'
import FAQ from './_components/FAQ'
import ThermalInspection from './_components/ThermalInspection'


const page = () => {
  return (
    <>
      <Hero/>
      <Features/>
      <SpaceInsulation/>
      <PricingCards/>
      <PropertyTypes/>
      <ContactCTA/>
      <BeforeAfter/>
      <RigidPPU/>
      <CalculatorCTA/>
      <FAQ/>
      <ThermalInspection/>
    </>
  )
}

export default page
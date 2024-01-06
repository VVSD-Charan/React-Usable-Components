import React from 'react'
import '../../../App.css'
import Accordion from '../../Accordion/Accordion'
import CompanyDescription from '../../Home/CompanyDescription'
import {
  AgribusinessSupport,
  CommercialVehicles,
  ManufacturingChallenges,
  ServiceBusinessEssentials,
} from '../../Home/BusinessDescription'

export default function Home() {
  return (
    <>
      <CompanyDescription />

      <AgribusinessSupport />
      <CommercialVehicles />
      <ManufacturingChallenges />
      <ServiceBusinessEssentials />
      <Accordion />
    </>
  )
}

import SectionDescription from '@/components/custom/section-description'
import SectionTitle from '@/components/custom/section-title'
import ServiceCard from '@/components/custom/service-card'
import AppSection from '@/components/layout/app-section'
import { SERVICES } from '@/mock'
import React from 'react'

// type Props = {}

const ServiceSection = () => {
  const serviceData = SERVICES

  return (
    <AppSection id="services">
      <div className="w-full md:w-1/2 mx-auto">
        <SectionTitle name="Services" />
        <SectionDescription
          content={`Building responsive, SEO-friendly websites and scalable web applications.`}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 mt-5 md:mt-7">
        {serviceData.map((service) => (
          <ServiceCard
            key={service.key}
            name={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </AppSection>
  )
}

export default ServiceSection

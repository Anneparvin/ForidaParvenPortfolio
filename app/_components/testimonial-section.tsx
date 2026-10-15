import SectionDescription from '@/components/custom/section-description'
import SectionTitle from '@/components/custom/section-title'
import TestimonialCard from '@/components/custom/testimonial-card'
import AppSection from '@/components/layout/app-section'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'
import React from 'react'
import { TESTIMONIALS } from '@/mock'

// type Props = {}

const TestimonialSection = () => {
  const testimonialData = TESTIMONIALS
  return (
    <AppSection id="testimonials">
      <div className="w-full max-w-3xl md:w-1/2 mx-auto px-4">
        <SectionTitle name="Testimonials" />
        <SectionDescription
          content={`Hear what developers, designers, and collaborators say about my work, creativity, and dedication to building modern, responsive, and user-friendly web experiences.`}
        />
      </div>
     <div className="my-8 sm:my-10 w-full px-2 sm:px-4">
        <Carousel
          opts={{
            align: 'center',
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-3 sm:-ml-4">
            {testimonialData.map((testimonial) => (
           <CarouselItem
            key={testimonial.name}
            className="pl-3 sm:pl-4 basis-[97%] sm:basis-3/4 md:basis-1/2"
          >
                <TestimonialCard
                  content={testimonial.content}
                  name={testimonial.name}
                  profession={testimonial.profession}
                  avatar={testimonial.avatar}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </AppSection>
  )
}

export default TestimonialSection

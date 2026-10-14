import React from 'react'
import ProgressSkill from '@/components/custom/progress-skill'
import TwoColSection from '@/components/layout/two-col-section'
import AvatarProfile from '@/components/custom/avatar-profile'
import SectionTitle from '@/components/custom/section-title'
import SectionDescription from '@/components/custom/section-description'

const AboutSection = () => {
  return (
    <TwoColSection id="about">
      <div className="flex justify-center md:justify-start items-center">
        <AvatarProfile src="/images/user/forida parven2.png" alt="forida parven2.png" />
      </div>
      <div>
        <SectionTitle name="About Me" />
        <SectionDescription
          content={`Passionate Full-Stack Web Developer specializing in responsive, SEO-friendly web applications using React, Next.js, TypeScript, JavaScript, and Tailwind CSS.`}
        />

        <div className="flex flex-col space-y-3">
          <ProgressSkill name="JavaScript" value={85} />
          <ProgressSkill name="TypeScript" value={80} />
          <ProgressSkill name="React" value={75} />
          <ProgressSkill name="Node.js" value={70} />
          <ProgressSkill name="Next.js" value={85} />
        </div>
      </div>
    </TwoColSection>
  )
}

export default AboutSection

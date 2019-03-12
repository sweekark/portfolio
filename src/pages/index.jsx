import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

import sweekarkAvatar from '../images/sweekark-avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Sweekar K.
        </BigTitle>
        <Subtitle>I'm creating noice web and mobile experiences for the next generation of consumer-facing companies.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Licious"
            link="https://www.licious.in"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            This project is my entry to leading tech in indias e-commerce market.
          </ProjectCard>
          <ProjectCard
            title="Falconbrick"
            link="https://www.falconbrick.com"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            This is the project where i was full exposed to react postgresql and various types of charting along with leading the tech team
          </ProjectCard>
          <ProjectCard
            title="Tomb Raider"
            link="https://www.behance.net/gallery/43907099/Tomb-Raider"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Recreation of a Tomb Raider Wallpaper (Fan Art)
          </ProjectCard>
          <ProjectCard
            title="Eagle"
            link="https://www.behance.net/gallery/38068151/Eagle"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            A fantasy image manipulation relocating the habitat of wild animals.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={sweekarkAvatar} alt="John Doe" />
          <AboutSub>
            I am an experienced full stack developer with over 10 years of experience.  I have worked on react , node js ,php  aws to name a few ..
          </AboutSub>
        </AboutHero>
        <AboutDesc>
        I have played various roles in my career like Enterprenuer, Consultant, 
        Web Solutions Architect Hands-On Programmer, did System/network related development. 
        <br/>Started my own tech startup providing shuttle services and successfully 
        sold the business. <br/> 
        Ex: Juniper Networks, Verismo,Licious.in.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:plizNoSp4m@domain.tld">Hi</a> or find me on other platforms:{' '}
            <a href="https://www.linkedin.com/in/sweekar-k-888975158/">Linkedin</a> &{' '}
            <a href="https://www.twitter.com/sweeekar/">Twitter</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 Portfolio sweekark.{' '}
          <a href="https://github.com/sweekark">Github Repository</a>. Made by{' '}
          <a href="https://www.linkedin.com/in/sweekar-k-888975158/">Sweekark</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index

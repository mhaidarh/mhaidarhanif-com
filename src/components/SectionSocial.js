import { h } from 'preact'
import styled from '@xstyled/emotion'

import socials from '../data/socials.json'

const SectionSocialContainers = styled.section`
  margin: 60px 0;
  display: flex;
  justify-content: center;
`

const SocialItems = styled.ul`
  display: flex;
  padding: 0;
  color: #f2c94c;
  list-style-type: none;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  li {
    margin: 0 15px;
  }
`

const SocialItem = styled.li``

const SectionSocial = () => (
  <SectionSocialContainers>
    <SocialItems>
      {socials.map(({ name, url }, index) => {
        return (
          <SocialItem key={index}>
            <a href={url} target='_blank'>
              {name}
            </a>
          </SocialItem>
        )
      })}
    </SocialItems>
  </SectionSocialContainers>
)

export default SectionSocial
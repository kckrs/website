import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Icon from 'components/Icon'
//
import { angle } from 'utils/Styles'

import { H2 } from 'components/Html'

import HubspotForm from 'components/HubspotForm'

const belowMobile = `@media(max-width: ${700}px)`

const Section = ({ children, ...rest }) => (
  <section {...rest}>
    <div className="inner">{children}</div>
  </section>
)

const SectionContactUs = styled(Section)`
  z-index: 0;
  .inner {
    max-width: ${props => props.theme.maxWidth}px;
    margin: 0 auto;
    padding: 10% 10%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    min-height: 100vh;
  }

  ${belowMobile} {
    .left,
    .right {
      flex: 1 1 100%;
      margin-left: 0;
      margin-right: 0;
    }
    .left {
      margin-bottom: 2rem;
    }
  }

  ${
    '' /* background: ${props => props.theme.colors.primaryDarker};
  color: white; */
  }

  ${angle('right')};

  &:after {
    display: none;
  }

  .inner {
    display: block;
    text-align: center;
  }
`

export default function Trial() {
  const router = useRouter()

  return (
    <SectionContactUs id="contact">
      <H2 full>Let's get you a PAA Expansion Deliverable!</H2>
      <Link href="/paa">
        <a className="back">
          <Icon i="arrow-left" /> Back
        </a>
      </Link>
      <HubspotForm
        id="6b446152-15d2-4c19-a6c8-fc7c66dcc413"
        onFormSubmitted={() => {
          if (typeof window !== 'undefined') {
            window.dataLayer.push({ event: 'paaContactUs' })
            router.push('../paa/success?contact=true')
          }
        }}
      />
    </SectionContactUs>
  )
}

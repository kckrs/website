import React, { Component } from 'react'
import styled, { css } from 'styled-components'
//
import Color from 'utils/Color'
import { angle } from 'utils/Styles'

import Head from 'components/Head'

import Link from 'next/link'
import {
  H2,
  H3,
  H4,
  H5,
  P,
  Ul,
  Li,
  Img,
  Div,
  Button,
  Strong,
} from 'components/Html'

const belowMobile = `@media(max-width: ${700}px)`
const belowTablet = `@media(max-width: ${1000}px)`

const Left = props => <div className="left" {...props} />
const Right = props => <div className="right" {...props} />
const Section = ({ children, ...rest }) => (
  <section {...rest}>
    <div className="inner">{children}</div>
  </section>
)

const section = css`
  z-index: 0;
  .inner {
    max-width: ${props => props.theme.maxWidth}px;
    margin: 0 auto;
    padding: 10% 10%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  img {
    width: 100%;
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
`

const layoutLeft = css`
  .left {
    flex: 2 1 200px;
    text-align: right;
    margin-right: 40px;
  }
  .right {
    flex: 3 1 300px;
  }
`

const layoutRight = css`
  .left {
    flex: 3 1 300px;
  }
  .right {
    margin-left: 40px;
    flex: 2 1 200px;
  }
`

const layoutLeftHalf = css`
  .left {
    flex: 1 1 300px;
    margin-right: 40px;
  }
  .right {
    flex: 1 1 300px;
  }
`

const layoutDark = css`
  background: ${props => props.theme.colors.primaryDarker};
  color: white;
`

const Centered = styled('div')`
  text-align: center;
  width: 100%;
`

const SectionKnowEverything = styled(Section)`
  ${section};
  ${layoutLeft};

  position: relative;
  background: radial-gradient(
    circle at center,
    ${props => props.theme.colors.primaryDarker} 20%,
    ${props => Color(props.theme.colors.primaryDarker).darken(10).toString()}
  );
  color: white;

  h4 {
    color: ${props => props.theme.colors.primaryLighter};
  }

  img {
    border-radius: 5px;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
  }

  .right {
    flex: 2 1 300px;
    img {
      max-width: 1500px;
      width: 220%;
    }
  }
`
const SectionTrackAllTheThings = styled(Section)`
  ${section};
  ${layoutDark};
  ${layoutRight};
  ${angle('right')};

  position: relative;

  .right {
    z-index: 0;
  }

  img {
    opacity: 1;
    border-radius: 5px;
    box-shadow: 0 0 30px 0 rgba(0; 0; 0; 0.2);
  }

  .allthethings {
    position: absolute;
    right: 0;
    bottom: -10px;
    width: 400px;
    opacity: 0.2;
    z-index: 0;
  }
`
const SectionRankData = styled(Section)`
  ${section};
  ${layoutLeftHalf};
  .right {
    img {
      opacity: 1;
      max-width: 940px;
      width: 140%;
      border-radius: 5px;
      box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
    }
  }
  .left {
    p {
      strong {
        color: ${props => props.theme.colors.primaryLighter};
      }
    }
  }
`
const SectionCompetitors = styled(Section)`
  ${section};
  ${layoutLeft};
  ${layoutDark};
  ${angle('right')};

  .left {
    direction: rtl;
    img {
      opacity: 1;
      max-width: 940px;
      width: 160%;
      border-radius: 5px;
      box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
    }
  }
  .right {
    p {
      strong {
        color: ${props => props.theme.colors.primaryLighter};
      }
    }
  }
`
const SectionDataJunkie = styled(Section)`
  ${section};
  ${layoutRight};

  text-align: center;

  .csv,
  .sql {
    flex: 1 1 30%;
  }
  .main {
    flex: 1 1 34%;
    margin: 0 3%;
  }
  img {
    width: 250px;
    max-width: 100%;
  }
  ${belowTablet} {
    .csv,
    .sql,
    .main {
      flex: 1 1 100%;
      margin-bottom: 3rem;
    }
  }
`
const SectionSchedules = styled(Section)`
  ${section};
  ${layoutDark};
  ${angle('right')};

  align-items: center;
  text-align: center;

  p {
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }

  img {
    width: 900px;
    max-width: 100%;
    border-radius: 5px;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
  }
`
const SectionCantAfford = styled(Section)`
  ${section};
  ${layoutRight};

  .right {
    img {
      opacity: 1;
      max-width: 940px;
      width: 140%;
      border-radius: 5px;
      box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
    }
  }
`

const rankDataImages = [
  require('public/img/rank.png'),
  require('public/img/adrank.png'),
  require('public/img/pixelheight.png'),
]

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      rankDataImageIndex: 0,
      rankDataImage: rankDataImages[0],
    }
  }
  componentDidMount() {
    this.rankDataImageInterval = window.setInterval(
      () =>
        this.setState(state => ({
          rankDataImageIndex: state.rankDataImageIndex + 1,
          rankDataImage: rankDataImages[(state.rankDataImageIndex + 1) % 3],
        })),
      2000
    )
  }
  componentWillUnmount() {
    window.clearInterval(this.rankDataImageInterval)
  }
  render() {
    const { rankDataImage } = this.state
    return (
      <div style={{ overflow: 'hidden' }}>
        <Head title="Enterprise Keyword Rank Tracker Tool - Website Ranking Checker - Enterprise Rank Tracking - Nozzle" />
        <main>
          <SectionKnowEverything>
            <Left>
              <H2>Know everything Google knows</H2>
              <H4>And deal with it.</H4>
              <P>
                If you want access to more enterprise level SERP data than any
                tool has ever offered, you've come to the right place. SEO data
                nerds drool over our keyword rank tracker.
              </P>
              <Link href="/trial">
                <Button color="success" burst>
                  I'd like a demo!
                </Button>
              </Link>
            </Left>
            <Right>
              <Img
                src={require('public/img/dashboard.jpg')}
                alt="Enterprise Keyword Rank Tracker Tool Dashboard"
              />
            </Right>
          </SectionKnowEverything>
          <SectionTrackAllTheThings>
            <Img
              className="allthethings"
              src={require('public/img/allthethings-white.png')}
            />
            <Left>
              <Centered>
                <H4>Don't just track the top result.</H4>
              </Centered>
              <Div>
                <Img
                  src={require('public/img/cnn-small.png')}
                  alt="SERP listing for CNN"
                />
              </Div>
              <Div>
                <Centered>
                  <H4>Get unlimited access to the entire SERP</H4>
                </Centered>
              </Div>
              <Img
                src={require('public/img/cnn.png')}
                alt="SERP Result Tracking for CNN"
              />
            </Left>
            <Right>
              <H2>Track all the things!</H2>
              <P>
                Most tools just tell you the top ranking page on your domain. We
                monitor your entire brand, including social media profiles and
                unlimited domain matches. There's a difference between knowing
                you're ranking #1 and owning the entire first page!
              </P>
              <P>
                Unlimited access doesn't just refer to today's SERP. We keep all
                your data FOREVER, so 3 years from now, you'll be able to look
                back and see what was ranking for "Pokemon Go" in 2016.
              </P>
              <Link href="/trial">
                <Button color="success" burst>
                  Start tracking today!
                </Button>
              </Link>{' '}
              <Link href="/features">
                <Button color="primary" burst>
                  How does it work?
                </Button>
              </Link>
            </Right>
          </SectionTrackAllTheThings>
          <SectionRankData>
            <Left>
              <H2 color="primaryDark">Rank data you can only find at Nozzle</H2>
              <H5 weight="regular">
                Track results by{' '}
                <Strong>Rank, Ad Adjusted Rank, Pixel Height</Strong> and more!
              </H5>
              <P>
                With 4 ads and rank #0 answer boxes, ranking #1 doesn’t mean
                what it used to. Nozzle won’t just tell you where you rank,
                we’ll tell you your ad adjusted rank, how many pixels down the
                page you are, whether a knowledge graph appeared and even what
                your prospective customer ate for breakfast.
              </P>
              <P>
                We include <Strong>over 350+ data points</Strong> for{' '}
                <Strong>every result on the serp</Strong> - no extra cost!
              </P>
              <Ul>
                <Li>search volume</Li>
                <Li>estimated traffic</Li>
                <Li>social shares</Li>
                <Li>Moz PA / DA</Li>
                <Li>inbound links</Li>
                <Li>product ad pricing</Li>
                <Li>sitelinks</Li>
                <Li>
                  <a
                    href="http://www.thegooglecache.com/canonicalized-url-is-noindex-nofollow.html"
                    target="blank"
                  >
                    Canonicalized URL is noindex
                  </a>
                </Li>
                <Li>star ratings</Li>
                <Li>but wait, there's more...</Li>
              </Ul>
              <p />
              <Link href="/features/#data">
                <Button burst>See the complete list</Button>
              </Link>{' '}
              <Link href="/trial">
                <Button color="success" burst>
                  Get the datas!
                </Button>
              </Link>
            </Left>
            <Right>
              <Img
                src={rankDataImage}
                alt="Website Ranking Checker that lists rank, ad adjusted rank, and pixel height"
              />
              {rankDataImages.map(img => (
                <Img key={img} src={img} style={{ display: 'none' }} />
              ))}
            </Right>
          </SectionRankData>
          <SectionCompetitors>
            <Left>
              <Img
                src={require('public/img/groupby.png')}
                alt="Enterprise Ranking Checker Dashboard"
              />
            </Left>
            <Right>
              <H3>
                Squash your competitors... even the ones you don't know about
                yet
              </H3>
              <H5 weight="regular">
                See share of voice by{' '}
                <Strong color="primaryLighter">
                  Domain, Subdomain, URL, and Brand
                </Strong>
              </H5>
              <P>
                Nozzle lets you track <Strong>unlimited competitors</Strong>, no
                questions asked. Heck, we'll let you track as much as you can
                handle. The SERP is yours to command!
              </P>
              <P>
                If you find a new competitor you haven't been tracking, add them
                and we'll even rewrite history for you. It'll be like you were
                monitoring them from the start!
              </P>
              <Link href="/trial">
                <Button color="success" burst>
                  Show me my competitors!
                </Button>
              </Link>{' '}
              <Link href="/features/#competition">
                <Button color="primary" burst>
                  How does it work?
                </Button>
              </Link>
            </Right>
          </SectionCompetitors>
          <SectionDataJunkie>
            <div className="csv">
              <Img
                src={require('public/img/csv.png')}
                alt="Download ranking data to CSV"
              />
            </div>
            <div className="main">
              <H3>A Data Junkie's Paradise</H3>
              <H5>CSV, SQL, API and BigQuery</H5>
              <P>
                Whether your thing is pivot tables or SQL JOIN's, you can access
                your data the way you're used to. Even better, we keep all your
                data forever, including the raw html. Consider it necessary
                tooling when dealing with millions of keywords. )
              </P>
              <Link href="/trial">
                <Button color="success" burst>
                  Fix me up with 1,000 keywords!
                </Button>
              </Link>{' '}
              <Link href="/features/#integration">
                <Button color="primary" burst>
                  Show all integrations
                </Button>
              </Link>
            </div>
            <div className="sql">
              <Img
                src={require('public/img/sql.png')}
                alt="Access your SEO ranking data with SQL"
              />
            </div>
          </SectionDataJunkie>
          <SectionSchedules>
            <H2 full>
              Get rankings on <em>your</em> schedule
            </H2>
            <P>
              Not all keywords are created equal. You're probably paying too
              much to track your long-tail keywords daily or you're only getting
              weekly data for your money making head terms. Say goodbye to those
              tools and say hello to the rank checker that will become your new
              best friend. Track your most important keywords daily, hourly or
              even every 5 minutes. Keep an eye on thousands more by scheduling
              them weekly or monthly without breaking the bank.
            </P>
            <Centered>
              <Div>
                <Img
                  src={require('public/img/schedules.png')}
                  alt="Keyword rank tracker with customized scheduling feature"
                />
              </Div>
            </Centered>
            <Centered>
              <Link href="/trial">
                <Button color="success" burst>
                  Give me flexibility, stat!
                </Button>
              </Link>{' '}
              <Link href="/features/#scheduling">
                <Button color="primary" burst>
                  Why does it matter?
                </Button>
              </Link>
            </Centered>
          </SectionSchedules>
          <SectionCantAfford>
            <Left>
              <H2>You can't afford to not try Nozzle</H2>
              <H5>
                No minimum spend, no qualification calls, white-glove
                onboarding, batteries included
              </H5>
              <P>
                After a free trial, getting started can cost you less per month
                than your secret santa gift this year. Seriously.
              </P>
              <Link href="/pricing">
                <Button burst>See Our Plans & Pricing</Button>
              </Link>{' '}
              <Link href="/trial">
                <Button color="success" burst>
                  Try it out!
                </Button>
              </Link>
            </Left>
          </SectionCantAfford>
        </main>
      </div>
    )
  }
}

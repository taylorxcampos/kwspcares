import React, { Component } from 'react';
import './App.css';
import KW from './kw-logo.png';
import RedDay from './redday.png';
import Gif from './giphy.gif';
import { Row, Col, Container, Button, Card, CardBody } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className='app-container'>
        {/* <div id="mybutton">
          <button class="donate">$</button>
        </div> */}
        <div className='header-content'>
          <img src={KW} className='logo' />
          <img src={RedDay} className='red-day-logo' />
          <img src={Gif} className='gif' /> 
          <div className='header-text'>
            <h1 style={{ letterSpacing: '5px' }} className='title'>
              ANNUAL BOWL-A-THON
            </h1>
            <p style={{ fontWeight: '100', fontStretch: 'expanded' }}>
              All proceeds to benefit:
            </p>
            <p style={{ fontSize: '32px' }}>
              <b>DINE ON US</b>
            </p>
            {/* <a
              href='#about-them'
              style={{ color: 'white', textDecoration: 'underline' }}
            >
              Click here to read their whole story
            </a> */}
            <br />
            <Button
              href='https://sites.google.com/site/friendshelpingfriendsnj2/register-pay-online'
              target='_blank'
              style={{ marginTop: '0px' }}
            >
              Donate Now
            </Button>
          </div>
        </div>

        <Container>
          <div className='cards'>
            <Row style={{ width: '100%' }}>
              <Col md='5'>
                <Card className='card-www'>
                  <CardBody>
                    <h4 className='red-header'>When</h4>
                    <p>
                      <h5>Thursday May 12, 2022</h5>
                      6-7PM Registration
                      <br />
                      7-9PM Shotgun Bowling!
                    </p>
                  </CardBody>
                </Card>

                <Card className='card-www'>
                  <CardBody>
                    <h4 className='red-header'>Where</h4>
                    <p>
                      <h5>Finnigans Bar and Bowl</h5>
                      101 Locust Street, Lakewood NJ 08701
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md='7'>
                <Card style={{ minHeight: '381px' }} className='card-www'>
                  <CardBody>
                    <h4 className='red-header'>Why</h4>
                    <p>
                      Keller Williams has RED Day on the second Thursday of May
                      every year, where all 900 offices and180,000 agents close
                      for business and help the community in some way, such as
                      cleaning up the beaches, helping in a community
                      shelter/food bank, or raising money for non-profits. This
                      Year, Keller Williams Shore Properties AND Keller Williams
                      Preferred Properties would be honored to raise money for
                      “Dine on Us” to thank local active Military for their
                      service and help support their local families.
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
        <div className='get-involved'>
          <Row style={{ width: '100%' }}>
            <Container>
              <h1 style={{ textAlign: 'center' }}>GET INVOLVED</h1>
              <h3 style={{ textAlign: 'center', color: '#b40101' }}>
                THE MINIMUM GOAL FOR EACH TEAM MEMBER IS TO RAISE{' '}
                <b>AT LEAST $300 OR $1500 PER TEAM</b>
              </h3>
              <p className='each-team'>
                Each Keller Williams Realtor will be the Captain of a bowling
                team. The Captain will bring 4 other team members from outside
                the company. There are several ways to sponsor . . .
              </p>
              <div className='cards'>
                <Row>
                  <Col md='12' lg='4' style={{ marginLeft: 'auto' }}>
                    <Card className='card-ind'>
                      <CardBody>
                        <h4>Friend/Family/Fixed Donation</h4>
                        <b>$10, $20, $50, etc.</b> - any amount you want
                      </CardBody>
                      <Button
                        style={{
                          bottom: '0',
                          display: 'block',
                          width: '50%',
                          textAlign: 'center',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          marginBottom: '15px',
                        }}
                        href='https://sites.google.com/site/friendshelpingfriendsnj2/register-pay-online'
                        target='_blank'
                      >
                        Donate
                      </Button>
                    </Card>
                  </Col>
                  <Col md='12' lg='4' style={{ marginRight: 'auto' }}>
                    <Card className='card-pin'>
                      <CardBody>
                        <h4>Friend/Family Per-Pin Donation</h4>
                        <b>ex. $0.50 per pin x 200 score = $100 donation</b> -
                        based on 2 hour bowling session
                      </CardBody>
                      <Button
                        style={{
                          bottom: '0',
                          display: 'block',
                          width: '50%',
                          textAlign: 'center',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          marginBottom: '15px',
                        }}
                        href='https://sites.google.com/site/friendshelpingfriendsnj2/register-pay-online'
                        target='_blank'
                      >
                        Donate
                      </Button>
                    </Card>
                  </Col>
                </Row>

                <h1 style={{ textAlign: 'center', marginTop: '30px' }}>
                  Corporate Sponsor Donations
                </h1>
                <h3 style={{ textAlign: 'center', color: '#b40101' }}>
                  Check must be received by <b>May 9th, 2022</b> for name to
                  appear on marketing materials
                </h3>
                <br />
                <Row>
                  {/* <Col md='12' lg='6'>
                    <Card className='card-bronze'>
                      <CardBody>
                        <h4>Bronze</h4>
                        <b>$250</b> - includes poster sized signage
                      </CardBody>
                      <Button
                        style={{
                          bottom: '0',
                          display: 'block',
                          width: '50%',
                          textAlign: 'center',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          marginBottom: '15px',
                        }}
                        href='https://sites.google.com/site/friendshelpingfriendsnj2/register-pay-online'
                        target='_blank'
                      >
                        Donate
                      </Button>
                    </Card>
                  </Col> */}
                  <Col md='12' lg='5' style={{ marginLeft: 'auto' }}>
                    <Card className='card-silver'>
                      <CardBody>
                        <h4>Silver</h4>
                        <b>$300</b> - includes poster sized signage
                      </CardBody>
                      <Button
                        style={{
                          bottom: '0',
                          display: 'block',
                          width: '40%',
                          textAlign: 'center',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          marginBottom: '15px',
                        }}
                        href='https://sites.google.com/site/friendshelpingfriendsnj2/register-pay-online'
                        target='_blank'
                      >
                        Donate
                      </Button>
                    </Card>
                  </Col>
                  <Col md='12' lg='5' style={{ marginRight: 'auto' }}>
                    <Card className='card-gold'>
                      <CardBody>
                        <h4>Gold</h4>
                        <b>$1500</b> - includes poster plus table at event and
                        video screening advertising above bowling lane
                      </CardBody>
                      <Button
                        style={{
                          bottom: '0',
                          display: 'block',
                          width: '40%',
                          textAlign: 'center',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          marginBottom: '15px',
                        }}
                        href='https://sites.google.com/site/friendshelpingfriendsnj2/register-pay-online'
                        target='_blank'
                      >
                        Donate
                      </Button>
                    </Card>
                  </Col>
                  {/* <Col md='12' lg='3'>
                    <Card className='card-platinum'>
                      <CardBody>
                        <h4>Platinum</h4>
                        <b>$5000</b> - includes everything in the previous level
                        plus, digital advertising on KWSP Public Digital
                        Billboard through the 2019 season
                      </CardBody>
                      <Button
                        style={{
                          bottom: '0',
                          display: 'block',
                          width: '50%',
                          textAlign: 'center',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          marginBottom: '15px',
                        }}
                        href='https://sites.google.com/site/friendshelpingfriendsnj2/register-pay-online'
                        target='_blank'
                      >
                        Donate
                      </Button>
                    </Card>
                  </Col> */}
                  <div
                    style={{
                      textAlign: 'center',
                      width: '100%',
                      color: 'rgb(180, 1, 1) !important',
                      fontSize: '20px',
                    }}
                  >
                    <h3>
                      <a
                        href='mailto:info@kwspcares.com'
                        style={{ color: 'rgb(180, 1, 1)' }}
                        rel='noopener noreferrer'
                      >
                        Corporate sponsors email your logo to info@kwspcares.com
                      </a>
                    </h3>
                  </div>
                </Row>
              </div>
            </Container>
          </Row>
          <div className='about-them' id='about-them'>
            <Container>
              <Row>
                <h2
                  style={{
                    textAlign: 'center',
                    width: '100%',
                  }}
                >
                  ABOUT THE GIESLER BROTHERS
                </h2>

                <p
                  style={{
                    marginBottom: '30px',
                    textAlign: 'center',
                    width: '80%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                >
                  "Friends Helping Friends" (Federal Tax ID 27-1260554) is a
                  local charity who raises funds to help those in need of
                  assistance. In the past 8 years they have raised over $600,000
                  for local friends in need - WITH ALL PROCEEDS GOING DIRECTLY
                  TO THE FAMILIES!
                </p>
                <Col lg='12' style={{ paddingLeft: '0px' }}>
                  <iframe
                    className='video'
                    src='https://player.vimeo.com/video/244536598'
                    style={{
                      width: '640px',
                      height: '360px',
                      float: 'right',
                      marginLeft: '20px',
                      marginBottom: '20px',
                    }}
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                  />
                  <p>
                    <h4>Learn more about why we are here</h4>
                    Two brothers, Patrick and Tyler, recent High School
                    graduates that have fallen on a very difficult situation.
                    They are good, hard working boys in a very difficult time.
                    Pat and Tyler lost their father at a very young age, then
                    had to deal with being abandoned. Their grandmother, who
                    they called Mom & Great-Grandmother stepped up to raise the
                    boys and unfortunately they lost their long-time family home
                    to Super Storm Sandy. Sandy took not only their home, but
                    all their personal belongings as well. Homeless for a time
                    then renting for a while, being evicted when their great
                    grandmother passed away, rendering them homeless once again.
                    Over the past few years they have bounced around from rental
                    homes and hotel rooms. At times, have lived out of their
                    mini-van. Throughout this time with the help of the Brick
                    Township High School community, Pat and Tyler have remained
                    focused on their goals. They each played 3 varsity sports
                    throughout High School, while holding down full time jobs to
                    help "Mom" with the bills. Pat and Tyler would come in from
                    practice, shower, get dressed, and go to work each night
                    after practices and on the weekends. The most amazing thing
                    about Pat and Tyler is they each have NEVER missed a
                    lifting, training or High School sport practice for any of
                    the teams they were on during their 4 years in High
                    School!!! They were always the hardest working boys on their
                    teams. Since graduating from H.S. in 2018, the boys and
                    "Mom" have been living in Wenke's Motel in Point Pleasant.
                    They have been working full-time at Wendy's in Brick to help
                    "Mom" with the bills along with attending Ocean County
                    College. Soon after graduation "Mom" was diagnosed with
                    cancer and had been in and out of hospitals until she
                    recently passed away. The boys are currently on their own at
                    the ages of 18 and 19. They ride their bikes to work or Uber
                    if the weather is bad. They are currently trying to balance
                    their college classes around their work schedule, and deal
                    with the recent loss of "Mom". We are asking you to help
                    these boys get their adult lives started off on the right
                    foot. Remember, any amount whatsoever is a help, thank you
                    very much. The funds raised are going to pay for food,
                    future rent payments, obtaining driver licenses, securing a
                    vehicle, and helping them create a stable and productive
                    life. Thanks again, we appreciate any and all help. Please
                    look for updates, as we will be sharing all the progress
                    that is made with all your help and support!
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          <div className='mike'>
            <h6>
              For more information contact Michael Little/Laura Ianiro <br /> P:
              732-797-9001
            </h6>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

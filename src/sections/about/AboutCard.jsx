import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            <span className="purple">
              BRIDGE OF HOPE GLOBAL PROJECTS COMMUNITY BASED ORGANISATION (BOHGP){' '}
            </span>
            is a community-based organization registered with the registrar of{' '}
            <span className="purple">CBOs, Kenya</span>
            at the Ministry of Internal Affairs and the Ministry of Gender, Labor, and Social
            Development.
            <br />
            <br />
            <h1 style={{ fontSize: '2.1em', paddingTop: '20px' }}>
              <strong className="purple">Location</strong>
            </h1>
            Our head office is located at Musamba Market, with the address: P.O. Box 130-50109. Upon
            resolution by our members, we may relocate our headquarters within Kenya and establish
            branch offices as necessary to further our activities and achieve our goals.
            <br />
            <br />
            <h1 style={{ fontSize: '2.1em', paddingTop: '20px' }}>
              <strong className="purple">Vision</strong>
            </h1>
            Communities where children and their caregivers are empowered to improve their own
            livelihood through appropriate and affordable alternatives.
            <br />
            <br />
            <h1 style={{ fontSize: '2.1em', paddingTop: '20px' }}>
              <strong className="purple">Mission</strong>
            </h1>
            To restore hope among vulnerable children and communities affected by poverty, sexual
            abuse, violence, disease, and other natural calamities.
            <br />
            <br />
            <h1 style={{ fontSize: '2.1em', paddingTop: '20px' }}>
              <strong className="purple">Main Objective</strong>
            </h1>
            To provide holistic transformation for young people and disadvantaged communities by
            offering basic education, training, empowerment, and exposure to life-changing
            innovations.
            <br />
            <br />
            <h1 style={{ fontSize: '2.1em', paddingTop: '20px' }}>
              <strong className="purple">Specific Objectives</strong>
            </h1>
            The Organization shall have the following specific objectives:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Mobilize resources and establish educational opportunities for
              vulnerable children in the community through school establishments.
            </li>
            <li className="about-activity">
              <ImPointRight /> Facilitate the rehabilitation of traumatized children through sports,
              music, dance, and drama.
            </li>
            <li className="about-activity">
              <ImPointRight /> Support community-led initiatives focusing on using sustainable
              technologies to enhance development.
            </li>
            <li className="about-activity">
              <ImPointRight /> Establish children&apos;s homes to provide basic needs and security
              in the community.
            </li>
            <li className="about-activity">
              <ImPointRight /> Establish hospitals, build capacity, and sensitize children and
              communities on sexual reproductive health, rights, and other preventable viral
              illnesses like HIV and chronic hepatitis.
            </li>
          </ul>
          <p style={{ color: 'rgb(155 126 172)' }}>&quot;Restoring Hope in the community&quot; </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

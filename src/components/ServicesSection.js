import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Web & Mobile App Dev"
            desc="I can create full-stack interactive & responsive web and mobile applications."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Blockchain Dapp Dev"
            desc="I can create DAPPs in popular Blockchains with secure Smart Contracts."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Web3 Dev"
            desc="I can give web3 solutions to your existing applications. (NFTs, SmartContracts etc...) "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}

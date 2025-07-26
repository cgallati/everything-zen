import { NextPage } from 'next';
import { Layout } from '../../components/Layout';
import { NextSeo } from 'next-seo';
import styled from 'styled-components';

const MaintenanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 2rem;
  text-align: center;
`;

const MaintenanceTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const MaintenanceMessage = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ContactInfo = styled.div`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  border-left: 4px solid #007bff;
`;

const PhoneNumber = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #007bff;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ReservePage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="RESERVE - System Maintenance"
        description="Our reservation system is temporarily down for maintenance. Please call Captain Todd to reserve your charter."
        canonical={'https://everythingzensailingcharters.com/reserve'}
      />
      <Layout>
        <MaintenanceContainer>
          <MaintenanceTitle>Reservation System Down for Maintenance</MaintenanceTitle>
          <MaintenanceMessage>
            We're currently performing maintenance on our online reservation system to better serve you. 
            We apologize for any inconvenience this may cause.
          </MaintenanceMessage>
          <ContactInfo>
            <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
              To reserve your Charleston Harbor catamaran charter, please call Captain Todd directly:
            </p>
            <PhoneNumber href="tel:8436709145">
              (843) 670-9145
            </PhoneNumber>
          </ContactInfo>
        </MaintenanceContainer>
      </Layout>
    </>
  );
};

export default ReservePage;
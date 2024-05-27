import { Layout, Page } from '../Layout/';
import {
  AddressFlex,
  ContactInfoCard,
  FormHeading,
  Input,
  SubmitButton,
  TextArea,
  ContactTitle,
  Phone,
  Address,
  SneakyAnchor,
  FullWidthImg,
} from './styles';
import { TileGrid, Tile } from '@everything-zen/ui-components';
import React, { FC } from 'react';

export const ContactUsPage: FC<{bannerText?: string}> = ({bannerText}) => {
  return (
    <Layout bannerText={bannerText}>
      <Page title={'contact us'}>
        <form
          name={'contact'}
          id={'contact-form'}
          method="POST"
          data-netlify="true"
          style={{ margin: '0 2rem 3.3rem' }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <FormHeading>GET IN TOUCH</FormHeading>
          <Input
            type={'text'}
            name={'name'}
            required={true}
            placeholder={'NAME'}
          />
          <Input
            type={'email'}
            name={'email'}
            required={true}
            placeholder={'EMAIL'}
          />
          <TextArea
            name={'message'}
            form={'contact-form'}
            required={true}
            placeholder={'MESSAGE'}
          />
          <SubmitButton type={'submit'} value={'SUBMIT'} />
        </form>
        <AddressFlex>
          <SneakyAnchor href="tel:+1-843-670-9145">
            <ContactInfoCard>
              <img
                src={'/icons/phone.svg'}
                alt={'phone icon'}
                width={'24px'}
                height={'24px'}
              />
              <ContactTitle>PHONE</ContactTitle>
              <Phone>
                843 - 670 - 9145
                <br />
              </Phone>
            </ContactInfoCard>
          </SneakyAnchor>
          <SneakyAnchor
            href={
              'https://maps.google.com/?q=24 Patriots Point Road, Mount Pleasant, SC'
            }
            target={'_blank'}
          >
            <ContactInfoCard>
              <img
                src={'/icons/location.svg'}
                alt={'map pin icon'}
                width={'22px'}
                height={'30px'}
              />
              <ContactTitle>ADDRESS</ContactTitle>
              <Address>
                24 Patriots Point Road <br /> Mount Pleasant, SC
              </Address>
            </ContactInfoCard>
          </SneakyAnchor>
        </AddressFlex>
        <SneakyAnchor
          href={
            'https://maps.google.com/?q=24 Patriots Point Road, Mount Pleasant, SC'
          }
          target={'_blank'}
        >
          <FullWidthImg
            src={'/ezlocation.jpg'}
            alt="Aerial view of the Charleston Harbor Marina."
            placeholder="blur"
          />
        </SneakyAnchor>
        <TileGrid>
          <div>
            <Tile
              photo={'/photos/relaxing-on-trampoline.jpg'}
              iconSrc={
                'https://www.instagram.com/p/CTOF6e2rPo_/?utm_source=ig_web_copy_link'
              }
            />
            <Tile
              photo={'/photos/sunset-smiles.jpg'}
              iconSrc={
                'https://www.instagram.com/p/CRy7Ibyh_vo/?utm_source=ig_web_copy_link'
              }
            />
          </div>
          <div>
            <Tile
              photo={'/photos/kids-at-the-helm.jpg'}
              iconSrc={
                'https://www.instagram.com/p/CRm4FyVh3ut/?utm_source=ig_web_copy_link'
              }
            />

            <Tile
              photo={'/photos/cocapts.jpg'}
              iconSrc={
                'https://www.instagram.com/p/CRc8HFnBgH1/?utm_source=ig_web_copy_link'
              }
            />
          </div>
        </TileGrid>
      </Page>
    </Layout>
  );
};

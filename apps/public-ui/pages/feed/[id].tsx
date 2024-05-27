import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { createClient } from 'contentful';
import { fetchBanner, fetchPaths } from '../../lib/content/contentfulPosts';
import { Layout } from '../../components/Layout';
import Image from 'next/image';

const PostDetailContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto auto;
  padding: 1rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  margin: auto; // Centers the wrapper on the page
  width: 100%;
  padding-bottom: 50%;
`;

const PostTitle = styled.h1`
  font: normal normal normal 20px/22px Source Sans Pro;
  text-align: center;
  @media (min-width: 600px) {
    font: normal normal normal 25px/32px Source Sans Pro;
  }
`;

const PostBody = styled.div`
  font: normal normal normal 12px/14px Source Sans Pro;
  line-height: 1.5;
  @media (min-width: 600px) {
    font: normal normal normal 16px/20px Source Sans Pro;
  }
`;

export default function PostDetail({ post, bannerText }) {
  const { title, featuredImage, content } = post.fields;

  return (
    <Layout bannerText={bannerText}>
      <PostDetailContainer>
        <ImageWrapper>
          {/*<PostImage src={featuredImage.fields.file.url} alt={title} />*/}
          <Image
            src={'https:' + featuredImage.fields.file.url}
            alt={title}
            layout={'fill'}
            objectFit={'cover'}
          />
        </ImageWrapper>
        <PostTitle>{title}</PostTitle>
        <PostBody>{documentToReactComponents(content)}</PostBody>
      </PostDetailContainer>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await fetchPaths();
  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntry(params.id);
  const bannerText = await fetchBanner();
  return {
    props: { post: res, bannerText },
    revalidate: 1,
  };
}

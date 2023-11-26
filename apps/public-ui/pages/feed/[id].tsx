import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { createClient } from 'contentful';
import { fetchPaths } from '../../lib/content/contentfulPosts';
import { Layout, Page } from '../../components/Layout';

const PostDetailContainer = styled.div`
  margin: auto;
  max-width: 800px;
`;

const PostImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

const PostTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
`;

const PostBody = styled.div`
  font-size: 1rem;
  line-height: 1.5;
`;

export default function PostDetail({ post }) {
  const { title, featuredImage, content } = post.fields;

  return (
    <Layout>
      <PostDetailContainer>
        <PostImage src={featuredImage.fields.file.url} alt={title} />
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

  return {
    props: { post: res },
    revalidate: 1,
  };
}

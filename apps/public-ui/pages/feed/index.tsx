import { Layout, Page } from '../../components/Layout';
import { NextPage } from 'next';
import { fetchEntries } from '../../lib/content/contentfulPosts';
import PostListItem from '../../components/FeedPage/PostListItem';
import styled from 'styled-components';

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Feed: NextPage = ({ posts }: { posts: any }) => {
  return (
    <Layout>
      <Page title={'UPDATES'}>
        <FeedContainer>
          {posts.map((post) => (
            <PostListItem key={post.sys.id} post={post} />
          ))}
        </FeedContainer>
      </Page>
    </Layout>
  );
};

export default Feed;

export async function getStaticProps() {
  const res = await fetchEntries();
  const posts = res.map((p) => {
    return p;
  });
  return {
    props: {
      posts,
    },
  };
}

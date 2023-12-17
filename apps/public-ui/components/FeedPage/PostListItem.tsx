import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const PostListItemContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 800px;
  margin-bottom: 5rem;
  padding: 0 20px;
  @media (min-width: 600px) {
    flex-direction: column;
  }
`;

const PostDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 60%;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  position: relative;
  max-width: 640px;
  margin: auto; // Centers the wrapper on the page
  width: 100%;
  padding-bottom: 50%;
`;


const PostTitle = styled.h2`
  font: normal normal normal 20px/18px Source Sans Pro;
  cursor: pointer;
  letter-spacing: 2px;
  color: #001d2c;
  text-align: center;

  @media (min-width: 600px) {
    font: normal normal normal 25px/32px Source Sans Pro;
  }
`;


const PostDescription = styled.p`
  font: normal normal 400 16px/18px Source Sans Pro;
  letter-spacing: 1px;
  color: #040505;
  margin: 0 ;
  @media (min-width: 600px) {
    font: normal normal 400 20px/30px Source Sans Pro;
  }
  cursor: auto;
`;

function PostListItem({ post }) {
  const { title, featuredImage, teaser } = post.fields;
  console.log(post.fields.teaser.content[0].content[0].value);

  return (
      <PostListItemContainer>
        <Link href={`/feed/${post.sys.id}`} passHref>
          <ImageWrapper>
            <Image
              src={'https:' + featuredImage.fields.file.url}
              alt={title}
              layout={'fill'}
              objectFit={'cover'}
              style={{cursor: 'pointer'}}
            />
          </ImageWrapper>
        </Link>
        <PostDetails>
          <Link href={`/feed/${post.sys.id}`} passHref>
            <PostTitle>{title}</PostTitle>
          </Link>
          <PostDescription>
            {teaser.content[0].content[0].value}
          </PostDescription>
        </PostDetails>
      </PostListItemContainer>
  );
}

export default PostListItem;

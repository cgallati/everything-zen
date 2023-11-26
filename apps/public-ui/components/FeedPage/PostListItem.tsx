import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const PostListItemContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //border: 1px solid #ddd;
  max-width: 800px;
  cursor: pointer;
  margin-bottom: 2rem;

  @media (min-width: 600px) {
    font: normal normal 400 17px/32px Source Sans Pro;
    flex-direction: column;
  }
`;

const PostDetails = styled.div`
  display: flex;
  flex-direction: column;
  //border: 1px solid #ddd;
  flex-basis: 60%;
  justify-content: center;
`;

const PostTitle = styled.h2`
  font: normal normal 600 32px/30px Source Sans Pro;
  letter-spacing: 2px;
  color: #001d2c;
  text-align: center;
`;
const PostDescription = styled.p`
  font: normal normal 400 18px/14px Source Sans Pro;
  letter-spacing: 1px;
  color: #040505;
  margin: 0 1.75rem 3.5rem;
  @media (min-width: 600px) {
    font: normal normal 400 17px/32px Source Sans Pro;
  }
`;

const imageRatio = 3 / 4;

function PostListItem({ post }) {
  const { title, featuredImage, teaser } = post.fields;
  console.log(post.fields.teaser.content[0].content[0].value);

  return (
    <Link href={`/feed/${post.sys.id}`} passHref>
      <PostListItemContainer>
        <Image
          src={'https:' + featuredImage.fields.file.url}
          alt={title}
          width={300}
          height={300 / imageRatio}
          objectFit={'cover'}
        />
        <PostDetails>
          <PostTitle>{title}</PostTitle>
          <PostDescription>
            {teaser.content[0].content[0].value}
          </PostDescription>
        </PostDetails>
      </PostListItemContainer>
    </Link>
  );
}

export default PostListItem;

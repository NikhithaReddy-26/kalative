import styled from "styled-components";
import {blogData} from '../pages/blogData';
import { useNavigate } from "react-router-dom";
const BlogComp = () => {
  const navigate = useNavigate();
  const limitedData = blogData.slice(0, 3);
  const handleReadNow = (id) => {
    navigate(`/data/${id}`);
  };
  return (
    <>
    {limitedData.map((data) => (
    <Container key={data.id} onClick={() => handleReadNow(data.id)}>
      <BlogImg src={data.image} />
      <Title>{data.title}</Title>
      <Date>{data.date}</Date>
      <Body>
        {data.desc}
      </Body>
    </Container>
    ))}
    </>
  );
};

const Container = styled.div`
  width: 370px;
  height: 420px;
  cursor:pointer;
`;
const BlogImg = styled.img`
  width: 100%;
  height:200px;
  object-fit: contain;
`;
const Title = styled.p`
  font-weight: 600;
  font-size: 24px;
  margin: 1rem 0 0.5rem;
  line-height: 36px;
`;
const Date = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #939393;
  margin: 0;
`;
const Body = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #636363;
  margin: 0.5rem 0;
`;

export default BlogComp;

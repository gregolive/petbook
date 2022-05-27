import styled from 'styled-components';

const Banner = styled.main`
  padding-top: 2rem;
  display: grid;
  gap: 3rem;
`;

const BannerSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;

  &:nth-child(3) {
    article {
      grid-column: 1 / -1;
    } 
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const BannerArticle = styled.article`
  h1 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
  }

  h2 {
    font-size: clamp(1.8rem, 3.5vw, 2.8rem);
    font-weight: 500;
  }

  p {
    font-size: 1.1rem;
    font-weight: 300;
    line-height: 1.6rem;
  }

  button:first-of-type {
    color: ${(props) => props.theme.custom.background};
    margin-right: 0.5rem;
  }

  @media screen and (max-width: 1024px) {
    grid-row: 1 / 2;
  }
`;

const Illustration = styled.img`
  height: auto;
  width: 90%;
  justify-self: center;

  @media screen and (max-width: 1024px) {
    width: min(25rem, 100%);
  }
`;

export { Banner, BannerSection, BannerArticle, Illustration };

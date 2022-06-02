import styled from 'styled-components';

const StyledPostFeed = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 2rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 2fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CenterFeed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const LeftFeed = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const RightFeed = styled.div`
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export { StyledPostFeed, CenterFeed, LeftFeed, RightFeed };

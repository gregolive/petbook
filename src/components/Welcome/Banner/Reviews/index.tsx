import styled from 'styled-components';
import cat from '../../../../assets/img/cat.png';
import dog from '../../../../assets/img/dog.png';
import fish from '../../../../assets/img/fish.png';

const StyledReviews = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Review = styled.div`
  border: 1px solid ${(props) => props.theme.custom.header};
  border-radius: 0.5rem;
  box-shadow: 3px 3px 6px ${(props) => props.theme.custom.header};
  padding: 1rem;
  text-align: center;
  justify-self: center;
  display: grid;
  justify-items: center;
  gap: 0.2rem;

  img {
    width: min(10rem, 100%);
  }

  p {
    font-style: italic;
    margin: 0;
  }
`;

const Reviews = () => {
  return (
    <StyledReviews>
      <Review>
        <img src={cat} alt='cat sticker' />
        <p>I love using petbook to show off my favorite meals!</p>
        <h3>- Luna</h3>
      </Review>

      <Review>
        <img src={fish} alt='fish sticker' />
        <p>My owner always takes pictures of my good side!</p>
        <h3>- Sashimi</h3>
      </Review>

      <Review>
        <img src={dog} alt='dog sticker' />
        <p>WOOF BARK BARK ARF GRRR RUFF RUFF BARK!</p>
        <h3>- Rex</h3>
      </Review>
    </StyledReviews>
  );
};

export default Reviews;

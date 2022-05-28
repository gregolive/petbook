import Button from '@mui/material/Button';
import hero from '../../../assets/img/hero.png';
import { Banner, BannerSection, BannerArticle, Illustration } from './styled';
import Timeline from './Timeline';
import Reviews from './Reviews';

interface BannerProps {
  setShowLogin: Function;
  setShowSignup: Function;  
};

const WelcomeBanner = ({ setShowLogin, setShowSignup }: BannerProps) => {
  return (
    <Banner>
      <BannerSection>
        <BannerArticle>
          <h1>Share your pet with the world!</h1>
          <p>
            Who says social media is only for humans?
            Connect with other pet lovers and their furry friends in a few simple clicks.
            It's a cuteness overload!
          </p>
          <Button onClick={() => setShowLogin(true)} variant='contained' disableElevation>Log in</Button>
          <Button onClick={() => setShowSignup(true)} variant='outlined'>Register</Button>
        </BannerArticle>
        <Illustration src={hero} alt='dog illustration' />
      </BannerSection>

      <BannerSection>
        <Timeline />
        <BannerArticle>
          <h2>Log your best memories together</h2>
          <p>
            Keep track of all your best times with your pet so you can look back anytime.
            That sure was a lot of treats!
          </p>
        </BannerArticle>
      </BannerSection>

      <BannerSection>
        <BannerArticle>
          <h2>Hear from some happy users</h2>
          <p>
            Keep track of all your best times with your pet so you can look back anytime.
            That sure was a lot of treats!
          </p>
          <Reviews />
        </BannerArticle>
      </BannerSection>
    </Banner>
  );
};

export default WelcomeBanner;

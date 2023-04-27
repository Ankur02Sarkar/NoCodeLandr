import { TextField, Button } from "@mui/material";
import "./Agency.css";
const Agency = () => {
  return (
    <div className="agency">
      <div className="header">
        <img className="bg-icon" alt="" src="/bg.svg" />
        <img className="img-icon" alt="" src="/img@2x.png" />
        <div className="text">
          <b className="great-software-is-container">
            <p className="great-software-is">Great software is</p>
            <p className="great-software-is">{`built with amazing `}</p>
            <p className="developers">developers</p>
          </b>
          <div className="lorem-ipsum-dolor">
            We help build and manage a team of world-class developers to bring
            your vision to life
          </div>
          <TextField
            className="feild"
            sx={{ width: 370 }}
            color="primary"
            variant="outlined"
            type="text"
            label="Subscribe newsletter"
            placeholder="Placeholder"
            size="medium"
            margin="none"
          />
          <Button
            className="button"
            sx={{ width: 180 }}
            variant="contained"
            color="primary"
          >
            Subscribe
          </Button>
        </div>
        <div className="menu">
          <img className="dividor-icon" alt="" src="/dividor.svg" />
          <div className="home-container">
            <span className="home-container1">
              <span className="home">Home Adversite</span>
              <span>{` `}</span>
              <span className="span"></span>
              <span>{`         `}</span>
              <span className="home">Supports</span>
              <span>{` `}</span>
              <span className="span"></span>
              <span>{`         `}</span>
              <span className="home">Contact</span>
              <span>{`         `}</span>
              <span className="home">About us</span>
            </span>
          </div>
          <Button
            className="button1"
            sx={{ width: 150 }}
            variant="outlined"
            color="primary"
          >
            Register Now
          </Button>
          <div className="logo">
            <img className="s-1-icon" alt="" src="/s-1.svg" />
            <b className="petro">StartupLanding</b>
          </div>
        </div>
        <div className="sponser">
          <div className="lorem-ipsum-dolor1">Sponsored by:</div>
          <img className="logo-icon" alt="" src="/logo.svg" />
        </div>
      </div>
      <div className="features">
        <div className="frame-parent">
          <img className="frame-icon" alt="" src="/frame.svg" />
          <b className="fast-performance">Unlimited Customization</b>
          <div className="get-your-blood">
            Get your blood tests delivered at home collect a sample from
            the your blood tests.
          </div>
        </div>
        <div className="frame-group">
          <img className="frame-icon" alt="" src="/frame1.svg" />
          <b className="fast-performance">{`Vector shape & resizable`}</b>
          <div className="get-your-blood">
            Get your blood tests delivered at home collect a sample from
            the your blood tests.
          </div>
        </div>
        <div className="frame">
          <div className="frame1">
            <img
              className="rounded-rectangle-528"
              alt=""
              src="/rounded-rectangle-528.svg"
            />
            <img className="l0001-icon" alt="" src="/l0001@2x.png" />
          </div>
          <b className="fast-performance">Editing freedom</b>
          <div className="get-your-blood">
            Get your blood tests delivered at home collect a sample from
            the your blood tests.
          </div>
        </div>
        <div className="frame-container">
          <img className="frame-icon" alt="" src="/frame2.svg" />
          <b className="fast-performance">Best Award history</b>
          <div className="get-your-blood">
            Get your blood tests delivered at home collect a sample from
            the your blood tests.
          </div>
        </div>
        <b className="smart-jackpots-that">Meet exciting feature of app</b>
        <b className="core-features">Quality features</b>
      </div>
      <div className="boost">
        <img className="img-icon1" alt="" src="/img1.svg" />
        <div className="text1">
          <b className="smart-jackpots-that-container">
            <p className="great-software-is">Boost your agencies</p>
            <p className="great-software-is">by choosing Ninja</p>
            <p className="developers">Developers</p>
          </b>
          <div className="lorem-ipsum-dolor2">
            Create custom landing pages with Shades that convert more visitors
            than any website, no coding required.
          </div>
          <div className="lorem-ipsum-dolor-container">
            <p className="great-software-is">Unlimited design possibility</p>
            <p className="great-software-is">Completely responsive features</p>
            <p className="developers">Easy to customize plugins</p>
          </div>
          <img
            className="combined-shape-16072"
            alt=""
            src="/combined-shape-16072.svg"
          />
          <img
            className="combined-shape-16072"
            alt=""
            src="/combined-shape-16073.svg"
          />
          <img
            className="combined-shape-16072"
            alt=""
            src="/combined-shape-16073.svg"
          />
          <div className="btn">
            <b className="lorem-ipsum-dolor3">Learn more</b>
            <img className="vector-icon" alt="" src="/vector.svg" />
          </div>
        </div>
      </div>
      <div className="intro-video">
        <div className="btn1">
          <b className="lorem-ipsum-dolor3">Explore Details</b>
          <img className="vector-icon" alt="" src="/vector1.svg" />
        </div>
        <img className="video-icon" alt="" src="/video@2x.png" />
        <div className="get-your-blood4">
          We believe it’s important for everyone to have access to software
          especially when it comes to digital learning be navigate.
        </div>
        <b className="smart-jackpots-that1">
          Leading companies trust us to develop software
        </b>
      </div>
      <div className="testimonial">
        <div className="user-parent">
          <div className="user">
            <div className="fast-performance4">Pierre Hackett</div>
            <div className="get-your-blood5">VP of Engineering</div>
            <img className="user-child" alt="" src="/ellipse-6@2x.png" />
          </div>
          <div className="user1">
            <div className="fast-performance4">Natalia Sanz</div>
            <div className="get-your-blood5">Head of Technology</div>
            <img className="user-child" alt="" src="/ellipse-61@2x.png" />
          </div>
          <div className="user2">
            <div className="fast-performance4">Ece Akman</div>
            <div className="get-your-blood5">Senior Marketer</div>
            <img className="user-child" alt="" src="/ellipse-62@2x.png" />
          </div>
          <div className="active-line" />
        </div>
        <div className="client-testimonial">
          They are doing amazing job with hundred percent customer satisfaction,
          Love their work and would like to work with them again
        </div>
        <div className="title">
          <b className="core-features1">Customer Comments</b>
          <b className="smart-jackpots-that2">Why customers love us</b>
        </div>
      </div>
      <div className="customer-support">
        <div className="text2">
          <b className="smart-jackpots-that3">
            Free Customer Support to ensure what you like to expect
          </b>
          <div className="get-your-blood-container">
            <p className="great-software-is">
              We offer a risk-free trial period of up to two weeks. You will
              only have to pay if you are happy with the developer and wish to
              continue. If you are unsatisfied, we’ll refund payment or fix
              issues on our dime period customers.
            </p>
            <p className="great-software-is"></p>
          </div>
          <div className="lorem-ipsum-dolor5">
            If you are happy with the developer and wish to continue. If you are
            unsatisfied, we’ll refund payment or fix issues.
          </div>
          <div className="btn2">
            <b className="lorem-ipsum-dolor3">Learn more</b>
            <img className="vector-icon" alt="" src="/vector.svg" />
          </div>
        </div>
        <img className="img-icon2" alt="" src="/img2@2x.png" />
      </div>
      <div className="blog">
        <img className="bg-icon1" alt="" src="/bg1.svg" />
        <div className="course-1">
          <b className="fast-performance7">
            How to work with prototype design with adobe xd featuring tools
          </b>
          <div className="comments">
            <img className="vector-icon3" alt="" src="/vector2.svg" />
            <div className="get-your-blood8">22 Comments</div>
          </div>
          <img className="image-icon" alt="" src="/image@2x.png" />
        </div>
        <div className="course-2">
          <img className="bg-icon2" alt="" src="/bg2.svg" />
          <b className="fast-performance7">
            Create multiple artboard by using figma prototyping development
          </b>
          <div className="comments">
            <img className="vector-icon3" alt="" src="/vector2.svg" />
            <div className="get-your-blood8">15 Comments</div>
          </div>
          <img className="image-icon" alt="" src="/image1@2x.png" />
        </div>
        <div className="course-3">
          <b className="fast-performance7">
            Convert your web layout theming easily with sketch zeplin extension
          </b>
          <div className="comments">
            <img className="vector-icon3" alt="" src="/vector2.svg" />
            <div className="get-your-blood8">18 Comments</div>
          </div>
          <img className="image-icon" alt="" src="/image2@2x.png" />
        </div>
        <b className="smart-jackpots-that4">Tutorials that people love most</b>
        <b className="core-features2">Quality features</b>
      </div>
      <div className="footer">
        <img className="bg-icon3" alt="" src="/bg3.svg" />
        <div className="open-a-new-support-ticket">
          <img className="bg-icon1" alt="" src="/bg4.svg" />
          <img className="pattarn-icon" alt="" src="/pattarn.svg" />
          <Button
            className="btn3"
            sx={{ width: 260 }}
            variant="outlined"
            color="primary"
          >
            HIRE DEVELOPERS
          </Button>
          <b className="hire-the-worlds-container">
            <p className="great-software-is">{`Hire the world’s best developers `}</p>
            <p className="developers">and designers around!</p>
          </b>
        </div>
        <div className="bottom-footer">
          <div className="home-adversite-supports">
            Home Adversite Supports Marketing FAQ
          </div>
          <div className="copyright-by-2019">Copyright by 2019 Redq, Inc</div>
          <div className="logo1">
            <img className="s-1-icon" alt="" src="/s-1.svg" />
            <b className="petro">StartupLanding</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agency;

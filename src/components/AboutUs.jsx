// hooks
import useTitle from "./hooks/useTitle";

const AboutUs = () => {
  // title
  useTitle("React Spotify - ℹ");

  return (
    <div className="d-flex flex-column justify-content-center m-auto p-3">
      <div>
        <h5>
          Made with <span className="text-danger">❤</span> by{" "}
          <a
            href="https://parham-ab.netlify.app/"
            target={"_blank"}
            rel="noreferrer"
            className="text-primary"
          >
            {" "}
            Parham Abolghasemi
          </a>
        </h5>
      </div>
      <hr />
      <div>
        <p>
          Copyright <sup>©</sup> Parham Abolghasemi 2022 All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

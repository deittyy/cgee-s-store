const Home = () => {
  return (
    <div className="hero-video">
      <video autoPlay muted loop playsInline>
        <source
          src="/cgee thinks.mp4"
          type="video/mp4"
        />
      </video>
      <div className="hero-overlay">
        <div>
          <img src="./cgee.png" />

          <p>Cgee thinks it fitsss</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

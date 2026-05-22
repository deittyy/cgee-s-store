const Home = () => {
  const videoUrl =
    "https://ik.imagekit.io/vmbswzj1s/tr:original/videos/homepage-bg.mp4";

  return (
    <div className="hero-video">
      <video autoPlay muted loop playsInline key={videoUrl}>
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div className="hero-overlay">
        <div>
          <h1>Cgee_here</h1>
          <p>Nigeria • Multiversal • Vintage Purple</p>
        </div>
      </div>
    </div>
  );
};

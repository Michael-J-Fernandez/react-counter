import starImg from "../star.png";

const Stars = ({ count }) => {

  const starDisplay = Array(count)
    .fill(starImg)
    .map((star, i) => {
      return <img src={star} alt="Star icon" key={i}></img>;
    });

  return (
    <div className="stars">
      {starDisplay}
    </div>
  );
};

export default Stars;

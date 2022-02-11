import propTypes from "prop-types";

function MovieDetail({
  year,
  runtime,
  downloaded,
  like,
  coverImg,
  title,
  description,
  genres,
}) {
  return (
    <div>
      <img src={coverImg} alt={title}></img>
      <h2>{title}</h2>
      <h4>{year}</h4>
      <span>{`runtime: ${runtime} downloaded: ${downloaded} like: ${like}`}</span>
      <p>{description}</p>
      {genres ? (
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

MovieDetail.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  // genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default MovieDetail;

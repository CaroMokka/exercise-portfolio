function Card(props) {
  return (
    <>
      <div className="card" style={{ width: 16 + "rem" }}>
        <img
          src={props.img}
          className="card-img-top"
          alt="tokio"
        />
        <div className="card-body d-flex flex-column align-items-around">
          <h3 className="card-title">{props.title}</h3>
          <p className="card-text">{props.text}</p>
          <a href="#" className="btn btn-dark">
            Show more...
          </a>
        </div>
      </div>
    </>
  );
}
export default Card;

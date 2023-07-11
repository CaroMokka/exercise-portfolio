function Card(props) {
  return (
    <>
      <div className="card" style={{ width: 16 + "rem" }}>
        <img
          src="https://data2.nssmag.com/images/galleries/34772/cover-tokyo-orizz.jpg"
          className="card-img-top"
          alt="tokio"
        />
        <div className="card-body d-flex flex-column align-items-around">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <a href="#" className="btn btn-dark">
            Show More...
          </a>
        </div>
      </div>
    </>
  );
}
export default Card;

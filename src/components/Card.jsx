const Card = ({ image, title, nidn,noTelp }) => {
  return (
    <div>
      <div className="container mb-4 mt-3">
        <div className="row">
          <div className="card" style={{ width: "18rem" }}>
            <img src={image} className="image"  alt="..." />
            <div className="card-body">
              <h5 className="title">{title}</h5>
              <p className="content">
                <label className="nidn">NIDN: {nidn}</label><br/>
                <label className="noTelp">No telepon: {noTelp}</label>
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

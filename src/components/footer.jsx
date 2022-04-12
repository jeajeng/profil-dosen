const Footer = () => {
  return (
    <div>
      <footer className=" text-center text-lg-start text-white" style={{backgroundColor:"#3b5998"}}>
        {/* Grid container */}
        <div className="container p-4">
          {/*Grid row*/}
          <div className="row">
            {/*Grid column*/}
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">Desripsi</h5>
              <p>
               Informasi tentang dosen STIKOM PGRI BANYUWANGI
              </p>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">Media</h5>
              <p>
                www.stikombanyuwangi.ac.id
              </p>
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
        {/* Copyright */}
      </footer>
    </div>
  );
};

export default Footer;

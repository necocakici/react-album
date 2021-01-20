import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AlbumsContext } from "../App";

const AlbumList = () => {
  const context = useContext(AlbumsContext);

  return (
    <div className="section-center">
      <div>
        <h2>
          <span>Albüm Listesi</span>
          <Link style={{ marginLeft: 50 }} to="/cart">
            Sepetim
          </Link>
        </h2>
      </div>

      <div className="container">
        <div className="row">
          {context.state.albumList.map((album) => (
            <div key={album.id} className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img height="300" src={album.image} alt={album.author} />
                <div className="card-body">
                  <h5 className="card-text">{album.name}</h5>
                  <h6 className="card-text">{album.author}</h6>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        onClick={() => {
                          context.addToCart(album);
                        }}
                        type="button"
                        className="btn btn-outline-success"
                      >
                        <strong>Sepete Ekle!</strong>
                      </button>
                      <Link to={`/album/${album.name}`}>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          İncele
                        </button>
                      </Link>
                    </div>
                    <p>
                      <b>{album.price}</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumList;

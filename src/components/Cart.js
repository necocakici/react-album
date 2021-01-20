import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AlbumsContext } from "../App";

const Cart = () => {
  const context = useContext(AlbumsContext);

  const totalCartAmount = context.state.cart
    .reduce((total, album) => (total = total + album.price * album.count), 0)
    .toFixed(2);

  return (
    <div className="section-center">
      <h2>
        <Link to="/">Album Listesi</Link>
        <span style={{ marginLeft: 50 }}>Sepetim</span>
      </h2>
      <h3>Toplam sepet tutarı: ${totalCartAmount}</h3>
      {context.state.cart.length > 0 ? (
        context.state.cart.map((album) => (
          <div key={album.id} className="album">
            <img src={album.image} alt={album.name} />
            <div>
              <h4>{album.name}</h4>
              <p>Sanatçı: {album.author}</p>
              <p>Fiyat: &#8378;{album.price}</p>
              <p>Toplam: &#8378;{(album.price * album.count).toFixed(2)}</p>
              <p>Sepetinizde bu albümden toplam {album.count} adet var.</p>
              <button onClick={() => context.decrease(album.id)}>-</button>
              <button onClick={() => context.removeFromCart(album.id)}>
                Sepetten Çıkar
              </button>
              <button onClick={() => context.increase(album.id)}>+</button>
            </div>
          </div>
        ))
      ) : (
        <h1>Sepetinizde albüm bulunmamaktadır!</h1>
      )}
    </div>
  );
};

export default Cart;

import "./App.css";
import { createContext, useState } from "react";
import Categories from "./components/Categories";
import Header from "./components/Header";
import AlbumList from "./components/AlbumList";
import Cart from "./components/Cart";
import Album from "./components/Album";
import { data } from "./data";
import { Route, Link } from "react-router-dom";

export const AlbumsContext = createContext();

const App = () => {
  const [state, setState] = useState({
    albumList: data,
    cart: [],
  });

  const filterCategories = (genre) => {
    if (typeof genre === "string") {
      setState({
        ...state,
        albumList: data.filter((item) => item.genre === genre),
      });
    }else{
      setState({
        ...state,
        albumList: data,
      });
    }
  };

  const addToCart = (album) => {
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === album.id)
        ? state.cart.map((cartItem) =>
            cartItem.id === album.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...album, count: 1 }],
    });
  };
  const increase = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      ),
    });
  };
  const decrease = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id && cartItem.count > 1
          ? { ...cartItem, count: cartItem.count - 1 }
          : cartItem
      ),
    });
  };
  const removeFromCart = (id) => {
    setState({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== id),
    });
  };

  return (
    <AlbumsContext.Provider
      value={{
        state: state,
        addToCart,
        increase,
        decrease,
        removeFromCart,
        filterCategories,
      }}
    >
      <div>
        <Header />
        <Categories />
        <Route exact path="/" component={AlbumList} />
        <Route path="/cart" component={Cart} />
        <Route
          path="/album/:name"
          render={(renderProps) => {
            const album = state.albumList.find(
              (album) => album.name === renderProps.match.params.name
            );
            return <Album album={album} {...renderProps} />;
          }}
        />
      </div>
    </AlbumsContext.Provider>
  );
};

export default App;

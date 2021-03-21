import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://media.gettyimages.com/photos/the-veu-de-noiva-waterfall-in-chapada-dos-guimaraes-national-park-picture-id144023881?k=6&m=144023881&s=612x612&w=0&h=5HfwUS4mBejQ8mdbT77Qg_A2l9j8MbDeNWK0VMFdYDA="
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGlzbGFuZCUyMG9mJTIwYmFsaXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://images.unsplash.com/photo-1520936113839-69b3b2475037?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVuJTIwdHJhdmVsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="https://images.unsplash.com/photo-1507491172689-b0d76aff90a7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGxheWluZyUyMGZvb3RiYWxsJTIwb24lMjBtb3VudGFpbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="https://images.unsplash.com/photo-1461237439866-5a557710c921?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzZXJ0JTIwdG91ciUyMGluJTIwc2FoYXJhJTIwZGVzZXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

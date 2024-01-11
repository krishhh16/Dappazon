import React from "react";


export default function Section({ title, items, togglePop }) {
  return (
    <div>
      <div className="cards__section">
        <h3 id={title}>{title}</h3>
        <hr />
        <div className="cards">
          {items.map((item, index) => {
            return (
              <>
                <div key={index} onClick={() => togglePop(item)}>
                  <div className="card__image">
                    <img src={item.image} alt="Item" />
                  </div>
                </div>
                <div className="card__info">
                  <h4>{item.name}</h4>
                  <h5>Rating: {item.rating} out of 5</h5>
                  <p>Cost: {item.cost.toString()} ETH</p>
                </div>
              </>
            )

          })}
        </div>
      </div>
    </div>
  )
}

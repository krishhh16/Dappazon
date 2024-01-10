import React from "react";


export default function Section({ title, items, togglePop }) {
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <hr />
        <div>
          {items.map((item, index) => {
            return (
              <>
                <div key={index} onClick={() => togglePop(item)}>
                  <div>
                    <img src={item.image} alt="Item" />
                  </div>
                </div>
                <div>
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

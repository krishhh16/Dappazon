import { useEffect, useState } from 'react';
import { ethers } from 'ethers';



export default function Product({ item, provider, account, dappaon, togglePop }) {
  return (
    <div>
      <div>
        <div>
          <img src={item.image} alt="Product" />
        </div>
      </div>
    </div>
  )
}

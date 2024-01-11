import { ethers } from 'ethers'
const Navigation = ({ account, setAccount }) => {
  const connectHandler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    console.log(accounts[0])
    setAccount(accounts[0])
    console.log('connecting.....')
  }
  return (
    <nav>
      <div className="nav__brand">
        Dappazon
      </div>
      <input
        type='text'
        className="nav__search"
      />
      {account ? (
        <button
          type="button"
          className='nav__connect'
        >
          {account.slice(0, 5) + "..." + account.slice(35, -1)}
        </button>

      ) : (
        <button
          type='button'
          className='nav__connect'
          onClick={
            connectHandler
          }
        >
          Connect
        </button>
      )}

      <ul className='nav__links'>
        <li><a href='#Clothing & Jewelry'>Clothing & Jewelry</a></li>
        <li><a href='#Electronics & Gadgets'>Electronics & Gadgets</a></li>
        <li><a href='#Toys & Gaming'>Toys & Gaming</a></li>
      </ul>
    </nav>
  )
}

export default Navigation;

import {ethers} from 'ethers'
const Navigation = ({account, setAccount}) => {
    const connectHandler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        console.log(accounts[0])
        setAccount(accounts[0])
        console.log('connecting.....')
    }
    return (
        <nav style={{display: "flex"}}>
            <div>
                Dappazon
            </div>
            <input
                type = 'text'
            />
            {account ? (
            <button 
                type= "button"
            >
                {account.slice(0,5) + "..." + account.slice(35, -1)}
            </button>
                
            ) :(
                <button
                    type='button'
                    onClick={
                        connectHandler
                    }
                >
                    Connect
                </button>
            )}
        </nav>
    )
}

export default Navigation;
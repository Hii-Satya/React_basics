import { useState } from 'react'
import './App.css'
import InputBox from "./components/Inputbox"
import useCurrencyInfo from './hooks/currencyConverterHook'
function App() {
const [to ,setTo] = useState("usd");
const [from,setFrom] =useState("usd")
const [amount ,setAmount] = useState(0)
const[convertedAmount,setConvertedAmount] = useState(0)

//calling custom created hook 
const currencyInfo=useCurrencyInfo(from)
const option =Object.keys(currencyInfo)

const swap =()=>{
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
}
 const convert =()=>{
  setConvertedAmount(amount *currencyInfo[to]);
 }
   return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage:`url('https://i.pinimg.com/originals/cb/fc/fd/cbfcfd7b0e3818c3f9ec996625460eb2.jpg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                           e.preventDefault();
                           convert(); 
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={option}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount)=>setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-2 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={option}
                                onCurrencyChange = {(currency)=>  setTo(currency) }
                                selectCurrency={from}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
  }
export default App

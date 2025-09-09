import { useState } from 'react'
import './App.css'
import { InputBox } from './component'//we have index file that get called by defalut so we don't need to traverse like we do in below import 
import useCurrencyInfo from './hooks/01_currencyInfo'

function App() {

  const [amount , setAmount]= useState(0)
  const [from ,setFrom ]= useState("usd")
  const [to ,setTo]= useState("inr")
  const [convertedAmount , setConvertedAmount]= useState(0)

  //using hook 
  const CurrencyInfo = useCurrencyInfo(from)// as currency info requires data entered by user 
  //this above currencyInfo stores the data and we require key in order to show options to users

  const options= Object.keys(CurrencyInfo)//that all the option user have to choose

  //functionality of swap
  const swap = function(){
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert= ()=>{
    setConvertedAmount(amount * CurrencyInfo[to])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://cdn.pixabay.com/photo/2025/06/26/04/14/man-9681098_1280.jpg')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            // onCurrencyChange={(currency)=>setAmount(amount)}
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
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="TO"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency)=>setTo(currency)}
                            selectCurrency={to}
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

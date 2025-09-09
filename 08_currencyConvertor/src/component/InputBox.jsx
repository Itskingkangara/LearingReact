import { useId } from "react";

function InputBox({
    label,//to diplay "TO" or "FROM"
    amount,
    onAmountChange,//as this componet is responsible for amount change so we need to use for useState
    onCurrencyChange,
    currencyOptions=[],//its comes in array format and to prevent from app crash in conditon of no response
    selectCurrency='usd',//usd for by defalt value
    amountDisable= false, //not nessacary as it give comfort to change th e
    currencyDisabled=false,
    className = ""
}) {
   
    const amountInputId= useId() //this is give unique value in return , a hook provided by react

    return (
        // here we use `` becz we want to inject some class that make this componet versatile
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label  htmlFor={amountInputId}
                className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable} //by defalt its false means it is enable but 
                    //can be diabled
                    value={amount}
                    onChange={(e)=>onAmountChange && 
                    onAmountChange(Number(e.target.value))} //before && onAmount... is used to check is there any function availabel 
                    //is yes then only it execute the function so this functionality help to avoid the crash

                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}// to get default value
                    disabled={currencyDisabled}
                    onChange={(e)=>
                        onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                         {/* we are going to use a loop in it  as we need value  */}
                        {currencyOptions.map((currency)=>(
                            <option key={currency}
                            value={currency}
                            >
                                {currency}
                            </option>
                        )
                        )}
                
                </select>
            </div>
        </div>
    );
}   

export default InputBox; //this is good way to export but for bigger projects there exists
                        //better way
                        //by createing new file in component folder that import all componet
                        //so in main file we need to import single file only 




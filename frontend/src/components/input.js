function  Input({label, handleChange, value}) {
    return(
      <div>
        <label>Enter {label}</label>
        <input type="text" name={label} onChange={handleChange} value={value}/>
      </div>  
  )
}

export default Input;


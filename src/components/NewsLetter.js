import React,{useState} from "react";

function Form(){
    const [newsLetter, setNewsLetter] = useState(false);

    function handleNewsLetterChange(event){
        setNewsLetter(event.target.checked);
    }

    return(
        <form>
            <label htmlFor="newsLetter">subscribe to our newsLetter</label>
                <input type="checkbox" id="newsLetter" onChange={handleNewsLetterChange} n checked={newsLetter}/>
                
                <button type="submit">Submit</button>
        </form>
    );
}
export default Form;
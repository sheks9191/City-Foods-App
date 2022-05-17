import { useState, useRef } from "react"

const isValidEmail = input => {
    var re =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(input.toString().toLowerCase());
}
const NewsLetterForm = () => {

  const newsLetterInput = useRef();
  const [enteredValidEmail, setEnteredValidEmail] = useState(true)
  const [newsLetterConfirmation, setNewsLetterConfirmation] = useState(false)

     const addNewsLetterHandler = async (newsLetterData) => {
       
      await fetch('https://city-foods-c4c09-default-rtdb.firebaseio.com/newsletter.json', {
         method: 'POST',
         body: JSON.stringify(newsLetterData),
         headers: {
          'Content-Type': 'application/json'
        }
       })
       
       setNewsLetterConfirmation(true)
       newsLetterInput.current.value = '';
  }


  const submitNewsLetterHandler = e => {
    e.preventDefault();
    const enteredNewsInput = newsLetterInput.current.value;
    const validNewsEmail = isValidEmail(enteredNewsInput);

    setEnteredValidEmail(validNewsEmail)

    if(!validNewsEmail) {
      return;
    }

    addNewsLetterHandler(enteredNewsInput)
  }



  return (
    <form className="newsletter" onSubmit={submitNewsLetterHandler}>
        <h4>Kindly subscribes to our newsletter to get all the latest news</h4>
        <div className="input-group">
             {!enteredValidEmail && !newsLetterConfirmation && <p className="news-error">Please enter a Valid Email !</p>}
             { newsLetterConfirmation && <p style={{color:'rgb(113, 243, 113)'}}>Your Email has been submitted successfully.</p>}
            <input type="text" placeholder="Email address" ref={newsLetterInput}/>
            <button type="submit">Subscribe</button>
        </div>
    </form>
  )
}

export default NewsLetterForm
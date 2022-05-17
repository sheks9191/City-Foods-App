import { useState } from "react"
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm"
import Loading from "../components/Loading";
import Card from "../Shared/Card";




const Contact = () => {
  const [loading, setLoading ] = useState(false);
  const [contactConfirmation, setContactConfirmation] = useState(false);

  const addFormHandler = async (formData) => {
      setLoading(true)
      await fetch('https://city-foods-c4c09-default-rtdb.firebaseio.com/contacts.json', {
         method: 'POST',
         body: JSON.stringify(formData),
         headers: {
          'Content-Type': 'application/json'
        }
       })
       setLoading(false)
       setContactConfirmation(true)
  }

  const confirmationMessage = 
  <Card>
    <div className="confirmation-message">
        <p >Your information has been submitted successfully. Thanks for contacting us !</p>
         <Link to='/' style={{textDecoration: 'none'}}>
            <button className="confirm-btn">Home</button>
        </Link>
     </div>
  </Card> 

  return (
    <main>
        {!loading && !contactConfirmation && <ContactForm onAdd={addFormHandler}/>}
        {loading && <Loading/>}
        {!loading && contactConfirmation && confirmationMessage}
    </main>
    
  )
}

export default Contact
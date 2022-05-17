import { useRef, useState } from "react";
import { Link } from "react-router-dom"

const emptyInput = input => input.trim() === '';
const elevenDigits = input => input.trim().length >= 10;
const isValidEmail = input => {
    var re =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(input.toString().toLowerCase());
}

const ContactForm = ({onAdd}) => {


    const nameInputContactRef = useRef();
    const nameTwoInputContactRef = useRef();
    const phoneInputContactRef = useRef();
    const emailInputContactRef = useRef();
    const textAreaContactRef = useRef();

   const [validContactInput, setValidContactInput] = useState({
         names:true,
         nameTwo: true,
         phone: true,
         email:true,
         text:true,
    })


    const submitContactHandler = e => {
      e.preventDefault();

    const inputContactName = nameInputContactRef.current.value;
    const inputContactNameTwo = nameTwoInputContactRef.current.value;
    const inputContactPhone = phoneInputContactRef.current.value;
    const inputContactEmail = emailInputContactRef.current.value;
    const inputContactTextArea = textAreaContactRef.current.value;
    
    const validName = !emptyInput(inputContactName);
    const validNameTwo = !emptyInput(inputContactNameTwo);
    const validTextArea = !emptyInput(inputContactTextArea)
    const validEmail = isValidEmail(inputContactEmail);
    const validPhone = elevenDigits(inputContactPhone);

    setValidContactInput({
        names:validName,
        nameTwo:validNameTwo,
        email:validEmail,
        phone:validPhone,
        text: validTextArea,
    })

     if(!validName && !validNameTwo && !validEmail && !validPhone && !validTextArea) {
      return;
    }

    onAdd({
      nameOne:inputContactName,
      nameTwo:inputContactNameTwo,
      email: inputContactEmail,
      phone: inputContactPhone,
      text:inputContactTextArea,
    })

    };

  return (
     <div className="contact-container">
      <div className="contact-title">
        <h1>Contact Us</h1>
        <Link to='/' style={{textDecoration: 'none'}}>
            <small>Home</small>
        </Link>  
      </div>

      <form  className="contact" onSubmit={submitContactHandler}>
        <div className="contact-form" >
           
        <div className="control">
            <label htmlFor="name" className="required">First Name</label>
            <input type="text" id="name" placeholder="First Name" ref={nameInputContactRef}/>
             {!validContactInput.names && <p className="contact-error">Please enter a valid Name !</p>}
        </div>

        <div className="control">
            <label htmlFor="name" className="required">Last Name</label>
            <input type="text" id="name" placeholder="Last Name" ref={nameTwoInputContactRef}/>
             {!validContactInput.nameTwo && <p className="contact-error">Please enter a valid Name !</p>}
        </div>

         <div className="control">
            <label htmlFor="email" className="required">Email</label>
            <input type="text" id="email" placeholder="Email" ref={emailInputContactRef}/>
             {!validContactInput.email && <p className="contact-error">Please enter a valid Email Address !</p>}
        </div>

        <div className="control">
            <label htmlFor="phone"className="required" >Phone (+234)</label>
            <input type="text" id="phone" placeholder="Phone" ref={phoneInputContactRef}/>
             {!validContactInput.phone && <p className="contact-error">Please enter a Phone Number (Aleast 10 digits) !</p>}
        </div>

        <div className="control">
            <label htmlFor="message" className="required">Message</label>
            <textarea id="message" placeholder="Message" ref={textAreaContactRef}></textarea> 
             {!validContactInput.text && <p className="contact-error">Please enter a valid text !</p>}  
        </div>

        </div>
         <div>
            <button type="submit" className="submit-btn">Submit</button>
         </div>
        
      </form>
    </div>
  )
}

export default ContactForm
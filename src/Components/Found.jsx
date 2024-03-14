import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './index.css';

export default function Found() {
    const [showInput, setShowInput] = useState(false);

    const handleInputClick = () => {
        setShowInput(true);
    }

    const handleSubmit = () => {
        const nameInput = document.querySelector('input[type="text"]').value.trim();
        const emailInput = document.querySelector('input[type="email"]').value.trim();
        const messageInput = document.querySelector('textarea').value.trim();

        if (!nameInput || !emailInput || !messageInput) {
            alert('Please fill in all fields.');
        } else {
            alert('Message sent!');
            setShowInput(false);
            Navigate('/');
        }
    }

    return (
        <div id="contact" className="contact-container">
            <div className="contact-content">
                <h1>Want to collaborate for a project?</h1>
                <p>I am always open for discussion of product design and collaboration</p>
                <button className="hire-button" onClick={handleInputClick}>Message me</button>
            </div>
            <div className="contact-details">
                <p className='p'>Contact Me:</p>
                <p><a href="tel:+1234567890">Phone: +1234567890</a></p>
                <p><a href="mailto:your_email@gmail.com">Email: your_email@gmail.com</a></p>
            </div>
            {showInput && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowInput(false)}>&times;</span>
                        <input type="text" placeholder='Enter your name'/>
                        <input type="email" placeholder='Enter your email' />
                        <textarea cols="30" rows="10" placeholder='Leave your Message'></textarea> 
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            )}
        </div>
    );
}

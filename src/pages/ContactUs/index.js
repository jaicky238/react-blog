import React from 'react'
import './style.css'
import SideBar from '../../components/SideBar'
import Card from '../../components/HOC/Card'

function ContactUs() {
    return (
        <div className="contactUs-container">
           <div className="contactus">
                <Card>
                    <h3>Contact Us</h3>
                    <form className="form-style">
                        <input className="input" type="text" placeholder="name" required/>
                        <input className="input" type="email" placeholder="email" required/>
                        <input className="input" type="text" placeholder="Mobile number" required/>
                        <textarea  placeholder="Message"></textarea>
                        <button type="submit" className="submit">Submit</button>

                    </form>
                </Card>
           </div>
           <SideBar/>
        </div>
    )
}

export default ContactUs

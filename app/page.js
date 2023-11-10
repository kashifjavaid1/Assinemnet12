'use client'
import { useState } from 'react';

import './globals.css'
function Page() {
  const [firstname, setname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [conpassword, setconpassword] = useState('');
  const [phone, setnumber] = useState('');
  const [cnic, setcnic] = useState('');
  const [city, setcity] = useState('');
  const [adress, setadress] = useState('');
  const [gender, setgender] = useState('');
  const [depertment, setdepertment] = useState('');
  return (
    <>
      <div className="login-container">
        <h1>Student Form</h1>
        <form >
          <div className="form-group">
            <label htmlFor="firstname" >First Name</label>
            <input type="text" placeholder='First Name' onChange={(e) => setname(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="lastname" >Last Name</label>
            <input type="text" placeholder='Last Name' onChange={(e) => setlastname(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email" >Email</label>
            <input type="Email" placeholder='Last Name' onChange={(e) => setemail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Password' onChange={(event) => setpassword(event.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input type="password" placeholder='confirm Password' onChange={(event) => setconpassword(event.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="number" placeholder='+92' onChange={(event) => setnumber(event.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="cnic">CNIC</label>
            <input type="number" placeholder='Cnic' onChange={(event) => setcnic(event.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" placeholder='City' onChange={(event) => setcity(event.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="Adress">Adress</label>
            <input type="text" placeholder='Adress' onChange={(e) => setadress(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <input type="text" placeholder='Gender' onChange={(e) => setgender(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="depertment">Depertment</label>
            <input type="text" placeholder='Depertment' onChange={(e) => setdepertment(e.target.value)} />
          </div>
          <div>
            <h3>First Name :  <span>{firstname}</span></h3>
            <h3>Last Name :  <span>{lastname}</span></h3>
            <h3>Enter Email: <span>{email}</span></h3>
            <h3>Password: <span>{password}</span></h3>
            <h3>confirm Password: <span>{conpassword}</span></h3>
            <h3>Phone Number: <span>{phone}</span></h3>
            <h3>Enter CNIC: <span>{cnic}</span></h3>
            <h3>Enter City: <span>{city}</span></h3>
            <h3>Enter Adress: <span>{adress}</span></h3>
            <h3>Gender: <span>{gender}</span></h3>
            <h3>Enter Depertment: <span>{depertment}</span></h3>
          </div>
        </form>
      </div>

    </>
  )
}
export default Page;
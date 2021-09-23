import React from 'react'
import styles from '../../styles/hireform.module.css'
import { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [message, setMessage] = useState('');
     const [sent, setSent] = useState(false)

     const sendForm = (e) =>{
         e.preventDefault();
         
         let data = {
             name,
             email,
             message,
         };
         console.log(data)
         fetch('../api/contact', {
            method: 'post',
            headers:{
                'Accept':'application/json, text/plain, */*',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
          }).then((res)=>{
              if(res.status === 200){
                  setSent(true)
                  setName('')
                  setMessage('')
                  setEmail('')
              }
          });
     };

    return (
        <>
        <form class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
      <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Password
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"/>
      <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
</form>
        </>	
    )
}
export default Contact

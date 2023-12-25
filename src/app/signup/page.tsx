"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios"


export default function SignupPage() {
    const [user, setuser] = useState({
        email: "",
        password: "",
        username: ""
    });

    const onSignup = async () => {

    }

    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <h1>Signup</h1>
            <hr />
            <label htmlFor="username">Username</label>
            <input
               className='px-2 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
                type="text"
                id="username"
                value={user.username}
                onChange={(e) => setuser({ ...user, email: e.target.value })}
                placeholder='Username'
            />
        </div>
            <label htmlFor="email">email</label>
            <input
               className='px-2 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
                type="text"
                id="email"
                value={user.email}
                onChange={(e) => setuser({ ...user, username: e.target.value })}
                placeholder='Username'
            />
        </div>
            <label htmlFor="username">Username</label>
            <input
               className='px-2 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
                type="text"
                id="username"
                value={user.username}
                onChange={(e) => setuser({ ...username, username: e.target.value })}
                placeholder='Username'
            />
        </div>
    )
}
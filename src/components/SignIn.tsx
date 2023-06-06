import * as React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios";

export function SignIn() {
    const login = useGoogleLogin({
        onSuccess: async response => {
            try {
                let data = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        "Authorization": `Bearer ${response.access_token}`
                    }
                })
                console.log(data); 
            }
            catch(err) {
                console.log(err);
            }
        }
    })

    return(
        <>
            <button onClick={() => login()}>
                Login com Google
            </button>
        </>
    )
}
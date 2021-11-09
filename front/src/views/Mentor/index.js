import React, { useState } from 'react'
import Card from '../components/Card'

function Mentor() {
    const [userMentor, setUserMentor] = useState("");
    const [passMentor, setPassMentor] = useState("");

    const registrarMentor = () => {
        // const jsonMentor = {
        //     user: userMentor,
        //     pass: passMentor
        // };
        const jsonMentor = {
            username: userMentor,
            firstName: passMentor,
            lastName: "DefectoTest"
        };
        console.log(jsonMentor);
        // const result = postData("localhost:4000/users", jsonMentor);
        fetch("http://localhost:4000/users",{method: "post", body: JSON.stringify(jsonMentor)})
        .then(result =>{
            console.log(result);
        }).catch(error =>{
            console.log(error);
        })
        
    }

    // const postData = async(url = '', data = {}) => {
    //     const response = await fetch(url, {
    //       method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //       mode: 'cors', // no-cors, *cors, same-origin
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(data)
    //     });
    //     return response.json();
    //   }

    return (
        <div className="flex flex-col">
            <Card title="Registro de mentor">
                <form>
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                            <div className="mb-3 mr-2 text-sm">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                                    Username
                                </label>
                                <input value={userMentor}
                                    onChange={ ({target: {value}}) => setUserMentor(value) } 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                            </div>
                            <div className="mb-3 text-sm">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input value={passMentor}
                                    autoComplete="current-password"
                                    onChange={ ({target: {value}}) => setPassMentor(value) }
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                            </div>
                        </div>
                        <div className="items-center text-sm">
                            <button onClick={registrarMentor} 
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Registrar
                            </button>
                        </div>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default Mentor

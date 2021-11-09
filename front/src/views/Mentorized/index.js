import React, { useState } from 'react'
import Card from '../components/Card'

function Mentorized() {
    const [userMentorized, setUserMentorized] = useState("");
    const [passMentorized, setPassMentorized] = useState("");

    const registrarMentorizado = () => {
        const jsonMentorizado = {
            user: userMentorized,
            pass: passMentorized
        };
        console.log(jsonMentorizado);
    }
    return (
        <div className="flex flex-col">
            <Card title="Registro de mentorizado">
                <form>
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                            <div className="mb-3 mr-2 text-sm">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                                    Username
                                </label>
                                <input value={userMentorized}
                                    onChange={ ({target: {value}}) => setUserMentorized(value) }  
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                            </div>
                            <div className="mb-3 text-sm">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input value={passMentorized}
                                    autoComplete="current-password"
                                    onChange={ ({target: {value}}) => setPassMentorized(value) }  
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                            </div>
                        </div>
                        <div className="items-center text-sm">
                            <button onClick={registrarMentorizado}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Registrar
                            </button>
                        </div>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default Mentorized

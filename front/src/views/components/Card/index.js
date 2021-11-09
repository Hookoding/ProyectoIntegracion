import React from 'react'

function Card(props) {
    return (
        <div className="place-items-center mb-2">
            <div className="shadow-lg rounded-xl p-4 bg-white relative overflow-hidden">
                <div className="w-full h-full block">
                    <div className="flex items-center border-b-2 mb-2 py-2">
                        <div className="font-medium font-sans">
                            {props.title}
                        </div>
                    </div>
                    <div className="flex my-2">
                        {props.children}
                    </div>
                    <div className="w-full h-2 bg-blue-200 rounded-full">
                        <div className="w-3/3 h-full text-center text-xs text-white bg-blue-600 rounded-full">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card

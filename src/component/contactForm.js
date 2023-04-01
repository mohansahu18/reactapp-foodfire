import React, { useState } from "react";
function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log({ name, email, message });
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="w-full md:w-1/2 px-4">
            <h1 className="text-4xl font-bold mb-4">Contact</h1>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input
                    className="mb-4 py-2 px-4 rounded-lg border-2 border-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <input
                    className="mb-4 py-2 px-4 rounded-lg border-2 border-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <textarea
                    className="mb-4 py-2 px-4 rounded-lg border-2 border-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />

                <button className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out" type="submit">
                    Submit
                </button>
            </form>
        </div>

    );
}

export default ContactForm;

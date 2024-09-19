import { useState } from "react";

const Array = () => {
    const [input , setInput] = useState({
        title: '',
        description: '',
    })

    const [submit , setSubmit] = useState([]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit((prev) => [...prev , input])
        console.log(`${submit}`)
        setInput({
            title: '',
            description: '',
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={input.title} onChange={handleChange}/>
                <textarea name="description" id="" value={input.description} onChange={handleChange}></textarea>
                <button>Submit</button>
            </form>

            {submit.map((v,idx) => (
                <div key={idx}>
                    <p><strong>Title:</strong> {v.title}</p>
                    <p><strong>Description:</strong> {v.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Array;
import {useState} from "react"
import {FaSignInAlt} from "react-icons/fa"
import {toast} from "react-toastify"

function Login() {
    const [formData, setFormData] = useState({
        email: '', 
        password: ''
    })

    const { email, password } = formData;

    function onChange(e) {
        setFormData(prevState => {
            return (
                {
                    ...prevState,
                    [e.target.name]: e.target.value
                }
            )
        })
    }

    function onSubmit(e) {
        e.preventDefault()
    }
    return (
        <>
        <section className="heading">
            <h1>
            <FaSignInAlt/> Please log in to get support
            </h1>
            <p>Log in </p>
        </section>

        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="email" className="form-control"
                    id="email" name="email" value={email} onChange={onChange} 
                    placeholder="Enter your email" required/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control"
                    id="password" name="password" value={password} onChange={onChange} 
                    placeholder="Enter password" required/>
                </div>
                <div className="form-group">
                    <button className="btn btn-block">Submit</button>
                </div>
            </form>
        </section>
        </>
    )
}

export default Login
import { useForm } from '../hooks/useForm'

export const FormComponent = () => {

    const initialForm = {
        email: '',
        password: ''
    }

    const {formState, email, password, onInputChange } = useForm(initialForm)

    const onSubmit = () => {
        event.preventDefault()
        console.log(formState)
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" placeholder="example@gmail.com" name="email" value={email} onChange={onInputChange}></input>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" name="password" value={password} onChange={onInputChange}></input>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

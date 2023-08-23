import { useRef, useEffect } from 'react'
import { useForm } from '../hooks/useForm'

export const FormComponent = () => {

    const focusRef = useRef()

    const initialForm = {
        email: '',
        password: ''
    }

    const { formState, email, password, onInputChange } = useForm(initialForm)

    const onSubmit = () => {
        event.preventDefault()
        console.log(formState)
    }

    useEffect(() => {
        focusRef.current.focus()
    }, [])

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <input ref={focusRef} type="email" className="form-control" placeholder="Email" name="email" value={email} onChange={onInputChange}></input>
            </div>
            <div className="mb-3">
                <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={onInputChange}></input>
            </div>
            <div className="btn">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}

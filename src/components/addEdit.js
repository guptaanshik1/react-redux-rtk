import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAddBugsMutation } from '../services/bugsApi'

const AddEdit = () => {
    const [createBug, resPost] = useAddBugsMutation()

    let lastId
    const [inputs, setInputs] = useState({
        description: '',
        resolved: ''
    })

    const history = useHistory()

    const handleInputs = e => {
        const { name, value } = e.target

        setInputs(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const { description, resolved } = inputs
        const dataToBeAdded = {
            id: ++lastId,
            description,
            resolved
        }

        createBug(dataToBeAdded)
        history.push('/')
    }

    const { description, resolved } = inputs
  return (
    <form onSubmit={handleSubmit}>
        Description: <input type="text" name="description" value={description} onChange={handleInputs} />
        Resolved: <input type="text" name="resolved" value={resolved} onChange={handleInputs} />
        <button>Add Bug</button>
    </form>
  )
}

export default AddEdit
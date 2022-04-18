import React from 'react'
import { Link } from 'react-router-dom'
import { useGetBugsQuery, useDeleteBugMutation } from '../services/bugsApi'

const Home = () => {

    const { data, isLoading } = useGetBugsQuery()
    const [deleteBug, resDelete] = useDeleteBugMutation()
    if (isLoading) return <div>Loading....</div>

    const handleDelete = id => {
        deleteBug(id)
    }

    const onEdit = () => {

    }

  return (
    <React.Fragment>
        <Link to="/add">Add</Link>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>DESCRIPTION</th>
                    <th>RESOLVED</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.map(d => {
                        return (
                            <tr key={d.id}>
                                <td>{d.id}</td>
                                <td>{d.description}</td>
                                <td>{d.resolved ? 'True' : 'False'}</td>
                                <td>
                                    <Link to={`edit/${d.id}`}>UPDATE</Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(d.id)}>DELETE</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </React.Fragment>
  )
}

export default Home
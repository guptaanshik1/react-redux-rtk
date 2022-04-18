import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import {
  useGetSingleBugQuery,
  useUpdateBugMutation,
} from "../services/bugsApi";

const Edit = () => {
  const [inputs, setInputs] = useState({
    description: "",
    resolved: "",
  });

  const { id } = useParams();
  const history = useHistory()

  const { data, isLoading } = useGetSingleBugQuery();
  const [updateBug, resUpdate] = useUpdateBugMutation()
  // console.log(data);
  
  useEffect(() => {
    if (data) setInputs({
      description: data.description,
      resolved: data.resolved
    })
  }, [data])

  const handleInputs = (e) => {
    const { name, value } = e.target;

    setInputs((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { description, resolved } = inputs;

    const dataToBeUpdated = {
      id,
      description,
      resolved,
    };

    updateBug(dataToBeUpdated)
    history.push('/')
  };

  const { description, resolved } = inputs;
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        Description:
        <input name="description" value={description} onChange={handleInputs} />
        Resolved:
        <input name="resolved" value={resolved} onChange={handleInputs} />
        <button>Edit</button>
      </form>
    </React.Fragment>
  );
};

export default Edit;

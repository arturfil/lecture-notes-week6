import { useState } from "react";

const useForm = (obj) => {
  const [state, setState] = useState(obj)


  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
    console.log(state)
  }

  const resetForm = () => {
    setState(obj);
  }

  return {
    ...state,
    resetForm,
    handleChange
  }
}

export default useForm;
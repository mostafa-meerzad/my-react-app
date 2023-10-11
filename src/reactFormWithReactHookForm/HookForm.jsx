import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

function HookForm() {
  const { register, handleSubmit, formState:{errors} } = useForm();

  const onSubmit = (data) => {
    console.log("form data taken from the user is as following ");
    console.log(data);
    // console.log("form errors happened in the form is as following ");
    // console.log(errors);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}  >
      <label htmlFor="userName" style={errors.userName &&{color:"red"}}>Name</label>

      <input
        type="text"
        name="userName"
        {...register("userName", { required: true })}
      />
      <br />
      <input type="email"  {...register("userEmail")} placeholder="Your email"  />
      <br />
      <br />

      {errors.userName && <Span>this field is required</Span>}
      <br />
      <select name="gender" id="" {...register("gender")}>
        <option value="male">male</option>
        <option value="female">female</option>
        <option value="other">other</option>
      </select>
      <br />
      <input type="number"  {...register("number", {min:1, max:10})}/>
      <div style={ {borderColor:errors.number && "red", width:100, height:50, borderWidth:2, borderStyle:"solid"}}></div>

      <br />
      <button type="submit" >submit</button>
    </form>
  );
}

const Span = styled.span`
  
  color:red;
  
`

export default HookForm;

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

function Search({onSearch}) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmitSearch = (data) => {
    onSearch(data.query);
    reset({
      query: "",
    });
  };

  return (
    <form
      style={{ width: 350, margin: "20px auto" }}
      onSubmit={handleSubmit(onSubmitSearch)}
    >
      <div style={{ marginBottom: 8 }}>
        <input
          style={{ width: "100%" }}
          name="query"
          ref={register}
          placeholder="You have to search by pokemons Id or name"
        />
      </div>
      <button>Search</button>
    </form>
  );
}

  export default Search
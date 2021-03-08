
import { useForm } from "react-hook-form";

function Search({onSearch, options}) {
  const { register, handleSubmit, reset } = useForm();

  
  const onSubmitSearch = (data) => {
    onSearch(data.query);
    reset({
      query: "",
    });
  };

  const onChangeOption = (query) => {
    onSearch(query.target.value)
    console.log(query.target.value);
  }
  
  const optionsMap = options.map((option) => {
    return <option  value={option.name}>{option.name}</option>
  })
  
  return (
   <div>
     <form
      style={{ width: 350, margin: "20px auto" }}
      onSubmit={handleSubmit(onSubmitSearch)}
    >
      <div style={{ marginBottom: 8, display: "flex" }}>
        <input
          className="searchbox"
          name="query"
          ref={register}
          placeholder="Search by Id or name type"
        />
      <button><img width="80px" alt="" src={"http://www.pngall.com/wp-content/uploads/5/Pokemon-Go-Logo-PNG-Download-Image.png"}/></button>
      </div>
    </form>
    <select onChange={onChangeOption}>
      <option>Select a type</option>
      {optionsMap.length ? optionsMap : null}
    </select>
   </div>
  );
}

  export default Search
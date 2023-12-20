import { useState } from "react";
import FileInput from "./FileInput";
import RatingInput from "./RatingInput";

const INTIAL_VALUES = {
  title:"",
  rating:0,
  content:"",
  imgUrl:null,
};

function ReviewForm({onSubmit, onSubmitSuccess}) {
  const [values, setValues] = useState({
    title: "",
    rating: 0,
    content: "",
    imgUrl: null,
  });

  const handleChange = (name, value) => {
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
      const {review} = await onSubmit("movie", values);
      onSubmitSuccess(review);
    }catch(error){
      return;

    }finally{

    }
    setValues(INTIAL_VALUES);
  };

  
  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <FileInput name="imgUrl" value={values.imgUrl} onChange={handleChange} />
      <input
        type="text"
        name="title"
        value={values.title}
        onChange={handleInputChange}
      />
      <RatingInput
        type="number"
        name="rating"
        value={values.rating}
        onChange={handleChange}
      />
      <textarea
        name="content"
        value={values.content}
        onChange={handleInputChange}
      />
      <button type="submit">확인</button>
    </form>
  );
}

export default ReviewForm;

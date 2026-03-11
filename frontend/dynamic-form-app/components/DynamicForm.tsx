import { useForm } from "react-hook-form";
import FieldRenderer from "./FieldRenderer";
import formData from "../data/form.json";

export default function DynamicForm() {

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    localStorage.setItem("signupData", JSON.stringify(data));
    alert("Form Submitted");
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      {formData.data.map((field) => (
        <FieldRenderer
          key={field.id}
          field={field}
          register={register}
        />
      ))}

      <button type="submit">Submit</button>

    </form>
  );
}
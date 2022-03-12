import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import './TableForm.css';

export default function TableForm({addFeild}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "options",
    }

  );
  const onSubmit = async (_data) => {
    addFeild(_data)
    
  };

  console.log(watch("example"));

  //   type=>select from array (typename ,id)
  // name =>input
  // is_mandatrory=>checkbox
  // options =[name =>input , has_comment =>checkbox]

  const arrType = [
    { value: 1, label: "TYPE_STRING " },
    { value: 2, label: "TYPE_TEXT " },
    { value: 3, label: "TYPE_NUMBER " },
    { value: 4, label: "TYPE_DROPLIST " },
    { value: 5, label: "TYPE_CHECKBOX " },
    { value: 6, label: "TYPE_RADIO " },
    { value: 7, label: "TYPE_FILE " },
    { value: 8, label: "TYPE_IMAGE " },
    { value: 9, label: "TYPE_DATE_HIJRI  " },
    { value: 10, label: " TYPE_DATE " },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <input {...register("name", { required: true })} placeholder="enter name" className="input_1" />
      {errors.exampleRequired && <span>This field is required</span>}
     <div className="d-flex justify-content-between">
     <div className="form-group form-check">
        <input
          type="checkbox"
          {...register("is_mandatory")}
          id="is_mandatory"
          className={`form-check-input ${
            errors.is_mandatory ? "is-invalid" : ""
          }`}

         
        />
        <label htmlFor="is_mandatory" className="form-check-label">
          Is Mandatory?
        </label>
        <div className="invalid-feedback">{errors.is_mandatory?.message}</div>
      </div>
      <select
      className="select"
        name="cars"
        id="cars"
        form="carform"
        {...register("type", { required: true })}
      >
        {arrType?.map((item) => {
          return (
            <option key={item.value} value={item?.value}>
              {item?.label}
            </option>
          );
        })}
      </select>
      <button
      className="add_option"
        type="button"
        onClick={() => append({  })}
      >
        Add Options
      </button>
     </div>
      {fields.map((field, index) => (
        <>
          <input
          className="comment"
          placeholder="add comment"
            key={field.id} // important to include key with field's id
            {...register(`options.${index}.name`)}
          />
          <input
          className="check_comment"
            type="checkbox"
            key={field.id} // important to include key with field's id
            {...register(`options.${index}.has_comment`)}
          />
          <label htmlFor="has_comment" className="form-check-label">
            Has comment?
          </label>
        </>
      ))}
      <input type="submit" className="btn_submit" />
    </form>
  );
}

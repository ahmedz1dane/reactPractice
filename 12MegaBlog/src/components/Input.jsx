import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", classname = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}

      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${classname}`}
        ref={ref}
        // DOUBT : why is it used ..... Find it when using this input in the parent component
        // ANS : ref is used when we need to change
        //      the DOM of the component in which we are
        //      using it from the parent component (
        //      suppose if we use this input from the
        //      login conmponent then that login component
        //      is the parent and the Input component is the
        //      child)

        {...props}
        id={id}
        // it is said that the label and input are now
        // having the same id , therefore when we click
        // on the label the input box will be selected
        // CHECK THIS!!!!!!!
      />
    </div>
  );
});

export default Input;

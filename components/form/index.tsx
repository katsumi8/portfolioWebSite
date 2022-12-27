import React from "react";
import axios from "axios";
import { useForm } from "./hooks";

function Form() {
  const { values, formErrors, handleChange, handleFocus, handleSubmit } =
    useForm();

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(formErrors).length === 0 && values.isSubmitted ? (
        <div className="w-full py-2 text-center text-lime-600 font-bold text-2xl">
          <p>I received your email !</p>
          <p>I will shortly get in touch with you.</p>
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 gap-4 w-full py-2">
            <div className="flex flex-col">
              <label className="uppercase text-sm py-2">Name / Company</label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="name"
                id="name"
                value={values.name}
                onChange={handleChange}
                onFocus={handleFocus}
              />
              {formErrors.name && values.isSubmitted ? (
                <p className="text-red-500 text-xs italic">{formErrors.name}</p>
              ) : null}
            </div>
            <div className="flex flex-col">
              <label className="uppercase text-sm py-2">Phone Number</label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
                onFocus={handleFocus}
              />
              {formErrors.phoneNumber && values.isSubmitted ? (
                <p className="text-red-500 text-xs italic">
                  {formErrors.phoneNumber}
                </p>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col py-1">
            <label className="uppercase text-sm py-2">Email</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            {formErrors.email && values.isSubmitted ? (
              <p className="text-red-500 text-xs italic">{formErrors.email}</p>
            ) : null}
          </div>
          <div className="flex flex-col py-1">
            <label className="uppercase text-sm py-2">Subject</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="subject"
              id="subject"
              value={values.subject}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            {formErrors.subject && values.isSubmitted ? (
              <p className="text-red-500 text-xs italic">
                {formErrors.subject}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col py-1">
            <label className="uppercase text-sm py-2">Message</label>
            <textarea
              className="border-2 rounded-lg p-3 flex border-gray-300"
              rows={10}
              id="message"
              name="message"
              value={values.message}
              onChange={handleChange}
              onFocus={handleFocus}
            ></textarea>
            {formErrors.message && values.isSubmitted ? (
              <p className="text-red-500 text-xs italic">
                {formErrors.message}
              </p>
            ) : null}
          </div>
          <button
            className="w-full p-4 text-gray-100 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff]"
            type="submit"
          >
            Send Message
          </button>
        </>
      )}
    </form>
  );
}

export default Form;

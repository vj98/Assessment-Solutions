import React from "react";
import "../styles/Form.css";

const Form = () => {
  return (
    <>
      <div className="card">
        <form>
          <div className="row">
            <label>Your full given name:</label>
            <input type="text" class="input-box" placeholder="Enter name" />
          </div>

          <div className="grid space-up">
            <div className="row">
              <label>Date of Birth</label>
              <input type="date" class="input-date input-box" placeholder="" />
            </div>
            <div className="row">
              <label>Country of residence or citizenship:</label>
              <input
                type="text"
                class="input-box"
                placeholder="Enter Country"
              />
            </div>
          </div>

          <div className="row space-up">
            <label>What school do you plan to attend?</label>
            <input type="text" class="input-box" placeholder="Enter detail" />
          </div>

          <div className="row space-up">
            <label>
              Please take a moment to describe your intended area of study:
            </label>
            <textarea
              className="textarea input-box"
              rows="4"
              cols="50"
              placeholder="Enter details here"
            ></textarea>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;

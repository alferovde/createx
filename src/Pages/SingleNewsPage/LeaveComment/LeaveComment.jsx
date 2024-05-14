import React from "react";
import style from "./leave_comment.module.scss";
import MyInput from "../../../Components/MyInput/MyInput";
import MyTextArea from "../../../Components/MyInput/MyTextArea";
import MyButton from "../../../Components/MyButton/MyButton";
const LeaveComment = () => {
  return (
    <div className={style.leave_comment__wrapper}>
      <h2>Leave your comment</h2>
      <form className={style.leave_comment__form}>
        <div className={style.leave_comment__form__top}>
          <MyInput name="Name" required={true} placeholder="Your name" />
          <MyInput
            name="Email"
            required={true}
            placeholder="Your working email"
          />
        </div>

        <MyTextArea
          name="Your comment"
          required={true}
          placeholder="Type comment here"
        />

        <MyButton color>Post comment</MyButton>
      </form>
    </div>
  );
};

export default LeaveComment;

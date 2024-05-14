import React from "react";
import style from "./contact_page.module.scss";
import PagetitleComponent from "../../Components/PagetitleComponent/PagetitleComponent";
import bgImage from "../../Images/background-contact.png";
import contact_img from "../../Images/contact-image.jpg";
import MyInput from "../../Components/MyInput/MyInput";
import MyCheckBox from "../../Components/MyInput/MyCheckBox";
import MyButton from "../../Components/MyButton/MyButton";
import MyOptionComponent from "../../Components/MyOptionComponent/MyOptionComponent";
import { cities, contactPage } from "../../Store/localStore";
import MyTextArea from "./../../Components/MyInput/MyTextArea";
import OurOffices from "./OurOffices/OurOffices";

const ContactPage = () => {
  return (
    <div className={style.contact_page}>
      <PagetitleComponent
        bgImage={bgImage}
        title={"CONTACTS"}
        text={
          "Contact us for all your construction needs. We always welcome any questions and comments."
        }
      />

      <div className={`${style.contact_page__contact__wrapper} container`}>
        <h2>Contact us</h2>
        <p>
          Please complete the form. Detailed information will help us to make a
          tuned offer.
        </p>
        <div className={style.contact_page__contact_form}>
          <div className={style.contact_page__contact_form_img}>
            <img src={contact_img} alt="contact_img" />
          </div>
          <div className={style.contact_page__contact_form_form}>
            <div className={style.contact_page__contact_form_item}>
              <MyInput name="Name" placeholder="Your name" required={true} />
              <MyOptionComponent
                name="I am interested in"
                data={contactPage}
                required={true}
              />
            </div>
            <div className={style.contact_page__contact_form_item}>
              <MyInput
                name="phone"
                placeholder="Your phone number"
                required={true}
              />
              <MyOptionComponent
                name="Location"
                data={cities}
                required={true}
              />
            </div>
            <div className={style.contact_page__contact_form_item}>
              <MyInput name="Email" placeholder="Your working email" />
              <div className={style.contact_page__contact_form_checkbox}>
                <label htmlFor="">Preferred contact method</label>
                <div
                  className={style.contact_page__contact_form_checkbox__wrapper}
                >
                  <MyCheckBox text="Phone" index={4} />
                  <MyCheckBox text="Email" index={2} />
                  <MyCheckBox text="Viber" index={3} />
                </div>
              </div>
            </div>
            <div className={style.contact_page__contact_form_item}>
              <MyTextArea
                name="message"
                placeholder="Your message"
                required={true}
              />
            </div>
            <div className={style.contact_page__contact_form_item}>
              <MyCheckBox
                text="I agree to receive communications from Createx Construction Bureau."
                index={1}
              />
              <MyButton color>send request</MyButton>
            </div>
          </div>
        </div>
      </div>
      <OurOffices />
    </div>
  );
};

export default ContactPage;

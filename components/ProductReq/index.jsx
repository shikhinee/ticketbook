//Next, React (core node_modules) imports must be placed here
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import Notification from "@/components/Notification";

//import STORE from '@/store'

//import COMPONENT from '@/components'
import styles from "./ProductReq.module.scss";

const ProductReq = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  location,
  ...props
}) => {
  const [form, setForm] = useState({
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber,
    location: location,
  });

  const router = useRouter();

  const [notification, setNotification] = useState({
    message: "",
    success: false,
  });

  useEffect(() => {
    if (!notification.message) return;

    const timer = setTimeout(() => {
      setNotification({
        message: "",
        success: false,
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [notification]);
  const handleSubmit = (e) => {
    const productReq = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phoneNumber: form.phoneNumber,
      location: form.location,
    };

    axios
      .post("/api/productReq", productReq)
      .then((res) => {
        if (res.status === 201) {
          router.push("/success");
        }
      })
      .catch((err) => {
        setNotification({
          message: "Мэдээлэл буруу байна.",
          success: false,
        });
        console.log("ProductReq handleSubmit:", err);
      });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.container}>
      <Notification
        message={notification.message}
        success={notification.success}
      />
      <div className={styles.information}>
        <div className={styles.guide}>
          <h3>Төлбөр төлөх заавар</h3>
          <p>Та дараах данс руу төлбөрөө шилжүүлнэ үү.</p>
          <p>Тасалбарын үнэ: 300’000 ₮</p>
          <div className={styles.bankInfo}>
            <div className={styles.bank}>
              <p>Данс: 50xxxxxxxx</p>
              <p>Банк: Хаан Банк</p>
              <p>Нэр: Бат-Оргил</p>
            </div>
          </div>
          <p>Утасны дугаар: 99117034, 99116934</p>
          <p>
            Гүйлгээний утган дээр та өөрийн нэр болон утасны дугаараа бичээрэй
          </p>
          <p>
            <b>Санамж:</b> Төлбөрөө бүрэн шилжүүлсэн тохиолдолд таны захиалга
            баталгаажихыг анхаарна уу!
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="lastName">Овог</label>
          <input
            type="text"
            placeholder="Овог"
            name="lastName"
            id="lastName"
            onChange={handleChange}
            required
          />
          <label htmlFor="firstName">Нэр</label>
          <input
            type="text"
            placeholder="Нэр"
            name="firstName"
            id="firstName"
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Цахим шуудан</label>
          <input
            type="email"
            placeholder="Цахим шуудан"
            name="email"
            id="email"
            onChange={handleChange}
            required
          />
          <label htmlFor="phoneNumber">Утасны дугаар</label>
          <input
            type="text"
            placeholder="Утасны дугаар"
            name="phoneNumber"
            id="phoneNumber"
            onChange={handleChange}
            required
          />
          <label htmlFor="location">Гэрийн хаяг</label>
          <input
            type="text"
            placeholder="Гэрийн хаяг"
            name="location"
            id="location"
            onChange={handleChange}
            required
          />
          <button type="submit">
            Тасалбар захиалах
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductReq;

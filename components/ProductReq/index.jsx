//Next, React (core node_modules) imports must be placed here
import { useRouter } from "next/router";
import { useState } from "react";
//import STORE from '@/store'

//import COMPONENT from '@/components'
import styles from "./ProductReq.module.scss";

const ProductReq = ({ firstName, lastName, email, phoneNumber, ...props }) => {
  const [form, setForm] = useState({
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber,
  });

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (router.pathname === "/products") {
      router.push(
        {
          pathname: "/checkout",
          query: {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            phoneNumber: form.phoneNumber,
            location: form.location
          },
        },
        "/checkout"
      );
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.container}>
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
            defaultValue={form.lastName}
            onChange={handleChange}
            required
          />
          <label htmlFor="firstName">Нэр</label>
          <input
            type="text"
            placeholder="Нэр"
            name="firstName"
            id="firstName"
            defaultValue={form.firstName}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Цахим шуудан</label>
          <input
            type="email"
            placeholder="Цахим шуудан"
            name="email"
            id="email"
            defaultValue={form.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="phoneNumber">Гэрийн хаяг</label>
          <input
            type="text"
            placeholder="Утасны дугаар"
            name="phoneNumber"
            id="phoneNumber"
            defaultValue={form.phoneNumber}
            onChange={handleChange}
            required
          />
                    <label htmlFor="phoneNumber">Утасны дугаар</label>
          <input
            type="text"
            placeholder="Гэрийн хаяг"
            name="location"
            id="location"
            defaultValue={form.location}
            onChange={handleChange}
            required
          />
          <button type="submit">Урьдчилан Захиалах</button>
        </form>
      </div>
    </div>
  );
};

export default ProductReq;

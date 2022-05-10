//Next, React (core node_modules) imports must be placed here
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
//import STORE from '@/store'

//import LAYOUT from '@/layouts'
import ComponentShowcaseLayout from "@/layouts/ComponentShowcase";
//import VIEWS from '@/views'

//import useFETCHER from '@/tools'

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'

import styles from "./Register.module.scss";

const RegisterPage = (props) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("/api/user", formData)
      .then((res) => {
        router.push("/api/auth/signin");
      })
      .catch((err) => {
        console.log("/auth/register", err);
      });
  };

  return (
    <main className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.imageContainer}>
        </div>
        <div className={styles.details}>
          <label htmlFor="email">Цахим шуудан</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleInputFormData}
            required
            placeholder="Таны и-мейл хаяг"
          />
          <label htmlFor="password">Нууц үг</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Нууц үг"
            onChange={handleInputFormData}
            required
          />
          <label htmlFor="passwordconfirm">Нууц үг давтах</label>
          <input
            type="password"
            name="passwordconfirm"
            id="passwordconfirm"
            placeholder="Нууц үг"
          />
          <button>
            <span>Бүртгүүлэх</span>
          </button>
          <Link href="/auth/login">
            <a>Нэвтрэх</a>
          </Link>
        </div>
      </form>
    </main>
  );
};

RegisterPage.Layout = ComponentShowcaseLayout;
export default RegisterPage;

//Next, React (core node_modules) imports must be placed here
import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";
//import STORE from '@/store'

//import LAYOUT from '@/layouts'
import DashboardLayout from "@/layouts/Dashboard";
//import VIEWS from '@/views'

//import useFETCHER from '@/tools'

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'
import { CheckmarkCircle2Outline } from "@styled-icons/evaicons-outline";
import styles from "./Success.module.scss";
const StyledCheckmarkCircle = styled(CheckmarkCircle2Outline)`
  width: 72px;
  color: #159900;
  padding: 0;
`;
const SuccessPage = (props) => {
  return (
    <motion.main
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles.container}
    >
      <div className={styles.success}>
        <StyledCheckmarkCircle />
        <h4>Хүсэлт илгээгдлээ</h4>
        <div className={styles.guide}>
          <p>Та дараах данс руу төлбөрөө шилжүүлнэ үү.</p>
          <p>Тасалбарын үнэ: 300’000 ₮</p>
          <div className={styles.bankInfo}>
            <div className={styles.bank}>
              <p>Данс: 5021635088</p>
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
        <Link href="/">Нүүр хуудас руу буцах</Link>
      </div>
    </motion.main>
  );
};
SuccessPage.Layout = DashboardLayout;
export default SuccessPage;

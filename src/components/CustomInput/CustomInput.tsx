import styles from "./styles.module.scss";
import { useCustomContext } from "../../context/useContext";

export const CustomInput = () => {
  const { handleInputChange } = useCustomContext();

  return (
    <div className={`${styles.navbar__inputGroup} center`}>
      <i
        className={`${styles.inputGroup__icon} fa-solid fa-magnifying-glass`}
      />
      <input
        className={`${styles.inputGroup__input}`}
        type="text"
        placeholder="Search for a country..."
        onChange={handleInputChange}
      />
    </div>
  );
};

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  password: string;
}

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert("Регистрация успешна!");
  };

  return (
    <motion.form
      className="form"
      onSubmit={handleSubmit(onSubmit)}
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
    >
      <h2>Регистрация</h2>

      <input
        placeholder="Имя"
        {...register("name", { required: "Введите имя" })}
      />
      {errors.name && <span>{errors.name.message}</span>}

      <input
        placeholder="Email"
        {...register("email", {
          required: "Введите email",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Некорректный email",
          },
        })}
      />
      {errors.email && <span>{errors.email.message}</span>}

      <input
        type="password"
        placeholder="Пароль"
        {...register("password", {
          required: "Введите пароль",
          minLength: {
            value: 6,
            message: "Минимум 6 символов",
          },
        })}
      />
      {errors.password && <span>{errors.password.message}</span>}

      <button type="submit">Зарегистрироваться</button>
    </motion.form>
  );
};
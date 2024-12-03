import { useState } from "react";
import "./styles/Form.css";
import { validateForm } from "../validations/form.validation";

export interface Error {
  name: string[];
  email: string[];
}

export function Form() {
  const [errors, setErrors] = useState<Error>({} as Error);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = validateForm(data as Record<string, unknown>);
    if (result.success) {
      setErrors({} as Error);
      alert("Formulario enviado correctamente");
    }
    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors as Error);
      console.log(errors.name[0]);
    }
  };

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <h2 className="form__title">¡Registrate a la Newsletter!</h2>
      <p className="form__subtitle">
        ¡Suscribete a nuestra newsletter para no perderte de ninguna
        actualización!
      </p>

      <div className="form__inputs">
        <label className="form__label">
          <input
            type="text"
            placeholder=" "
            className="form__input"
            name="name"
          />
          <span className="form__text">Ingrese tu nombre</span>
        </label>
        {errors.name && <span className="error">* {errors.name[0]}</span>}
        <label className="form__label">
          <input
            type="email"
            placeholder=" "
            className="form__input"
            name="email"
          />
          <span className="form__text">Ingrese tu correo</span>
        </label>
        {errors.email && <span className="error">* {errors.email[0]}</span>}
      </div>

      <button type="submit" className="form__submit">
        Registrar
      </button>
    </form>
  );
}

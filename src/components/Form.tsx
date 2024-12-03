import "./styles/Form.css";

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};

export function Form() {
  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <h2 className="form__title">¡Registrate a la Newsletter!</h2>
      <p className="form__subtitle">
        ¡Suscribete a nuestra newsletter para no perderte de ninguna
        actualización!
      </p>

      <div className="form__inputs">
        <label className="form__label">
          <input type="text" placeholder=" " className="form__input" />
          <span className="form__text">Ingrese tu nombre</span>
        </label>
        <label className="form__label">
          <input type="email" placeholder=" " className="form__input" />
          <span className="form__text">Ingrese tu correo</span>
        </label>
      </div>

      <input type="submit" value="Registrate" className="form__submit" />
    </form>
  );
}

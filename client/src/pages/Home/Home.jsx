import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import router from "../../router";
import * as style from "./Home.module.scss";

function Home({ isAuth, logIn, signUp }) {
  const [task, setTask] = useState("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const chengeTask = ({ currentTarget }) => setTask(currentTarget.dataset.task);

  const hendlerEmail = ({ target }) => setEmail(target.value);
  const hendlerPassword = ({ target }) => setPassword(target.value);

  if (isAuth) {
    return <Redirect to={router.workers.path} />;
  }

  const hendlerForm = (event) => {
    event.preventDefault();

    const data = { email, password };

    switch (task) {
      case "login":
        logIn(data);
        break;
      case "signup":
        signUp(data);
        break;
      default:
        return;
    }
  };

  return (
    <div className={style.box}>
      <div className={style.wrp}>
        <div className={style.title}>
          <button
            data-task="signup"
            className={style.link}
            onClick={chengeTask}
          >
            <span className={task === "signup" ? style.accent : ""}>
              SignUp
            </span>
          </button>
          {" / "}
          <button data-task="login" className={style.link} onClick={chengeTask}>
            <span className={task === "login" ? style.accent : ""}>Login</span>
          </button>
        </div>

        <form className={style.form} onSubmit={hendlerForm}>
          <input
            type="email"
            value={email}
            className={style.field}
            placeholder="Email..."
            onChange={hendlerEmail}
            required
          />
          <input
            type="password"
            value={password}
            className={style.field}
            onChange={hendlerPassword}
            placeholder="Password..."
            required
          />
          <input type="submit" value={task} className={style.submit} />
        </form>
      </div>
    </div>
  );
}

export default Home;

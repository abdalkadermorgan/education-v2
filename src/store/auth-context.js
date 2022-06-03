import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const array_emails = [
      {
        id: 1,
        email: "user1@gmail.com",
        password: "password1",
      },
      {
        id: 2,
        email: "user2@gmail.com",
        password: "password2",
      },
      {
        id: 3,
        email: "user3@gmail.com",
        password: "password3",
      },
    ];
    localStorage.setItem("validEmails", JSON.stringify(array_emails)); //store validEmails

    const storedUserLogged = localStorage.getItem("isLoggedIn");

    if (storedUserLogged === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    const storedEmails = JSON.parse(localStorage.getItem("validEmails")); //get them back

    storedEmails.map((object) => {
      console.log(object);

      if (email === object.email && password === object.password) {
        localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(true);

        console.log(isLoggedIn);
        // set in local session current user

        // add to cart
        // add to session cart

        window.location.pathname = "/";

        sessionStorage.setItem("currentUser", JSON.stringify(object));
      }
    });
  };
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    console.log(logoutHandler);
    window.location.pathname = "Login";
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

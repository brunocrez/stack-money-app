import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({});

export function AuthProvider(props) {
  const userKey = 'money_user';

  const initialState = {
    user: null,
    validToken: false
  }

  const [loggedUser, setLoggedUser] = useState(initialState);

  useEffect(() => {
    const storage = localStorage.getItem(userKey);

    if (storage) {
      setLoggedUser({
        user: JSON.parse(storage),
        validToken: true
      });
    } else {
      setLoggedUser(initialState);
    }
  }, []);

	return (
		<AuthContext.Provider value={{ loggedUser, setLoggedUser, userKey }}>
			{props.children}
		</AuthContext.Provider>
	);
}
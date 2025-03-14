import { UserLogin } from "../interfaces/UserLogin";

  // TODO: make a POST request to the login route
// This function will make a POST request to the login route
// and return the response data if successful
const login = async (userInfo: UserLogin) => {
  try {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Login failed');
    }
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred while logging in');
  }

}



export { login };

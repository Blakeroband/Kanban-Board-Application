import { JwtPayload, jwtDecode } from 'jwt-decode';


class AuthService {
  getProfile() {
    // TODO: return the decoded token
    const token = this.getToken();
    return jwtDecode<JwtPayload>(token);
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    const token = this.getToken();
    return token ? true : false;
  }
  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    // decordes the JWT token using jwtDecode and check if the expiration time is less than the current time meaning the token is expired
    const decoded = jwtDecode<JwtPayload>(token);
    return decoded.exp ? Date.now() >= decoded.exp * 1000 : false;
  }

  getToken(): string {
    // TODO: return the token
    // pretty self explanatory, gets the token from local storage`
    return localStorage.getItem('token') || '';
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    localStorage.setItem('token', idToken);
    // redirect to the home page
    window.location.href = '/';
  }

  logout() {
    // TODO: remove the token from localStorage
    localStorage.removeItem('token');
    // redirect to the login page
    window.location.href = '/';
  }
}

export default new AuthService();

import signIn from '../helpers/signIn';
import signInImg from '../../assets/googleSignIn.png';
// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `<div class="loginBtnContainer"><a href="#" id="google-auth"><img src="${signInImg}"></a></div>`;
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;

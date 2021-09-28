import './header.css';
import { createButton } from './Button';

export const createHeader = ({ user, onLogout, onLogin, onCreateAccount }) => {
  const header = document.createElement('header');

  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';

  const logo = `
  <img src="assets/uploads/colour-b.svg?p=dPJANKvw" alt="Image" class="whiteLogo" height="60"/>
`;

  wrapper.insertAdjacentHTML('afterbegin', logo);

  const account = document.createElement('div');
  if (user) {
    account.appendChild(createButton({ size: 'small', label: 'Log out', onClick: onLogout }));
  } else {
    account.appendChild(createButton({ size: 'small', label: 'Log in', onClick: onLogin }));
    account.appendChild(
      createButton({
        size: 'small',
        label: 'Sign up',
        onClick: onCreateAccount,
        primary: true,
      })
    );
  }
  wrapper.appendChild(account);
  header.appendChild(wrapper);

  return header;
};

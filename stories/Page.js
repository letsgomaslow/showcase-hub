import './page.css';
import { createHeader } from './Header';

export const createPage = ({ user, onLogout, onLogin, onCreateAccount }) => {
  const article = document.createElement('article');

  const header = createHeader({ onLogin, onLogout, onCreateAccount, user });
  article.appendChild(header);
  const section = `
  <section class="slide fade-6 kenBurns" data-title="Intro" data-name="Home-intro">
  <div class="content">
    <div class="container">
      <div class="wrap">
      
        <div class="fix-12-12">
          <ul class="flex verticalCenter reverse">
            <li class="col-6-12 left middle">
              <div class="fix-5-12 toLeft margin-left-tablet-auto margin-right-tablet-auto">
                <h1 class="ae-1 fromLeft smaller margin-bottom-2">Digital coaching, audition, and competition platform for dancers and actors</h1>
                <p class="ae-2 fromLeft large margin-bottom-4"><span class="opacity-8">Helping performers of all levels create community and grow professionally. </span></p>
                <a class="button round margin-top-2 customColor" href="https://platform.showcasehub.com/">Create a free account</a>
              </div>
            </li>
            <li class="col-6-12">
              <img class="ae-4 margin-bottom-tablet-4" width="580" styles="margin:-28% 0" src="assets/uploads/facebook-post-940x788-px.png?p=dPJANKvw" alt="iPhones Thumbnail" data-action="zoom"/>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  </div>
  <div class="background" style="background-image:url(https://images.unsplash.com/photo-1520220226493-0a431e2904eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80)"></div>
</section>
`;

  article.insertAdjacentHTML('beforeend', section);

  return article;
};

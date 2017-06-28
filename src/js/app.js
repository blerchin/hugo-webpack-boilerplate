import '../scss/main.scss';

const welcome = document.createElement('h1');
welcome.innerHTML = 'Welcome to Hugo Webpack <i class="fa fa-check-circle"></i>';
document.body.querySelector('.content').prepend(welcome);

if (module.hot) {
  module.hot.decline();
}

let apiUrl;
const apiUrls = {
  production: "https://git.heroku.com/shrouded-tor-63319.git",
  development: "http://localhost:3000",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

export default apiUrl;

// let apiUrl
// const apiUrls = {
//   production: 'https://git.heroku.com/shrouded-tor-63319.git',
//   development: 'http://localhost:3000'
// }

// if (window.location.hostname === 'localhost') {
//   apiUrl = apiUrls.development
// } else {
//   apiUrl = apiUrls.production
// }

// export default apiUrl

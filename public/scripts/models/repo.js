'use strict';

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    // TODONE: Refactor your ajax call to use the $.get method, and make a request to our new proxy route. Since the new proxy route is handling our token for us, we do not need it here, which is why we can refactor to to the simpler $.get method.
    // $.ajax({
    //   url: `https://api.github.com/user/repos`,
    //   type: 'GET',
    //   headers: {'Authorization': `token ${githubToken}`}
    // })
    // .then(data => repos.all = data, err => console.error(err)) // es6 syntax arrow functions
    // .then(callback);
    // })

    $.get('/github/user/repos', function(data) {
      repos.all = data;
      callback();
    });
  }

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);

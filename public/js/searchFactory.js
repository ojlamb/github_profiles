githubUserSearch.factory('Search', ['$http', function($http) {
  var queryUrl = 'https://api.github.com/search/users';
  var access_token = $http({method:'GET', url:'/key'})
  access_token.then(function(success) {
   self.key = success.data;
  });
  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'q': searchTerm,
          'access_token': self.key.access_token
        }
      });
    }
  }
}]);

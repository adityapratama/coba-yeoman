'use strict';

/**
 * @ngdoc function
 * @name cobaYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cobaYeomanApp
 */
angular.module('aplikasi')
  .factory('UserService', function ($resource, $http) {
    return {
      userResource: $resource('api/user/:id',{},{queryPage: {method:'GET', isArray: false}}),
      get: function(param, callback){
        return this.userResource.get(param,callback);
      },
      query: function(p,s, callback){
        return this.userResource.queryPage({'page.page': p, 'page.size': 10, 'sort': s}, callback);
      },
      save: function(data){
        if(data.id == null){
          return $http.post('api/user', data);
        } else {
          return $http.put('api/user/'+data.id, data);
        }
      },
      remove: function(data){
        if(data.id != null){
          return $http.delete('api/user/'+data.id);
        }
      }
    };
  })
  .factory('MenuService', function ($resource, $http) {
    return {
      menuResource: $resource('api/menu/:id',{},{queryPage: {method:'GET', isArray: false}}),
      get: function(param, callback){
        return this.menuResource.get(param,callback);
      },
      query: function(p,s, callback){
        return this.menuResource.queryPage({'page.page': p, 'page.size': 10, 'sort': s}, callback);
      },
      save: function(data){
        if(data.id == null){
          return $http.post('api/menu', data);
        } else {
          return $http.put('api/menu/'+data.id, data);
        }
      },
      remove: function(data){
        if(data.id != null){
          return $http.delete('api/menu/'+data.id);
        }
      }
    };
  })
  .factory('RoleService', function ($resource, $http) {
    return {
      roleResource: $resource('api/role/:id',{},{queryPage: {method:'GET', isArray: false}}),
      get: function(param, callback){
        return this.roleResource.get(param,callback);
      },
      query: function(p,s, callback){
        return this.roleResource.queryPage({'page.page': p, 'page.size': 10, 'sort': s}, callback);
      },
      save: function(data){
        if(data.id == null){
          return $http.post('api/role', data);
        } else {
          return $http.put('api/role/'+data.id, data);
        }
      },
      remove: function(data){
        if(data.id != null){
          return $http.delete('api/role/'+data.id);
        }
      }
    };
  })
  .factory('PermissionService', function ($resource, $http) {
    return {
      permissionResource: $resource('api/permission/:id',{},{queryPage: {method:'GET', isArray: false}}),
      get: function(param, callback){
        return this.permissionResource.get(param,callback);
      },
      query: function(p,s, callback){
        return this.permissionResource.queryPage({'page.page': p, 'page.size': 10, 'sort': s}, callback);
      },
      save: function(data){
        if(data.id == null){
          return $http.post('api/permission', data);
        } else {
          return $http.put('api/permission/'+data.id, data);
        }
      },
      remove: function(data){
        if(data.id != null){
          return $http.delete('api/permission/'+data.id);
        }
      }
    };
  });

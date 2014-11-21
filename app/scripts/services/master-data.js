'use strict';

/**
 * @ngdoc function
 * @name cobaYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cobaYeomanApp
 */
angular.module('aplikasi')
  .factory('ProductService', function ($resource, $http) {
    return {
      productResource: $resource('api/product/:id',{},{queryPage: {method:'GET', isArray: false}}),
      get: function(param, callback){
        return this.productResource.get(param,callback);
      },
      query: function(p,s, callback){
        return this.productResource.queryPage({'page.page': p, 'page.size': 10, 'sort': s}, callback);
      },
      save: function(data){
        if(data.id == null){
          return $http.post('api/product', data);
        } else {
          return $http.put('api/product/'+data.id, data);
        }
      },
      remove: function(data){
        if(data.id != null){
          return $http.delete('api/product/'+data.id);
        }
      }
    };
  });

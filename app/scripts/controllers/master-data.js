'use strict';

/**
 * @ngdoc function
 * @name cobaYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cobaYeomanApp
 */
angular.module('aplikasi')
  .controller('ProductCtrl', function ($scope, ProductService) {
  	$scope.reload = function(page,sort){
  		if(!page || page < 0) {
        	page = 0;
        	
        }
        if(!sort || sort == null){
        	sort = 'id,desc';
        } 

  		$scope.products = ProductService.query(page,sort);
  	};
  	$scope.reload();
  	$scope.baru = function(){
  		$scope.product = null;
  		$scope.original = null;
  	};
  	$scope.simpan = function(){
      console.log($scope.product);
  		ProductService.save($scope.product).success(function(){
  			$scope.message = 'Product berhasil ditambahkan';
  			$('.message').modal('show');
  			$scope.reload();
  			$scope.baru();
  		});
  	};
  	$scope.edit = function(x){
  		if(x.id == null){
        return;
      }
  			
  		$scope.product = ProductService.get({id:x.id}, function(data){
  			$scope.original = angular.copy(data);
  		});
  	};
  	$scope.remove = function(x){
  		if(x.id == null){
        return;
      }
  		
  		$scope.confirm = 'Apakah anda ingin menghapus product berikut ?';
  		$('.confirm').modal('show');
  		$scope.productRemove = x;
  	};

  	$scope.confirmRemove = function(){
  		ProductService.remove($scope.productRemove).success(function(){
  			$('.confirm').modal('hide');
  			$scope.message = 'Product berhasil dihapus';
  			$('.message').modal('show');
  			$scope.reload();
  		});
  	}
});

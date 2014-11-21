'use strict';

/**
 * @ngdoc function
 * @name cobaYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cobaYeomanApp
 */
angular.module('aplikasi')
  .controller('UserCtrl', function ($scope, UserService, RoleService) {
  	$scope.roleSelection  = RoleService.query();
  	$scope.reload = function(page,sort){
  		if(!page || page < 0) {
        	page = 0;
        	
        }
        if(!sort || sort == null){
        	sort = "id,desc";
        } 

  		$scope.users = UserService.query(page,sort);
  	};
  	$scope.reload();
  	$scope.baru = function(){
  		$scope.user = null;
  		$scope.original = null;
  	};
  	$scope.simpan = function(){
  		if($scope.user.role != null){
  			if($scope.user.role.id == "")
  				$scope.user.role = null;	
  		}
  		

  		UserService.save($scope.user).success(function(){
  			$scope.message = "User berhasil ditambahkan";
  			$(".message").modal("show");
  			$scope.reload();
  			$scope.baru();
  		});
  	};
  	$scope.edit = function(x){
  		if(x.id == null)
  			return;

  		$scope.user = UserService.get({id:x.id}, function(data){
  			$scope.original = angular.copy(data)
  		});
  	};
  	$scope.remove = function(x){
  		if(x.id == null)
  			return;

  		$scope.confirm = "Apakah anda ingin menghapus user berikut ?";
  		$(".confirm").modal("show");
  		$scope.userRemove = x;
  	};

  	$scope.confirmRemove = function(){
  		UserService.remove($scope.userRemove).success(function(){
  			$(".confirm").modal("hide");
  			$scope.message = "User berhasil dihapus";
  			$(".message").modal("show");
  			$scope.reload();
  		});
  	}
})
.controller('MenuCtrl', function ($scope, MenuService) {
  	$scope.reload = function(page,sort){
  		if(!page || page < 0) {
        	page = 0;
        	
        }
        if(!sort || sort == null){
        	sort = "id,desc";
        } 
        $scope.parentSelection = MenuService.query();
  		$scope.menus = MenuService.query(page,sort);
  	};
  	$scope.reload();
  	$scope.baru = function(){
  		$scope.menu = null;
  		$scope.original = null;
  	};
  	$scope.simpan = function(){
  		if($scope.menu.parent != null){
  			if($scope.menu.parent.id == "")
  				$scope.menu.parent = null;	
  		}

  		MenuService.save($scope.menu).success(function(){
  			$scope.message = "Menu berhasil ditambahkan";
  			$(".message").modal("show");
  			$scope.reload();
  			$scope.baru();
  		});
  	};
  	$scope.edit = function(x){
  		if(x.id == null)
  			return;

  		$scope.menu = MenuService.get({id:x.id}, function(data){
  			$scope.original = angular.copy(data)
  		});
  	};
  	$scope.remove = function(x){
  		if(x.id == null)
  			return;

  		$scope.confirm = "Apakah anda ingin menghapus Menu berikut ?";
  		$(".confirm").modal("show");
  		$scope.menuRemove = x;
  	};

  	$scope.confirmRemove = function(){
  		MenuService.remove($scope.menuRemove).success(function(){
  			$(".confirm").modal("hide");
  			$scope.message = "Menu berhasil dihapus";
  			$(".message").modal("show");
  			$scope.reload();
  		});
  	}
})
.controller('PermissionCtrl', function ($scope, PermissionService) {
  	$scope.reload = function(page,sort){
  		if(!page || page < 0) {
        	page = 0;
        	
        }
        if(!sort || sort == null){
        	sort = "id,desc";
        } 

  		$scope.permissions = PermissionService.query(page,sort);
  	};
  	$scope.reload();
  	$scope.baru = function(){
  		$scope.permission = null;
  		$scope.original = null;
  	};
  	$scope.simpan = function(){
  		PermissionService.save($scope.permission).success(function(){
  			$scope.message = "Permission berhasil ditambahkan";
  			$(".message").modal("show");
  			$scope.reload();
  			$scope.baru();
  		});
  	};
  	$scope.edit = function(x){
  		if(x.id == null)
  			return;

  		$scope.permission = PermissionService.get({id:x.id}, function(data){
  			$scope.original = angular.copy(data)
  		});
  	};
  	$scope.remove = function(x){
  		if(x.id == null)
  			return;

  		$scope.confirm = "Apakah anda ingin menghapus Permission berikut ?";
  		$(".confirm").modal("show");
  		$scope.permissionRemove = x;
  	};

  	$scope.confirmRemove = function(){
  		PermissionService.remove($scope.permissionRemove).success(function(){
  			$(".confirm").modal("hide");
  			$scope.message = "Permission berhasil dihapus";
  			$(".message").modal("show");
  			$scope.reload();
  		});
  	}
})
.controller('RoleCtrl', function ($scope, RoleService, MenuService, PermissionService) {
  	$scope.reload = function(page,sort){
  		if(!page || page < 0) {
        	page = 0;
        	
        }
        if(!sort || sort == null){
        	sort = "id,desc";
        } 

  		$scope.roles = RoleService.query(page,sort);
  	};
  	$scope.reload();
  	$scope.baru = function(){
  		$scope.role = null;
  		$scope.original = null;
  	};
  	$scope.simpan = function(){
  		RoleService.save($scope.role).success(function(){
  			$scope.message = "Role berhasil ditambahkan";
  			$(".message").modal("show");
  			$scope.reload();
  			$scope.baru();
  		});
  	};
  	$scope.edit = function(x){
  		if(x.id == null)
  			return;

  		$scope.role = RoleService.get({id:x.id}, function(data){
  			$scope.original = angular.copy(data)
  		});
  	};
  	$scope.remove = function(x){
  		if(x.id == null)
  			return;

  		$scope.confirm = "Apakah anda ingin menghapus Role berikut ?";
  		$(".confirm").modal("show");
  		$scope.roleRemove = x;
  	};

  	$scope.confirmRemove = function(){
  		RoleService.remove($scope.roleRemove).success(function(){
  			$(".confirm").modal("hide");
  			$scope.message = "Role berhasil dihapus";
  			$(".message").modal("show");
  			$scope.reload();
  		});
  	}
  	$scope.showPermissionPopup = function(){
  		$scope.permissions = PermissionService.query();
  		$(".permissionPopup").modal("show");
  	}
  	$scope.showMenuPopup = function(){
  		$scope.menus = MenuService.query();
  		$(".menuPopup").modal("show");
  	}
  	$scope.selection = [];
	$scope.toggleSelection = function(x){
		var idx = $scope.selection.indexOf(x);
		if (idx > -1) {
		  $scope.selection.splice(idx, 1);
		}
		else {
		  $scope.selection.push(x);
		}
	};
	var isExist =function(i,x){
		for(var z=0; z<i.length; z++){
			if(i[z].id == x.id)
				return true;
		}
	};
	$scope.addMenu = function(){
		if($scope.role.menus == null)
			$scope.role.menus = [];
		
		for(var i=0; i<$scope.selection.length; i++){
			if($scope.role.menus != null){
				var t = isExist($scope.role.menus, $scope.selection[i]);
				if (!t) {
					$scope.role.menus.push($scope.selection[i]);
				}
			}else{
				$scope.role.menus.push($scope.selection[i]);
			}
 		}
		$scope.selection = [];
		$('.menuPopup').modal('hide');
	};
	$scope.removeMenu = function(x){
 		var idx =$scope.role.menus.indexOf(x);
 		$scope.role.menus.splice(idx, 1);
 	};
 	$scope.addPermission = function(){
		if($scope.role.permissions == null)
			$scope.role.permissions = [];
		
		for(var i=0; i<$scope.selection.length; i++){
			if($scope.role.permissions != null){
				var t = isExist($scope.role.permissions, $scope.selection[i]);
				if (!t) {
					$scope.role.permissions.push($scope.selection[i]);
				}
			}else{
				$scope.role.permissions.push($scope.selection[i]);
			}
 		}
		$scope.selection = [];
		$('.permissionPopup').modal('hide');
	};
	$scope.removePermission = function(x){
 		var idx =$scope.role.permissions.indexOf(x);
 		$scope.role.permissions.splice(idx, 1);
 	};
});

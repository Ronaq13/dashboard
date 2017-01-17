(function() {
    angular.module('socialApp')
        .controller('ckeditorController', function($scope, $timeout, $mdSidenav, $log) {
            $scope.name = "Tree here";
            $scope.contents = [
                { heading: 'Best Book', text: 'HC verma', imageSRC: 'img/a1.jpg' },
                { heading: 'Evening', text: "", imageSRC: 'img/a3.jpg' }
            ];

            initSample();
            //---------------For toggle in views--------------------------------
            $scope.isContentShow = false;
            $scope.index = 1;
            $scope.assigningIndex = function(INDEX) {
                $scope.index = Number(INDEX);
                console.log(INDEX);
                console.log($scope.index + " This called first");
            }
            $scope.isContentShowToggle = function() {
                $scope.isContentShow = !$scope.isContentShow;
                console.log("This called later on");
            };
            //------------------For content in column 2--------------------------------
            this.Information = [{
                    heading: "This is heading",
                    MyButtonNames: ['call', 'email', 'group_add'],
                    content: "This is 1. The new standard incorporates features like video playback and drag-and-drop that have been previously dependent on third-party browser plug-ins such as Adobe Flash, Microsoft Silverlight, and Google Gears."
                },
                {
                    heading: "This is heading",
                    MyButtonNames: ['arrow_back', 'delete', 'group_add'],
                    content: "This is 2nd. The new standard incorporates features like video playback and drag-and-drop that have been previously dependent on third-party browser plug-ins such as Adobe Flash, Microsoft Silverlight, and Google Gears."
                },
                {
                    heading: "This is heading",
                    MyButtonNames: ['call', 'first_page', 'group_add'],
                    content: "This is 3rd. The new standard incorporates features like video playback and drag-and-drop that have been previously dependent on third-party browser plug-ins such as Adobe Flash, Microsoft Silverlight, and Google Gears."
                },
                {
                    heading: "This is heading",
                    MyButtonNames: ['search', 'loading', 'group_add'],
                    content: "This is 4th. The new standard incorporates features like video playback and drag-and-drop that have been previously dependent on third-party browser plug-ins such as Adobe Flash, Microsoft Silverlight, and Google Gears."
                }
            ];
            //------------------For Notebook sidebar-----------------------------------
            $scope.toggleLeft = function() {
                $mdSidenav('left2').toggle();
            };

            $scope.close = function() {
                    $mdSidenav('left2').close()
                        .then(function() {
                            $log.debug("close LEFT is done");
                        });
                }
                //----------------For treeview --------------------
            $scope.theme = 'lime';
            var iterator = 0;

            $scope.roleList = [{
                    "roleName": "User",
                    "roleId": "role1",
                    "children": [
                        { "roleName": "subUser1", "roleId": "role11", "children": [] },
                        {
                            "roleName": "subUser2",
                            "roleId": "role12",
                            "children": [{
                                "roleName": "subUser2-1",
                                "roleId": "role121",
                                "children": []
                            }]
                        }
                    ]
                },

                { "roleName": "Admin", "roleId": "role2", "children": [] },

                { "roleName": "Guest", "roleId": "role3", "children": [] },
                // extra added to check scroll
                {
                    "roleName": "User",
                    "roleId": "role1",
                    "children": [
                        { "roleName": "subUser1", "roleId": "role11", "children": [] },
                        {
                            "roleName": "subUser2",
                            "roleId": "role12",
                            "children": [{
                                "roleName": "subUser2-1",
                                "roleId": "role121",
                                "children": []
                            }]
                        }
                    ]
                },

                { "roleName": "Admin", "roleId": "role2", "children": [] },

                { "roleName": "Guest", "roleId": "role3", "children": [] }, {
                    "roleName": "User",
                    "roleId": "role1",
                    "children": [
                        { "roleName": "subUser1", "roleId": "role11", "children": [] },
                        {
                            "roleName": "subUser2",
                            "roleId": "role12",
                            "children": [{
                                "roleName": "subUser2-1",
                                "roleId": "role121",
                                "children": []
                            }]
                        }
                    ]
                },

                { "roleName": "Admin", "roleId": "role2", "children": [] },

                { "roleName": "Guest", "roleId": "role3", "children": [] },
                {
                    "roleName": "User",
                    "roleId": "role1",
                    "children": [
                        { "roleName": "subUser1", "roleId": "role11", "children": [] },
                        {
                            "roleName": "subUser2",
                            "roleId": "role12",
                            "children": [{
                                "roleName": "subUser2-1",
                                "roleId": "role121",
                                "children": []
                            }]
                        }
                    ]
                },

                { "roleName": "Admin", "roleId": "role2", "children": [] },

                { "roleName": "Guest", "roleId": "role3", "children": [] },
                {
                    "roleName": "User",
                    "roleId": "role1",
                    "children": [
                        { "roleName": "subUser1", "roleId": "role11", "children": [] },
                        {
                            "roleName": "subUser2",
                            "roleId": "role12",
                            "children": [{
                                "roleName": "subUser2-1",
                                "roleId": "role121",
                                "children": []
                            }]
                        }
                    ]
                },

                { "roleName": "Admin", "roleId": "role2", "children": [] },

                { "roleName": "Guest", "roleId": "role3", "children": [] },
                {
                    "roleName": "User",
                    "roleId": "role1",
                    "children": [
                        { "roleName": "subUser1", "roleId": "role11", "children": [] },
                        {
                            "roleName": "subUser2",
                            "roleId": "role12",
                            "children": [{
                                "roleName": "subUser2-1",
                                "roleId": "role121",
                                "children": []
                            }]
                        }
                    ]
                },

                { "roleName": "Admin", "roleId": "role2", "children": [] },

                { "roleName": "Guest", "roleId": "role3", "children": [] },
                {
                    "roleName": "User",
                    "roleId": "role1",
                    "children": [
                        { "roleName": "subUser1", "roleId": "role11", "children": [] },
                        {
                            "roleName": "subUser2",
                            "roleId": "role12",
                            "children": [{
                                "roleName": "subUser2-1",
                                "roleId": "role121",
                                "children": []
                            }]
                        }
                    ]
                },

                { "roleName": "Admin", "roleId": "role2", "children": [] },

                { "roleName": "Guest", "roleId": "role3", "children": [] }


            ];

            $scope.$watch('mytree.currentNode', function(newObj, oldObj) {
                if ($scope.mytree && angular.isObject($scope.mytree.currentNode)) {
                    console.log('Node Selected!!');
                    console.log($scope.mytree.currentNode);
                }
            }, false);

        });

})();
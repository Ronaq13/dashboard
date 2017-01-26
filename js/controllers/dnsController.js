(function() {
    angular.module('socialApp')
        .controller('dnsController', ['$scope', function($scope) {
            var imagePath = '../../img/a1.jpeg';
            $scope.days = [{
                day: 'Today',
                background_color: '#1C7EBB'
            }, {
                day: 'Yesterday',
                background_color: '#E94B3B'
            }];
            $scope.todos = [{
                face: imagePath,
                phone: 9561559865,
                what: 'Meeting',
                when: 'Dec 24',
                notes: "Conference on the sales results for the previous year. Monica please examine sales trends in marketing and products. Below please find the current status of the sale. ",
                btn_content: "more",
                icon_select: 'work',
                when_2: 'Today',
                btn_style: 'md-raised md-primary',
                colour: '#1e4fbf',
                icon_colour: '#2EC1CC'

            }, {
                face: imagePath,
                phone: 7894561235,
                what: 'Send documents to Mike',
                when: 'Dec 24',
                notes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry 's standard dummy text ever since.",
                btn_content: "file_download",
                icon_select: 'description ',
                when_2: 'Today',
                btn_style: 'md-raised md-primary ',
                colour: '#009f64 ',
                icon_colour: '#FFB61C'
            }, {
                face: imagePath,
                phone: 4567891132,
                what: 'Coffee Break ',
                when: 'Dec 23 ',
                notes: "Go to shop and find some products. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. ",
                btn_content: "view_headline",
                icon_select: 'local_cafe',
                when_2: 'Yesterday',
                btn_style: 'md-raised md-primary',
                colour: '#78c8aa',
                icon_colour: '#23AE89'
            }, {
                face: imagePath,
                phone: 6987452136,
                what: 'Phone with Jeronimo',
                when: 'Dec 23',
                notes: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut. ",
                icon_select: 'local_phone',
                btn_content: "view_headline",
                btn_style: 'md-raised md-primary',
                when_2: 'Yesterday',
                icon_colour: '#E94B3B'
            }, {
                face: imagePath,
                phone: 9632587412,
                what: 'Go to the doctor dr Smith',
                when: 'Dec 23',
                notes: "Find some issue and go to doctor. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s. ",
                icon_select: 'person_pin ',
                btn_content: "view_headline",
                btn_style: 'md-raised md-primary',
                when_2: 'Yesterday',
                icon_colour: '#1C7EBB'
            }, ];
        }]);
})();
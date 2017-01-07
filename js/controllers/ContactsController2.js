/**
 * Created by mradul on 28/11/16.
 */
(function(){
    angular.module('socialApp')
        .controller('contacts2Controller', function(){
            
                        var str = "abcdefghijklmnopqrstuvwxyz";
                        this.alphabets = str.toUpperCase().split("");
                        this.activeLetter = '';
                        this.activateLetter = function(letter){
                            this.activeLetter = letter;
                        };

                        this.contacts = [
                            {   img: './img/a1.jpg',
                                name: 'Joe Smith',
                                title: 'Graphics Designer',
                                company: 'Twitter, Inc.',
                                addressOne: '795 Folsom Ave, Suite 600',
                                addressTwo: 'San Francisco, CA 94107',
                                phone: '(123) 456-7890'

                            },
                            {
                                img: './img/a2.jpg',
                                name: 'Alex Jonathan',
                                title: 'CEO',
                                company: 'Twitter, Inc.',
                                addressOne: '795 Folsom Ave, Suite 600',
                                addressTwo: 'San Francisco, CA 94107',
                                phone: '(123) 456-7890'

                            },
                            {
                                img: './img/a3.jpg',
                                name: 'Monica Smith',
                                title: 'Marketing Manager',
                                company: 'Twitter, Inc.',
                                addressOne: '795 Folsom Ave, Suite 600',
                                addressTwo: 'San Francisco, CA 94107',
                                phone: '(123) 456-7890'

                            },
                            {
                                img: './img/a4.jpg',
                                name: 'Michael Zimber',
                                title: 'Sales Manager',
                                company: 'Twitter, Inc.',
                                addressOne: '795 Folsom Ave, Suite 600',
                                addressTwo: 'San Francisco, CA 94107',
                                phone: '(123) 456-7890'

                            },
                            {
                                img: './img/a5.jpg',
                                name: 'Sandra Smith',
                                title: 'Graphics Designer',
                                company: 'Twitter, Inc.',
                                addressOne: '795 Folsom Ave, Suite 600',
                                addressTwo: 'San Francisco, CA 94107',
                                phone: '(123) 456-7890'

                            },
                            {
                                img: './img/a6.jpg',
                                name: 'Janet Carton',
                                title: 'CFO',
                                company: 'Twitter, Inc.',
                                addressOne: '795 Folsom Ave, Suite 600',
                                addressTwo: 'San Francisco, CA 94107',
                                phone: '(123) 456-7890'

                            },
                            {
                                img: './img/a7.jpg',
                                name: 'Alex Jonathan',
                                title: 'CEO',
                                company: 'Twitter, Inc.',
                                addressOne: '795 Folsom Ave, Suite 600',
                                addressTwo: 'San Francisco, CA 94107',
                                phone: '(123) 456-7890'

                            },
                            {
                                img: './img/a8.jpg',
                                name: 'John Smith',
                                title: 'Graphics Designer',
                                company: 'Twitter, Inc.',
                                addressOne: '795 Folsom Ave, Suite 600',
                                addressTwo: 'San Francisco, CA 94107',
                                phone: '(123) 456-7890'

                            },
                            {
                                img: './img/a1.jpg',
                                name: 'John Smith',
                                title: 'Graphics Designer',
                                company: 'Twitter, Inc.',
                                addressOne: '795 Folsom Ave, Suite 600',
                                addressTwo: 'San Francisco, CA 94107',
                                phone: '(123) 456-7890'

                            },
                            {
                                img: './img/a2.jpg',
                                name: 'John Smith',
                                title: 'Graphics Designer',
                                company: 'Twitter, Inc.',
                                addressOne: '795 Folsom Ave, Suite 600',
                                addressTwo: 'San Francisco, CA 94107',
                                phone: '(123) 456-7890'

                            },
                            {
                                img: './img/a3.jpg',
                                name: 'Alex Jonathan',
                                title: 'CEO',
                                company: 'Twitter, Inc.',
                                addressOne: '795 Folsom Ave, Suite 600',
                                addressTwo: 'San Francisco, CA 94107',
                                phone: '(123) 456-7890'

                            },
                            {
                                img: './img/a4.jpg',
                                name: 'Monica Smith',
                                title: 'Graphics Designer',
                                company: 'Twitter, Inc.',
                                addressOne: '795 Folsom Ave, Suite 600',
                                addressTwo: 'San Francisco, CA 94107',
                                phone: '(123) 456-7890'

                            }
                        ];

        });
})();
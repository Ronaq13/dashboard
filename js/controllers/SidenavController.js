(function() {
    angular.module('socialApp')
        .controller('SidenavController', function() {
            this.settings = [
                { name: 'Account', icon: 'account_circle', url: '#/', id: 'item1' },
                { name: 'Contacts', icon: 'contacts', url: '#/contacts', id: 'item2' },
                { name: 'Assignment', icon: 'assignment', url: '#/assignment', id: 'item3' },
                { name: 'Backup', icon: 'backup', url: '#/backup', id: 'item4' },
                { name: 'Bookmark', icon: 'bookmark', url: '#/bookmark/emailVerification', id: 'item5' },
                { name: 'DNS', icon: 'dns', url: '#/dns', id: 'item6' },
                { name: 'Description', icon: 'description', url: '#/description', id: 'item7' },
                { name: 'Extension', icon: 'extension', url: '#/extension', id: 'item8' },
            ];

            this.labels = [
                { name: 'GCcbh', color: '#df7474' },
                { name: 'CHchv', color: '#86df74' },
                { name: 'CHdghv', color: '#74a8df' },
                { name: 'Wbh', color: '#df74df' },
                { name: 'Pfgd', color: '#dfd574' },
                { name: 'Tbvx', color: '#3ee0c0' },
                { name: 'Cbhbd', color: '#3e63e0' },
                { name: 'Ucttf', color: '#af3ee0' },
                { name: 'Jcgcf', color: '#e03e65' },
            ];

        });
})();
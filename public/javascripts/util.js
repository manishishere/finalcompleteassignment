tpl = {

    // Hash of preloaded views for the app
    views:{},

    // Recursively pre-load all the views for the app.
    // This implementation should be changed in a production environment. All the template files should be
    // concatenated in a single file.
    loadviews:function (names, callback) {

        var that = this;

        var loadTemplate = function (index) {
            var name = names[index];
            console.log('Loading template: ' + name);
            $.get('views/' + name + '.html', function (data) {
                that.views[name] = data;
                index++;
                if (index < names.length) {
                    loadTemplate(index);
                } else {
                    callback();
                }
            });
        }

        loadTemplate(0);
    },

    // Get template by name from hash of preloaded views
    get:function (name) {
        return this.views[name];
    }

};

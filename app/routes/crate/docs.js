import Ember from 'ember';

export default Ember.Route.extend({
    redirect() {
        var crate = this.modelFor('crate');

        var documentation = crate.get('documentation');
        if (documentation) {
            window.location = documentation;
        } else {
            // Redirect to the crate's main page and show a flash error if
            // no documentation is found
            var message = 'Crate does not supply a documentation URL';
            this.controllerFor('application').set('nextFlashError', message);
            this.replaceWith('crate', crate);
        }
    },
});

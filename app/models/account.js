import DS from 'ember-data';
export default DS.Model.extend({
    name: DS.attr('string'),
    key: DS.attr('string'),
    active: DS.attr('boolean')
});

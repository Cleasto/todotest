Todos.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
 {
   id: 1,
   title: 'Mow lawn',
   isCompleted: false
 },
 {
   id: 2,
   title: 'Groceries',
   isCompleted: false
 },
 {
   id: 3,
   title: 'Take out trash',
   isCompleted: false
 }
];
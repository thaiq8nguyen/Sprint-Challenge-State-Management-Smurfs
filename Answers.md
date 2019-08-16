1. What problem does the context API help solve?
*ContextAPI lets an app properties be shared among all sub-components enclosed within a Provider component*
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
*Actions let the reducer know how and what to modify the state. Reducers receive action dispatch from actions to modofy the state. Store create a Redux store to be used in an app. The store is known as a 'single source of truth' because it lets an app access its data whereever it is needed*
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
*Application state is the Redux store data, component state is local state of a component. Local state might be useful where a component state does not need to share to other components in an app*
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
*Redux-thunk returns a function instead of a normal object in actions. It allows async communication between an app and an outside API.*
1. What is your favorite state management system you've learned and this sprint? Please explain why!
*Althought a state-management system adds an extra layer of complexity to an app. It will be useful in a large app where props are needed in many components*

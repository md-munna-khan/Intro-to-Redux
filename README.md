You’ve built your foundation in state management — now it’s time to wield one of the most powerful tools in the React ecosystem: Redux.



In this module, we’ll explore the why behind Redux, understand its architecture, and demystify how it works under the hood. From grasping unidirectional vs bi-directional data flow, to breaking down the Flux pattern, to setting up your first Redux store and slice — we’ve got it all covered.

💡 Whether Redux once felt too abstract or over-engineered, this module will change that.



By the end, you'll not only be able to set up and use Redux confidently but also understand exactly why and when it makes sense to use it.



Let’s begin by asking the most important question:

## 21-1 Why Redux?
- 1 Most of the popular Library and most oldest
- 2 Most of Company use Redux
- 3 more fast value generated
- 4  as a fresher must learn as like library which library use maximum company and people and thats why we choose this library



## 21-2 What Will You Learn?  
- Redux is not just for react.
- Redux can be used with any js library

#### Redux made a package named `React-Redux`
- This is made only for react. combined with wrappers

#### We will basically learn 
`redux tool kit`
- Legacy redux (old one) did not had `action` and `reduce`. we had to create it by our own.Old Redux was unopinionated 
- Whether redux tool kit is opinionated (used for local state)
- with redux tool kit we get `RTK Query`. Which is used for data fetching. In redux legacy it `Redux Thunk` was used for data fetching
![alt text](image-1.png)
## 21-3 State, Bi-directional, and uni-directional data flow.

#### What is state?
- Its present state. 
- Each user action generates a state. 
- Storing the states methods are different.
- State is a piece of information 
- State Communication can be of two types in an application 
  1. `Bidirectional` : State can flow from one component to another or from the passed component to previous component. Handling multiple component link becomes tough can create infinity loop. This is why unidirectional is best. 

  ![alt text](image-5.png)

  1. `Unidirectional` : State can pass in one direction. Redux brought unidirectional using flux 
## 21-4 Problems with unidirectional data flow.
  ![alt text](image-2.png)
  - Lets discuss a problem of unidirectional

![alt text](image-1.png)

- Lets assume a case like we have a state in grand parent. we need to use the state in children who is under parent. we need to do `prop drilling` then pass to parent(though parents has nothing to do with the sate). then parent to children the prop is passed and used.
- If there is scenario is like children has to change the state like do + or - , then we also have to pass the state change function from parent to children. 

![alt text](image-3.png)

- Suppose we have two children under a parent. from parent to children state is passed and a stet change function is there. The state change function can not be interchanged between two children. The state function needs to `state lifted` for pass to another children.
![alt text](image-3.png)

#### All these unidirectional state problem is solved by redux (because redux uses flux under the hood)
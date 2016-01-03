import MakeConnectedComponent from'./MakeConnectedComponent'
 
export default function connect(store, ...propNames) {
 return function(target) {
   return MakeConnectedComponent(target, store, ...propNames);
 };
}
 

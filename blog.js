// useMemo

/**
  Today i want to discuss about react one of the important hook useMemo.
  that help you skipping expensive recalculation and preventing re-render of the component.
  
 
 
  Definition : 
  UseMemo is a react hooks that's let you catch the result of the expensive calculation between the component re-render.
 
 
 
  How to use useMemo
  
 call useMemo at the top of your component for catching the calculate value.
  import { useMemo } from 'react';

  const filterUsers = useMemo(() => {
     return users?.filter((user) => user.toLowerCase().includes(search.toLowerCase()));
   }, [search]);


   For using useMemo you have to need pass the two argument for use useMemo

   1. Calculation function  that take no argument and return a value that you have to need.


   
   Example : 

   () => {
     return users?.filter((user) => user.toLowerCase().includes(search.toLowerCase()));
   }

   in this example i have search user from a array.

   2. L






 */

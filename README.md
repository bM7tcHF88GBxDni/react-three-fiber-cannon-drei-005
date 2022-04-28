#### Live Demo
https://center-impulse.netlify.app/

# react-three-fiber-cannon-drei-005
Extracting a feature from https://github.com/bM7tcHF88GBxDni/react-three-fiber-cannon-drei-004 where I've been experimenting and iterating over a large number of ideas using ThreeJS and React to take my WIP personal and portfolio website to the next level with 3D.

# Objective
I want to add interactivity to my website that takes advantage of the 3D canvas provided by React Three Fiber. I am planning for my site to have some 3D assets that the user can click on and push around to a nonchalant effect.

# Experimentation and Iteration
I use a cube to develop and test my implementations. I ideated and planned a few general approaches:

<details>
<summary>Solution 1</summary>
<br>
I went straight into the deep end with this implementation as I felt it would be the most impressive, though also the most complex:

By default, Cannon applies impulse force to an object at the center of its volume. I wanted to apply force precisely where the user clicks on the object.

v1 Demo and Code:
https://codesandbox.io/s/force-on-click-position-o7qm37?file=/src/App.js:773-1477

<br>

</details>


<details>
<summary>Solution 2</summary>
<br>
  v1 Using normal of face is reliable yet very versatile and still high impact 

  v2 Pushing and Pulling version

<br>

</details>





### Solution
Apply impulse on center of cube in reverse normal directions


### Tech
React Three Fiber (React wrapper for underlying ThreeJS)
React Three Drei for extra features
React Three Cannon for physics (adding force to the object a user clicks, React wrapper for underlying CannonES)


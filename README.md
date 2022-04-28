#### Live Demo
https://center-impulse.netlify.app/

# react-three-fiber-cannon-drei-005
Extracting a feature from https://github.com/bM7tcHF88GBxDni/react-three-fiber-cannon-drei-004 where I've been experimenting and iterating over a large number of ideas using ThreeJS and React to take my WIP personal and portfolio website to the next level with 3D.

# Objective
I want to add interactivity to my website that takes advantage of the 3D canvas provided by React Three Fiber. I am planning for my site to have some 3D assets that the user can click on and push around to a nonchalant effect.

# Experimentation and Iteration
I use a cube to develop and test my implementations. I ideated and planned a few general approaches:


### Solution 1
I went straight into the deep end with the first implementation as I felt it would be the most impressive, though also the most complex:

v1
- By default, Cannon applies impulse force to an object at the center of its volume. I wanted to apply force precisely where the user clicks on the object.
- When the user clicks a cube face, apply impulse force away in the direction of the face (push).

v2
- When the user clicks on a face facing up, apply negative impulse (pull) instead of pushing into the ground to meagre effect. 

[GIF]
</br>
Demo and Code:
https://codesandbox.io/s/force-on-click-position-solution-1-yut4lt

Code is fully commented. Issues with this implementation are:
1) Once the cube is pushed over onto another face- forces applied break in a way I don't fully understand. Some sort of issue with how the force is applied to the objects local co-ordinates after rotation changes.
2) const deltaPosition = worldPoint.sub(center);
This works well for only vertical faces. Clicking on a horizontal face will produce wrong results?
3) const deltaPosition = center.sub(worldPoint);
This works well for only horizontal faces. Clicking on a vertical face will produce wrong results?
4) Force is more powerful when applied closer to the center of gravity, instead of further away from it
e.g. imagine a skyscraper, it will fall over easily when pushed at the base instead of the top/roof. Try it on a face.

### Solution 2
This is necessary as the first implementation above is quite difficult to debug. React Three Fiber does not have optimal debugging tools. This implementation has its benefits: 
- Simpler method, easy to understand/maintain and implement
- Still high impact
- Remains versatile, if not more


v1 Apply impulse on center of cube in reverse normal directions

v2 Pushing and Pulling version

# General Challenges
- Lack of good documentation
- Lack of debugging
- Split community

### Tech Stack
React Three Fiber (React wrapper for underlying ThreeJS)
React Three Drei for extra features
React Three Cannon for physics (adding force to the object a user clicks, React wrapper for underlying CannonES)


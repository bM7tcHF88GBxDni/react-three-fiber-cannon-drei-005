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
- By default, Cannon applies impulse force to an object at the center of its volume. Force is applied precisely where the user clicks on the object.
- When the user clicks a cube face, apply impulse force away in the direction of the face (push).

v2
- When the user clicks on a face facing up, apply negative impulse (pull) instead of pushing into the ground to meagre effect. 

[GIF]
</br>
Demo and Code:
https://codesandbox.io/s/force-on-click-position-solution-1-yut4lt

Code is fully commented. Issues with this implementation are:
1) Once the cube is pushed over onto another face, the objects local XYZ axes rotate and change. 
The relative position of the click is still calcualted correctly but the direction of the force
applied is wrong- as if the object's local XYZ axes have not changed. This must be related to
how the cube face's normal is used as a direction (and force).
2) Force is more powerful when applied closer to the center of gravity, instead of further away from it
e.g. imagine a skyscraper, it will fall over easily when pushed at the base instead of the top/roof. Try it on a face.

### Solution 2
This is necessary as the first implementation above is quite difficult to debug with the tools available, and I am happy with the flawed end result which otherwise would require a great deal of additional effort to diagnose and fix. 

A second solution has plenty of benefits:
- Simpler method, easy to understand/maintain and implement
- Still high impact, users probably wouldn't notice the difference, especially if the 3D asset has sufficient normals/faces
- Remains versatile, can be used for many shapes, if not more

v1 
- Apply impulse on center of object in reverse normal directions (pushing object)

Additional:
- Can be used to pull object by using just normal directions

[GIF]
</br>
Demo and Code:
https://codesandbox.io/s/force-on-center-of-volume-c91r7d


# General Challenges
- Lot of onboarding to do: underlying ThreeJS, CannonJS
- Lack of comprehensive documentation, lack of resources
- No visual GUI slowed development/experimentation
- Split community
- Lack of debugging tools

### Tech Stack
React Three Fiber (React wrapper for underlying ThreeJS)
React Three Drei for extra features
React Three Cannon for physics (adding force to the object a user clicks, React wrapper for underlying CannonES)


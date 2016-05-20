/*      Rendering van de 3D dobbelsteen     */
/*  
*   Deze code is gebaseerd op een example van de THREE.js library
*   Source: https://github.com/mrdoob/three.js/blob/master/examples/canvas_geometry_cube.html
*   License: MIT - https://github.com/mrdoob/three.js/blob/master/LICENSE
*/

var container;
var camera, scene, renderer;

var cubes = [];
var cubeOut = [];

var container;

var current;

init();

/*  Initaliseerd alle benodigde objecten
*   geen parameters
*   geen return
*/
function init() 
{
    $(document).ready(function () {
        //Container
        container = document.createElement('div');
        document.getElementById('container').appendChild(container);

        //Camera
        camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 500;

        scene = new THREE.Scene();

        //Cube
        var loader = new THREE.TextureLoader();
        loader.setPath('_images/textures/');

        var texture0 = loader.load('1.png');
        var texture1 = loader.load('2.png');
        var texture2 = loader.load('3.png');
        var texture3 = loader.load('4.png');
        var texture4 = loader.load('5.png');
        var texture5 = loader.load('6.png');

        var materials = [
            new THREE.MeshBasicMaterial({ map: texture0 }),
            new THREE.MeshBasicMaterial({ map: texture1 }),
            new THREE.MeshBasicMaterial({ map: texture2 }),
            new THREE.MeshBasicMaterial({ map: texture3 }),
            new THREE.MeshBasicMaterial({ map: texture4 }),
            new THREE.MeshBasicMaterial({ map: texture5 })
        ];

        var geometry = new THREE.BoxGeometry(100, 100, 100, 1, 1, 1);
        var material = new THREE.MeshFaceMaterial(materials);

        //Voegt alle dobbelstenen toe
        addCube(geometry, material, -400, 150);
        addCube(geometry, material, -200, 150);
        addCube(geometry, material, 0, 150);
        addCube(geometry, material, 200, 150);
        addCube(geometry, material, 400, 150);

        //Renderer
        renderer = new THREE.WebGLRenderer();
        renderer.setClearColor(0xf0f0f0);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

        container.appendChild(renderer.domElement);

        current = 0;
        addCubeOutputs();
        animate();
    });
}

/*  Voegt een kubus toe
*   @param1: de geometry
*   @param2: het materiaal waar de kubes van is gemaakt
*   @param3: de x positie van de kubus
*   @param4: de y positie van de kubus
*   geen return
*/
function addCube(geometry, material, x, y) 
{
    var cube = new THREE.Mesh(geometry, material);
    cube.position.x = x;
    cube.position.y = y;

    scene.add(cube);

    cubes.push(cube);
}

/*  Voegt alle cube outputs toe
*   geen parameters
*   geen return
*/
function addCubeOutputs()
{
    for(var i = 0; i < cubes.length; i++)
    {
        cubeOut.push(Math.floor(Math.random() * 20) + 1);
    }    
}

/*  Reset de render
*   geen parameters
*   geen return
*/
function resetRender()
{
    //Reset de render
    for (var i = 0; i < cubes.length; i++) 
    {
        cubes[i].rotation.x = 0;
        cubes[i].rotation.y = 0;
        cubes[i].rotation.z = 0;
    }
    cubeOut = []
    addCubeOutputs();

    current = 0;
}

/*  zorgt ervoor dat de kubus rond draaien
*   geen parameters
*   geen return
*/
function animate() {
    var side = cubeOut[current];
    if (cubes[current].rotation.x < side) 
    {
        console.log(side + ':' + cubes[current].rotation.x);
        requestAnimationFrame(animate);
        render(current);
    }
    else
    {
        if(current < 5)
        {
            current++;
            requestAnimationFrame(animate);
            render(current);
        }

        console.log(current);
    }
}

/*  zorgt ervoor dat de scene wordt gerenderd
*   geen parameters
*   geen return
*/
function render(i) {
    cubes[i].rotation.x += (25 - cubes[i].rotation.x) * 0.01;
    renderer.render(scene, camera);
}
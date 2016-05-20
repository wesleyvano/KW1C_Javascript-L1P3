/*      Rendering van de 3D dobbelsteen     */
/*  
*   Deze code is gebaseerd op een example van de THREE.js library
*   Source: https://github.com/mrdoob/three.js/blob/master/examples/canvas_geometry_cube.html
*   License: MIT - https://github.com/mrdoob/three.js/blob/master/LICENSE
*/
var container;
var camera, scene, renderer;

//Alle kubuses
var cubes = [];
var ogen = [];

//De huidige dobbelsteen
var current;

//Start de code
init();

/*  Initaliseerd de renderer
*   geen params
*   geen return
*/
function init()
{
    $(document).ready(function()
    {
        //Container
        container = document.createElement('div');
        document.getElementById('container').appendChild(container);

        //Camera
        camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 500;
        
        //De Scene
        scene = new THREE.Scene();
       
        //Laad de texture
        var loader = new THREE.TextureLoader();
        loader.setPath('_images/textures/');

        var texture0 = loader.load('1.jpg');
        var texture1 = loader.load('2.jpg');
        var texture2 = loader.load('3.jpg');
        var texture3 = loader.load('4.jpg');
        var texture4 = loader.load('5.jpg');
        var texture5 = loader.load('6.jpg');

        //Maakt de materialen aan
        var materials = [
            new THREE.MeshBasicMaterial({ map: texture0 }),
            new THREE.MeshBasicMaterial({ map: texture1 }),
            new THREE.MeshBasicMaterial({ map: texture2 }),
            new THREE.MeshBasicMaterial({ map: texture3 }),
            new THREE.MeshBasicMaterial({ map: texture4 }),
            new THREE.MeshBasicMaterial({ map: texture5 })
        ];

        //De geometry en het materiaal wordt aangemaakt en gekoppeld
        var geometry = new THREE.BoxGeometry(100, 100, 100, 1, 1, 1);
        var material = new THREE.MeshFaceMaterial(materials);

        //Voegt alle dobbelstenen toe
        addCube(geometry, material, -400, 150);
        addCube(geometry, material, -200, 150);
        addCube(geometry, material, 0, 150);
        addCube(geometry, material, 200, 150);
        addCube(geometry, material, 400, 150);

        //De Renderer
        renderer = new THREE.WebGLRenderer();
        renderer.setClearColor(0xf0f0f0);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

        container.appendChild(renderer.domElement);
    });
}

/*  De animatie
*   geen parameters
*   geen return
*/
function animate()
{
    var oog = ogen[current];
    var cube = cubes[current];

    var rotatie = 0;

    if(oog == 1)
    {
        rotatie = 4.75;
    }
    else if(oog == 2)
    {
        rotatie = 8;
    }
    else if(oog == 3)
    {
        rotatie = 8;
    }
    else if(oog == 4)
    {
        rotatie = 4.75;
    }
    else if(oog == 5)
    {
        rotatie = 6.50;
    }
    else if(oog == 6)
    {
        rotatie = 9.5;   
    }
    
    if(((oog == 3 || oog == 4 || oog == 5 || oog == 6) && cube.rotation.x < rotatie) || ((oog == 1 || oog == 2) && cube.rotation.y < rotatie))
    {
        requestAnimationFrame(animate);
        render(oog);           
    }
    else
    {
        if(current < cubes.length - 1)
        {
            current++;
            requestAnimationFrame(animate);
            render();
        }
    }
}

/*  De render
*
*
*/
function render(oog)
{
    if(oog == 3 || oog == 4 || oog == 5 || oog == 6)
    {
        cubes[current].rotation.x += 25 * 0.01;
    }
    else if(oog == 1 || oog == 2)
    {
        cubes[current].rotation.y += 25 * 0.01;
    }

    renderer.render(scene, camera);
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

/*  Reset de render
*   geen parameters
*   geen return
*/
function resetRender()
{
    for(var i = 0; i < cubes.length; i++)
    {
        cubes[i].rotation.x = 0;
        cubes[i].rotation.y = 0;
        cubes[i].rotation.z = 0;
    }

    ogen = [];
    current = 0;
}

/*  Voegt een oog toe aan de ogen
*   @param1: De waarde van het oog
*   geen return
*/
function setOgen(mainOgen)
{
    this.ogen = mainOgen;
}
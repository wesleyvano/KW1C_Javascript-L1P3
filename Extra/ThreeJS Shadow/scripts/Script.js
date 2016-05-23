/*      Rendering van de 3D dobbelsteen     */
/*  
*   Deze code is gebaseerd op een example van de THREE.js library
*   Source: https://github.com/mrdoob/three.js/blob/master/examples/canvas_geometry_cube.html
*   License: MIT - https://github.com/mrdoob/three.js/blob/master/LICENSE
*/
var container;
var camera, scene, renderer, light, geometry;

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
    $(document).ready(function () {
        //Container
        container = document.createElement('div');
        document.getElementById('container').appendChild(container);

        //Camera
        camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.y = 150;
        camera.position.z = 500;

        //De Scene
        scene = new THREE.Scene();

        //Laad de texture
        var loader = new THREE.TextureLoader();
        loader.setPath('../Yatzee/_images/textures/');

        var texture0 = loader.load('1.jpg');
        var texture1 = loader.load('2.jpg');
        var texture2 = loader.load('3.jpg');
        var texture3 = loader.load('4.jpg');
        var texture4 = loader.load('5.jpg');
        var texture5 = loader.load('6.jpg');

        //Maakt de materialen aan
        var materials = [
            new THREE.MeshLambertMaterial({ map: texture0, skinning: true }),
            new THREE.MeshLambertMaterial({ map: texture1, skinning: true }),
            new THREE.MeshLambertMaterial({ map: texture2, skinning: true }),
            new THREE.MeshLambertMaterial({ map: texture3, skinning: true }),
            new THREE.MeshLambertMaterial({ map: texture4, skinning: true }),
            new THREE.MeshLambertMaterial({ map: texture5, skinning: true })
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
        
        //Licht
        light = new THREE.AmbientLight(0xc0c0c0);
        
        /*
        var directionalLight = new THREE.DirectionalLight( Math.random() * 0xffffff );
		directionalLight.position.x = Math.random() - 0.5;
		directionalLight.position.y = Math.random() - 0.5;
		directionalLight.position.z = Math.random() - 0.5;
		directionalLight.position.normalize();
		scene.add( directionalLight );
        */

        //De Renderer
        renderer = new THREE.WebGLRenderer();
        renderer.setClearColor(0x000000);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

        scene.add(light);

        container.appendChild(renderer.domElement);
        animate();
    });
}

function animate()
{
    requestAnimationFrame(animate);
    render();
}

function render()
{

    renderer.render(scene, camera);
}

function addCube(geometry, material, x, y) 
{
    var cube = new THREE.Mesh(geometry, material);
    cube.position.x = x;
    cube.position.y = y;

    scene.add(cube);

    cubes.push(cube);
}
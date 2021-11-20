import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Box, Spinner } from '@chakra-ui/react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { loadGLTFModel } from '../lib/model';

function easeOutCirc(x: number) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}
/* using state because, I want to first render all HTML content(everything), only after that using useEffect want render the Voxel with proper error handling. */
const VoxelDog: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null); //canvas where we render the voxel in the webpage
  const [loading, setLoading] = useState(true); //while loading the voxel use this state
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer>(); //renderer that will draw all the 3d objects
  const [_camera, setCamera] = useState<THREE.OrthographicCamera>(); //camera from where we'll see all the objects
  const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0));
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
  );
  const [scene] = useState(new THREE.Scene()); //scene where the voxel will be added
  const [_controls, setControls] = useState<OrbitControls>();

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.setSize(scW, scH);
    }
  }, [renderer]);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer;
    if (container && !renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      });
      renderer.setPixelRatio(window.devicePixelRatio); //pixel is scaled according to display pixelratio
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding; //sRGB for sRGB monitor support
      container.appendChild(renderer.domElement); //append the <canvas/> dom element
      setRenderer(renderer);

      //640 -> 240
      //8 -> 6
      const scale = scH * 0.005 + 4.8;
      //camera position frustrum
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);
      setCamera(camera);

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;
      setControls(controls);

      loadGLTFModel(scene, '/dog.glb', {
        receiveShadow: false,
        castShadow: false
      }).then(() => {
        animate();
        setLoading(false);
      });

      let req: number;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);

        frame = frame <= 100 ? frame + 1 : frame;
        /* first 100 frame play this fast rotation  */
        if (frame <= 100) {
          const p = initialCameraPosition;
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

          camera.position.y = 10;
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
          camera.lookAt(target);
        } else {
          controls.update();
        }
        renderer.render(scene, camera);
      };
      return () => {
        cancelAnimationFrame(req);
        renderer?.dispose();
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [renderer, handleWindowResize]);

  return (
    <Box
      ref={refContainer}
      className="voxel-dog"
      m="auto"
      mt={['-20px', '-60px', '-120px']}
      mb={['-40px', '-140px', '-200px']}
      w={[280, 480, 640]}
      h={[280, 480, 640]}
      position="relative"
    >
      {loading && (
        <Spinner
          size="xl"
          position="absolute"
          left="50%"
          top="50%"
          ml="calc(0px - var(--spinner-size) / 2)"
          mt="calc(0px - var(--spinner-size))"
        />
      )}
    </Box>
  );
};

export default VoxelDog;

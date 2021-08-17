const items = [
  {
    href: "https://threejs.org/docs/manual/en/introduction/Creating-a-scene.html",
    label: "Creating a scene",
  },
  {
    href: "https://threejs.org/docs/manual/en/introduction/Installation.html",
    label: "Installation",
  },
  {
    href: "https://threejs.org/docs/manual/en/introduction/Browser-support.html",
    label: "Browser support",
  },
  {
    href: "https://threejs.org/docs/manual/en/introduction/WebGL-compatibility-check.html",
    label: "WebGL compatibility check",
  },
  {
    href: "https://threejs.org/docs/manual/en/introduction/How-to-run-things-locally.html",
    label: "How to run things locally",
  },
  {
    href: "https://threejs.org/docs/manual/en/introduction/Drawing-lines.html",
    label: "Drawing lines",
  },
  {
    href: "https://threejs.org/docs/manual/en/introduction/Creating-text.html",
    label: "Creating text",
  },
  {
    href: "https://threejs.org/docs/manual/en/introduction/Loading-3D-models.html",
    label: "Loading 3D models",
  },
  {
    href: "https://threejs.org/docs/manual/en/introduction/Libraries-and-Plugins.html",
    label: "Libraries and Plugins",
  },
  {
    href: "https://threejs.org/docs/manual/en/introduction/FAQ.html",
    label: "FAQ",
  },
  {
    href: "https://threejs.org/docs/manual/en/introduction/Useful-links.html",
    label: "Useful links",
  },
  {
    href: "https://threejs.org/docs/manual/en/introduction/How-to-update-things.html",
    label: "How to update things",
  },
  {
    href: "https://threejs.org/docs/manual/en/introduction/How-to-dispose-of-objects.html",
    label: "How to dispose of objects",
  },
  {
    href: "https://threejs.org/docs/manual/en/introduction/How-to-create-VR-content.html",
    label: "How to create VR content",
  },
  {
    href: "https://threejs.org/docs/manual/en/introduction/How-to-use-post-processing.html",
    label: "How to use post-processing",
  },
  {
    href: "https://threejs.org/docs/manual/en/introduction/Matrix-transformations.html",
    label: "Matrix transformations",
  },
  {
    href: "https://threejs.org/docs/manual/en/introduction/Animation-system.html",
    label: "Animation system",
  },
  {
    href: "https://threejs.org/docs/manual/en/buildTools/Testing-with-NPM.html",
    label: "Testing with NPM",
  },
  {
    href: "https://threejs.org/docs/api/en/animation/AnimationAction.html",
    label: "AnimationAction",
  },
  {
    href: "https://threejs.org/docs/api/en/animation/AnimationClip.html",
    label: "AnimationClip",
  },
  {
    href: "https://threejs.org/docs/api/en/animation/AnimationMixer.html",
    label: "AnimationMixer",
  },
  {
    href: "https://threejs.org/docs/api/en/animation/AnimationObjectGroup.html",
    label: "AnimationObjectGroup",
  },
  {
    href: "https://threejs.org/docs/api/en/animation/AnimationUtils.html",
    label: "AnimationUtils",
  },
  {
    href: "https://threejs.org/docs/api/en/animation/KeyframeTrack.html",
    label: "KeyframeTrack",
  },
  {
    href: "https://threejs.org/docs/api/en/animation/PropertyBinding.html",
    label: "PropertyBinding",
  },
  {
    href: "https://threejs.org/docs/api/en/animation/PropertyMixer.html",
    label: "PropertyMixer",
  },
  {
    href: "https://threejs.org/docs/api/en/animation/tracks/BooleanKeyframeTrack.html",
    label: "BooleanKeyframeTrack",
  },
  {
    href: "https://threejs.org/docs/api/en/animation/tracks/ColorKeyframeTrack.html",
    label: "ColorKeyframeTrack",
  },
  {
    href: "https://threejs.org/docs/api/en/animation/tracks/NumberKeyframeTrack.html",
    label: "NumberKeyframeTrack",
  },
  {
    href: "https://threejs.org/docs/api/en/animation/tracks/QuaternionKeyframeTrack.html",
    label: "QuaternionKeyframeTrack",
  },
  {
    href: "https://threejs.org/docs/api/en/animation/tracks/StringKeyframeTrack.html",
    label: "StringKeyframeTrack",
  },
  {
    href: "https://threejs.org/docs/api/en/animation/tracks/VectorKeyframeTrack.html",
    label: "VectorKeyframeTrack",
  },
  { href: "https://threejs.org/docs/api/en/audio/Audio.html", label: "Audio" },
  {
    href: "https://threejs.org/docs/api/en/audio/AudioAnalyser.html",
    label: "AudioAnalyser",
  },
  {
    href: "https://threejs.org/docs/api/en/audio/AudioContext.html",
    label: "AudioContext",
  },
  {
    href: "https://threejs.org/docs/api/en/audio/AudioListener.html",
    label: "AudioListener",
  },
  {
    href: "https://threejs.org/docs/api/en/audio/PositionalAudio.html",
    label: "PositionalAudio",
  },
  {
    href: "https://threejs.org/docs/api/en/cameras/ArrayCamera.html",
    label: "ArrayCamera",
  },
  {
    href: "https://threejs.org/docs/api/en/cameras/Camera.html",
    label: "Camera",
  },
  {
    href: "https://threejs.org/docs/api/en/cameras/CubeCamera.html",
    label: "CubeCamera",
  },
  {
    href: "https://threejs.org/docs/api/en/cameras/OrthographicCamera.html",
    label: "OrthographicCamera",
  },
  {
    href: "https://threejs.org/docs/api/en/cameras/PerspectiveCamera.html",
    label: "PerspectiveCamera",
  },
  {
    href: "https://threejs.org/docs/api/en/cameras/StereoCamera.html",
    label: "StereoCamera",
  },
  {
    href: "https://threejs.org/docs/api/en/constants/Animation.html",
    label: "Animation",
  },
  {
    href: "https://threejs.org/docs/api/en/constants/Core.html",
    label: "Core",
  },
  {
    href: "https://threejs.org/docs/api/en/constants/CustomBlendingEquations.html",
    label: "CustomBlendingEquation",
  },
  {
    href: "https://threejs.org/docs/api/en/constants/Materials.html",
    label: "Materials",
  },
  {
    href: "https://threejs.org/docs/api/en/constants/Renderer.html",
    label: "Renderer",
  },
  {
    href: "https://threejs.org/docs/api/en/constants/Textures.html",
    label: "Textures",
  },
  {
    href: "https://threejs.org/docs/api/en/core/BufferAttribute.html",
    label: "BufferAttribute",
  },
  {
    href: "https://threejs.org/docs/api/en/core/BufferGeometry.html",
    label: "BufferGeometry",
  },
  { href: "https://threejs.org/docs/api/en/core/Clock.html", label: "Clock" },
  {
    href: "https://threejs.org/docs/api/en/core/EventDispatcher.html",
    label: "EventDispatcher",
  },
  {
    href: "https://threejs.org/docs/api/en/core/GLBufferAttribute.html",
    label: "GLBufferAttribute",
  },
  {
    href: "https://threejs.org/docs/api/en/core/InstancedBufferAttribute.html",
    label: "InstancedBufferAttribute",
  },
  {
    href: "https://threejs.org/docs/api/en/core/InstancedBufferGeometry.html",
    label: "InstancedBufferGeometry",
  },
  {
    href: "https://threejs.org/docs/api/en/core/InstancedInterleavedBuffer.html",
    label: "InstancedInterleavedBuffer",
  },
  {
    href: "https://threejs.org/docs/api/en/core/InterleavedBuffer.html",
    label: "InterleavedBuffer",
  },
  {
    href: "https://threejs.org/docs/api/en/core/InterleavedBufferAttribute.html",
    label: "InterleavedBufferAttribute",
  },
  { href: "https://threejs.org/docs/api/en/core/Layers.html", label: "Layers" },
  {
    href: "https://threejs.org/docs/api/en/core/Object3D.html",
    label: "Object3D",
  },
  {
    href: "https://threejs.org/docs/api/en/core/Raycaster.html",
    label: "Raycaster",
  },
  {
    href: "https://threejs.org/docs/api/en/core/Uniform.html",
    label: "Uniform",
  },
  {
    href: "https://threejs.org/docs/api/en/core/bufferAttributeTypes/BufferAttributeTypes.html",
    label: "BufferAttribute Types",
  },
  {
    href: "https://threejs.org/docs/api/en/extras/DataUtils.html",
    label: "DataUtils",
  },
  {
    href: "https://threejs.org/docs/api/en/extras/Earcut.html",
    label: "Earcut",
  },
  {
    href: "https://threejs.org/docs/api/en/extras/ImageUtils.html",
    label: "ImageUtils",
  },
  {
    href: "https://threejs.org/docs/api/en/extras/PMREMGenerator.html",
    label: "PMREMGenerator",
  },
  {
    href: "https://threejs.org/docs/api/en/extras/ShapeUtils.html",
    label: "ShapeUtils",
  },
  {
    href: "https://threejs.org/docs/api/en/extras/core/Curve.html",
    label: "Curve",
  },
  {
    href: "https://threejs.org/docs/api/en/extras/core/CurvePath.html",
    label: "CurvePath",
  },
  {
    href: "https://threejs.org/docs/api/en/extras/core/Font.html",
    label: "Font",
  },
  {
    href: "https://threejs.org/docs/api/en/extras/core/Interpolations.html",
    label: "Interpolations",
  },
  {
    href: "https://threejs.org/docs/api/en/extras/core/Path.html",
    label: "Path",
  },
  {
    href: "https://threejs.org/docs/api/en/extras/core/Shape.html",
    label: "Shape",
  },
  {
    href: "https://threejs.org/docs/api/en/extras/core/ShapePath.html",
    label: "ShapePath",
  },
  {
    href: "https://threejs.org/docs/api/en/extras/curves/ArcCurve.html",
    label: "ArcCurve",
  },
  {
    href: "https://threejs.org/docs/api/en/extras/curves/CatmullRomCurve3.html",
    label: "CatmullRomCurve3",
  },
  {
    href: "https://threejs.org/docs/api/en/extras/curves/CubicBezierCurve.html",
    label: "CubicBezierCurve",
  },
  {
    href: "https://threejs.org/docs/api/en/extras/curves/CubicBezierCurve3.html",
    label: "CubicBezierCurve3",
  },
  {
    href: "https://threejs.org/docs/api/en/extras/curves/EllipseCurve.html",
    label: "EllipseCurve",
  },
  {
    href: "https://threejs.org/docs/api/en/extras/curves/LineCurve.html",
    label: "LineCurve",
  },
  {
    href: "https://threejs.org/docs/api/en/extras/curves/LineCurve3.html",
    label: "LineCurve3",
  },
  {
    href: "https://threejs.org/docs/api/en/extras/curves/QuadraticBezierCurve.html",
    label: "QuadraticBezierCurve",
  },
  {
    href: "https://threejs.org/docs/api/en/extras/curves/QuadraticBezierCurve3.html",
    label: "QuadraticBezierCurve3",
  },
  {
    href: "https://threejs.org/docs/api/en/extras/curves/SplineCurve.html",
    label: "SplineCurve",
  },
  {
    href: "https://threejs.org/docs/api/en/extras/objects/ImmediateRenderObject.html",
    label: "ImmediateRenderObject",
  },
  {
    href: "https://threejs.org/docs/api/en/geometries/BoxGeometry.html",
    label: "BoxGeometry",
  },
  {
    href: "https://threejs.org/docs/api/en/geometries/CircleGeometry.html",
    label: "CircleGeometry",
  },
  {
    href: "https://threejs.org/docs/api/en/geometries/ConeGeometry.html",
    label: "ConeGeometry",
  },
  {
    href: "https://threejs.org/docs/api/en/geometries/CylinderGeometry.html",
    label: "CylinderGeometry",
  },
  {
    href: "https://threejs.org/docs/api/en/geometries/DodecahedronGeometry.html",
    label: "DodecahedronGeometry",
  },
  {
    href: "https://threejs.org/docs/api/en/geometries/EdgesGeometry.html",
    label: "EdgesGeometry",
  },
  {
    href: "https://threejs.org/docs/api/en/geometries/ExtrudeGeometry.html",
    label: "ExtrudeGeometry",
  },
  {
    href: "https://threejs.org/docs/api/en/geometries/IcosahedronGeometry.html",
    label: "IcosahedronGeometry",
  },
  {
    href: "https://threejs.org/docs/api/en/geometries/LatheGeometry.html",
    label: "LatheGeometry",
  },
  {
    href: "https://threejs.org/docs/api/en/geometries/OctahedronGeometry.html",
    label: "OctahedronGeometry",
  },
  {
    href: "https://threejs.org/docs/api/en/geometries/ParametricGeometry.html",
    label: "ParametricGeometry",
  },
  {
    href: "https://threejs.org/docs/api/en/geometries/PlaneGeometry.html",
    label: "PlaneGeometry",
  },
  {
    href: "https://threejs.org/docs/api/en/geometries/PolyhedronGeometry.html",
    label: "PolyhedronGeometry",
  },
  {
    href: "https://threejs.org/docs/api/en/geometries/RingGeometry.html",
    label: "RingGeometry",
  },
  {
    href: "https://threejs.org/docs/api/en/geometries/ShapeGeometry.html",
    label: "ShapeGeometry",
  },
  {
    href: "https://threejs.org/docs/api/en/geometries/SphereGeometry.html",
    label: "SphereGeometry",
  },
  {
    href: "https://threejs.org/docs/api/en/geometries/TetrahedronGeometry.html",
    label: "TetrahedronGeometry",
  },
  {
    href: "https://threejs.org/docs/api/en/geometries/TextGeometry.html",
    label: "TextGeometry",
  },
  {
    href: "https://threejs.org/docs/api/en/geometries/TorusGeometry.html",
    label: "TorusGeometry",
  },
  {
    href: "https://threejs.org/docs/api/en/geometries/TorusKnotGeometry.html",
    label: "TorusKnotGeometry",
  },
  {
    href: "https://threejs.org/docs/api/en/geometries/TubeGeometry.html",
    label: "TubeGeometry",
  },
  {
    href: "https://threejs.org/docs/api/en/geometries/WireframeGeometry.html",
    label: "WireframeGeometry",
  },
  {
    href: "https://threejs.org/docs/api/en/helpers/ArrowHelper.html",
    label: "ArrowHelper",
  },
  {
    href: "https://threejs.org/docs/api/en/helpers/AxesHelper.html",
    label: "AxesHelper",
  },
  {
    href: "https://threejs.org/docs/api/en/helpers/BoxHelper.html",
    label: "BoxHelper",
  },
  {
    href: "https://threejs.org/docs/api/en/helpers/Box3Helper.html",
    label: "Box3Helper",
  },
  {
    href: "https://threejs.org/docs/api/en/helpers/CameraHelper.html",
    label: "CameraHelper",
  },
  {
    href: "https://threejs.org/docs/api/en/helpers/DirectionalLightHelper.html",
    label: "DirectionalLightHelper",
  },
  {
    href: "https://threejs.org/docs/api/en/helpers/GridHelper.html",
    label: "GridHelper",
  },
  {
    href: "https://threejs.org/docs/api/en/helpers/PolarGridHelper.html",
    label: "PolarGridHelper",
  },
  {
    href: "https://threejs.org/docs/api/en/helpers/HemisphereLightHelper.html",
    label: "HemisphereLightHelper",
  },
  {
    href: "https://threejs.org/docs/api/en/helpers/PlaneHelper.html",
    label: "PlaneHelper",
  },
  {
    href: "https://threejs.org/docs/api/en/helpers/PointLightHelper.html",
    label: "PointLightHelper",
  },
  {
    href: "https://threejs.org/docs/api/en/helpers/SkeletonHelper.html",
    label: "SkeletonHelper",
  },
  {
    href: "https://threejs.org/docs/api/en/helpers/SpotLightHelper.html",
    label: "SpotLightHelper",
  },
  {
    href: "https://threejs.org/docs/api/en/lights/AmbientLight.html",
    label: "AmbientLight",
  },
  {
    href: "https://threejs.org/docs/api/en/lights/AmbientLightProbe.html",
    label: "AmbientLightProbe",
  },
  {
    href: "https://threejs.org/docs/api/en/lights/DirectionalLight.html",
    label: "DirectionalLight",
  },
  {
    href: "https://threejs.org/docs/api/en/lights/HemisphereLight.html",
    label: "HemisphereLight",
  },
  {
    href: "https://threejs.org/docs/api/en/lights/HemisphereLightProbe.html",
    label: "HemisphereLightProbe",
  },
  { href: "https://threejs.org/docs/api/en/lights/Light.html", label: "Light" },
  {
    href: "https://threejs.org/docs/api/en/lights/LightProbe.html",
    label: "LightProbe",
  },
  {
    href: "https://threejs.org/docs/api/en/lights/PointLight.html",
    label: "PointLight",
  },
  {
    href: "https://threejs.org/docs/api/en/lights/RectAreaLight.html",
    label: "RectAreaLight",
  },
  {
    href: "https://threejs.org/docs/api/en/lights/SpotLight.html",
    label: "SpotLight",
  },
  {
    href: "https://threejs.org/docs/api/en/lights/shadows/LightShadow.html",
    label: "LightShadow",
  },
  {
    href: "https://threejs.org/docs/api/en/lights/shadows/PointLightShadow.html",
    label: "PointLightShadow",
  },
  {
    href: "https://threejs.org/docs/api/en/lights/shadows/DirectionalLightShadow.html",
    label: "DirectionalLightShadow",
  },
  {
    href: "https://threejs.org/docs/api/en/lights/shadows/SpotLightShadow.html",
    label: "SpotLightShadow",
  },
  {
    href: "https://threejs.org/docs/api/en/loaders/AnimationLoader.html",
    label: "AnimationLoader",
  },
  {
    href: "https://threejs.org/docs/api/en/loaders/AudioLoader.html",
    label: "AudioLoader",
  },
  {
    href: "https://threejs.org/docs/api/en/loaders/BufferGeometryLoader.html",
    label: "BufferGeometryLoader",
  },
  {
    href: "https://threejs.org/docs/api/en/loaders/Cache.html",
    label: "Cache",
  },
  {
    href: "https://threejs.org/docs/api/en/loaders/CompressedTextureLoader.html",
    label: "CompressedTextureLoader",
  },
  {
    href: "https://threejs.org/docs/api/en/loaders/CubeTextureLoader.html",
    label: "CubeTextureLoader",
  },
  {
    href: "https://threejs.org/docs/api/en/loaders/DataTextureLoader.html",
    label: "DataTextureLoader",
  },
  {
    href: "https://threejs.org/docs/api/en/loaders/FileLoader.html",
    label: "FileLoader",
  },
  {
    href: "https://threejs.org/docs/api/en/loaders/FontLoader.html",
    label: "FontLoader",
  },
  {
    href: "https://threejs.org/docs/api/en/loaders/ImageBitmapLoader.html",
    label: "ImageBitmapLoader",
  },
  {
    href: "https://threejs.org/docs/api/en/loaders/ImageLoader.html",
    label: "ImageLoader",
  },
  {
    href: "https://threejs.org/docs/api/en/loaders/Loader.html",
    label: "Loader",
  },
  {
    href: "https://threejs.org/docs/api/en/loaders/LoaderUtils.html",
    label: "LoaderUtils",
  },
  {
    href: "https://threejs.org/docs/api/en/loaders/MaterialLoader.html",
    label: "MaterialLoader",
  },
  {
    href: "https://threejs.org/docs/api/en/loaders/ObjectLoader.html",
    label: "ObjectLoader",
  },
  {
    href: "https://threejs.org/docs/api/en/loaders/TextureLoader.html",
    label: "TextureLoader",
  },
  {
    href: "https://threejs.org/docs/api/en/loaders/managers/DefaultLoadingManager.html",
    label: "DefaultLoadingManager",
  },
  {
    href: "https://threejs.org/docs/api/en/loaders/managers/LoadingManager.html",
    label: "LoadingManager",
  },
  {
    href: "https://threejs.org/docs/api/en/materials/LineBasicMaterial.html",
    label: "LineBasicMaterial",
  },
  {
    href: "https://threejs.org/docs/api/en/materials/LineDashedMaterial.html",
    label: "LineDashedMaterial",
  },
  {
    href: "https://threejs.org/docs/api/en/materials/Material.html",
    label: "Material",
  },
  {
    href: "https://threejs.org/docs/api/en/materials/MeshBasicMaterial.html",
    label: "MeshBasicMaterial",
  },
  {
    href: "https://threejs.org/docs/api/en/materials/MeshDepthMaterial.html",
    label: "MeshDepthMaterial",
  },
  {
    href: "https://threejs.org/docs/api/en/materials/MeshDistanceMaterial.html",
    label: "MeshDistanceMaterial",
  },
  {
    href: "https://threejs.org/docs/api/en/materials/MeshLambertMaterial.html",
    label: "MeshLambertMaterial",
  },
  {
    href: "https://threejs.org/docs/api/en/materials/MeshMatcapMaterial.html",
    label: "MeshMatcapMaterial",
  },
  {
    href: "https://threejs.org/docs/api/en/materials/MeshNormalMaterial.html",
    label: "MeshNormalMaterial",
  },
  {
    href: "https://threejs.org/docs/api/en/materials/MeshPhongMaterial.html",
    label: "MeshPhongMaterial",
  },
  {
    href: "https://threejs.org/docs/api/en/materials/MeshPhysicalMaterial.html",
    label: "MeshPhysicalMaterial",
  },
  {
    href: "https://threejs.org/docs/api/en/materials/MeshStandardMaterial.html",
    label: "MeshStandardMaterial",
  },
  {
    href: "https://threejs.org/docs/api/en/materials/MeshToonMaterial.html",
    label: "MeshToonMaterial",
  },
  {
    href: "https://threejs.org/docs/api/en/materials/PointsMaterial.html",
    label: "PointsMaterial",
  },
  {
    href: "https://threejs.org/docs/api/en/materials/RawShaderMaterial.html",
    label: "RawShaderMaterial",
  },
  {
    href: "https://threejs.org/docs/api/en/materials/ShaderMaterial.html",
    label: "ShaderMaterial",
  },
  {
    href: "https://threejs.org/docs/api/en/materials/ShadowMaterial.html",
    label: "ShadowMaterial",
  },
  {
    href: "https://threejs.org/docs/api/en/materials/SpriteMaterial.html",
    label: "SpriteMaterial",
  },
  { href: "https://threejs.org/docs/api/en/math/Box2.html", label: "Box2" },
  { href: "https://threejs.org/docs/api/en/math/Box3.html", label: "Box3" },
  { href: "https://threejs.org/docs/api/en/math/Color.html", label: "Color" },
  {
    href: "https://threejs.org/docs/api/en/math/Cylindrical.html",
    label: "Cylindrical",
  },
  { href: "https://threejs.org/docs/api/en/math/Euler.html", label: "Euler" },
  {
    href: "https://threejs.org/docs/api/en/math/Frustum.html",
    label: "Frustum",
  },
  {
    href: "https://threejs.org/docs/api/en/math/Interpolant.html",
    label: "Interpolant",
  },
  { href: "https://threejs.org/docs/api/en/math/Line3.html", label: "Line3" },
  {
    href: "https://threejs.org/docs/api/en/math/MathUtils.html",
    label: "MathUtils",
  },
  {
    href: "https://threejs.org/docs/api/en/math/Matrix3.html",
    label: "Matrix3",
  },
  {
    href: "https://threejs.org/docs/api/en/math/Matrix4.html",
    label: "Matrix4",
  },
  { href: "https://threejs.org/docs/api/en/math/Plane.html", label: "Plane" },
  {
    href: "https://threejs.org/docs/api/en/math/Quaternion.html",
    label: "Quaternion",
  },
  { href: "https://threejs.org/docs/api/en/math/Ray.html", label: "Ray" },
  { href: "https://threejs.org/docs/api/en/math/Sphere.html", label: "Sphere" },
  {
    href: "https://threejs.org/docs/api/en/math/Spherical.html",
    label: "Spherical",
  },
  {
    href: "https://threejs.org/docs/api/en/math/SphericalHarmonics3.html",
    label: "SphericalHarmonics3",
  },
  {
    href: "https://threejs.org/docs/api/en/math/Triangle.html",
    label: "Triangle",
  },
  {
    href: "https://threejs.org/docs/api/en/math/Vector2.html",
    label: "Vector2",
  },
  {
    href: "https://threejs.org/docs/api/en/math/Vector3.html",
    label: "Vector3",
  },
  {
    href: "https://threejs.org/docs/api/en/math/Vector4.html",
    label: "Vector4",
  },
  {
    href: "https://threejs.org/docs/api/en/math/interpolants/CubicInterpolant.html",
    label: "CubicInterpolant",
  },
  {
    href: "https://threejs.org/docs/api/en/math/interpolants/DiscreteInterpolant.html",
    label: "DiscreteInterpolant",
  },
  {
    href: "https://threejs.org/docs/api/en/math/interpolants/LinearInterpolant.html",
    label: "LinearInterpolant",
  },
  {
    href: "https://threejs.org/docs/api/en/math/interpolants/QuaternionLinearInterpolant.html",
    label: "QuaternionLinearInterpolant",
  },
  { href: "https://threejs.org/docs/api/en/objects/Bone.html", label: "Bone" },
  {
    href: "https://threejs.org/docs/api/en/objects/Group.html",
    label: "Group",
  },
  {
    href: "https://threejs.org/docs/api/en/objects/InstancedMesh.html",
    label: "InstancedMesh",
  },
  { href: "https://threejs.org/docs/api/en/objects/Line.html", label: "Line" },
  {
    href: "https://threejs.org/docs/api/en/objects/LineLoop.html",
    label: "LineLoop",
  },
  {
    href: "https://threejs.org/docs/api/en/objects/LineSegments.html",
    label: "LineSegments",
  },
  { href: "https://threejs.org/docs/api/en/objects/LOD.html", label: "LOD" },
  { href: "https://threejs.org/docs/api/en/objects/Mesh.html", label: "Mesh" },
  {
    href: "https://threejs.org/docs/api/en/objects/Points.html",
    label: "Points",
  },
  {
    href: "https://threejs.org/docs/api/en/objects/Skeleton.html",
    label: "Skeleton",
  },
  {
    href: "https://threejs.org/docs/api/en/objects/SkinnedMesh.html",
    label: "SkinnedMesh",
  },
  {
    href: "https://threejs.org/docs/api/en/objects/Sprite.html",
    label: "Sprite",
  },
  {
    href: "https://threejs.org/docs/api/en/renderers/WebGLMultipleRenderTargets.html",
    label: "WebGLMultipleRenderTargets",
  },
  {
    href: "https://threejs.org/docs/api/en/renderers/WebGLMultisampleRenderTarget.html",
    label: "WebGLMultisampleRenderTarget",
  },
  {
    href: "https://threejs.org/docs/api/en/renderers/WebGLRenderer.html",
    label: "WebGLRenderer",
  },
  {
    href: "https://threejs.org/docs/api/en/renderers/WebGL1Renderer.html",
    label: "WebGL1Renderer",
  },
  {
    href: "https://threejs.org/docs/api/en/renderers/WebGLRenderTarget.html",
    label: "WebGLRenderTarget",
  },
  {
    href: "https://threejs.org/docs/api/en/renderers/WebGLCubeRenderTarget.html",
    label: "WebGLCubeRenderTarget",
  },
  {
    href: "https://threejs.org/docs/api/en/renderers/shaders/ShaderChunk.html",
    label: "ShaderChunk",
  },
  {
    href: "https://threejs.org/docs/api/en/renderers/shaders/ShaderLib.html",
    label: "ShaderLib",
  },
  {
    href: "https://threejs.org/docs/api/en/renderers/shaders/UniformsLib.html",
    label: "UniformsLib",
  },
  {
    href: "https://threejs.org/docs/api/en/renderers/shaders/UniformsUtils.html",
    label: "UniformsUtils",
  },
  {
    href: "https://threejs.org/docs/api/en/renderers/webxr/WebXRManager.html",
    label: "WebXRManager",
  },
  { href: "https://threejs.org/docs/api/en/scenes/Fog.html", label: "Fog" },
  {
    href: "https://threejs.org/docs/api/en/scenes/FogExp2.html",
    label: "FogExp2",
  },
  { href: "https://threejs.org/docs/api/en/scenes/Scene.html", label: "Scene" },
  {
    href: "https://threejs.org/docs/api/en/textures/CanvasTexture.html",
    label: "CanvasTexture",
  },
  {
    href: "https://threejs.org/docs/api/en/textures/CompressedTexture.html",
    label: "CompressedTexture",
  },
  {
    href: "https://threejs.org/docs/api/en/textures/CubeTexture.html",
    label: "CubeTexture",
  },
  {
    href: "https://threejs.org/docs/api/en/textures/DataTexture.html",
    label: "DataTexture",
  },
  {
    href: "https://threejs.org/docs/api/en/textures/DataTexture2DArray.html",
    label: "DataTexture2DArray",
  },
  {
    href: "https://threejs.org/docs/api/en/textures/DataTexture3D.html",
    label: "DataTexture3D",
  },
  {
    href: "https://threejs.org/docs/api/en/textures/DepthTexture.html",
    label: "DepthTexture",
  },
  {
    href: "https://threejs.org/docs/api/en/textures/Texture.html",
    label: "Texture",
  },
  {
    href: "https://threejs.org/docs/api/en/textures/VideoTexture.html",
    label: "VideoTexture",
  },
  {
    href: "https://threejs.org/docs/examples/en/animations/CCDIKSolver.html",
    label: "CCDIKSolver",
  },
  {
    href: "https://threejs.org/docs/examples/en/animations/MMDAnimationHelper.html",
    label: "MMDAnimationHelper",
  },
  {
    href: "https://threejs.org/docs/examples/en/animations/MMDPhysics.html",
    label: "MMDPhysics",
  },
  {
    href: "https://threejs.org/docs/examples/en/controls/DeviceOrientationControls.html",
    label: "DeviceOrientationControls",
  },
  {
    href: "https://threejs.org/docs/examples/en/controls/DragControls.html",
    label: "DragControls",
  },
  {
    href: "https://threejs.org/docs/examples/en/controls/FirstPersonControls.html",
    label: "FirstPersonControls",
  },
  {
    href: "https://threejs.org/docs/examples/en/controls/FlyControls.html",
    label: "FlyControls",
  },
  {
    href: "https://threejs.org/docs/examples/en/controls/OrbitControls.html",
    label: "OrbitControls",
  },
  {
    href: "https://threejs.org/docs/examples/en/controls/PointerLockControls.html",
    label: "PointerLockControls",
  },
  {
    href: "https://threejs.org/docs/examples/en/controls/TrackballControls.html",
    label: "TrackballControls",
  },
  {
    href: "https://threejs.org/docs/examples/en/controls/TransformControls.html",
    label: "TransformControls",
  },
  {
    href: "https://threejs.org/docs/examples/en/geometries/ConvexGeometry.html",
    label: "ConvexGeometry",
  },
  {
    href: "https://threejs.org/docs/examples/en/geometries/DecalGeometry.html",
    label: "DecalGeometry",
  },
  {
    href: "https://threejs.org/docs/examples/en/helpers/LightProbeHelper.html",
    label: "LightProbeHelper",
  },
  {
    href: "https://threejs.org/docs/examples/en/helpers/PositionalAudioHelper.html",
    label: "PositionalAudioHelper",
  },
  {
    href: "https://threejs.org/docs/examples/en/helpers/RectAreaLightHelper.html",
    label: "RectAreaLightHelper",
  },
  {
    href: "https://threejs.org/docs/examples/en/helpers/VertexNormalsHelper.html",
    label: "VertexNormalsHelper",
  },
  {
    href: "https://threejs.org/docs/examples/en/helpers/VertexTangentsHelper.html",
    label: "VertexTangentsHelper",
  },
  {
    href: "https://threejs.org/docs/examples/en/lights/LightProbeGenerator.html",
    label: "LightProbeGenerator",
  },
  {
    href: "https://threejs.org/docs/examples/en/loaders/3DMLoader.html",
    label: "3DMLoader",
  },
  {
    href: "https://threejs.org/docs/examples/en/loaders/BasisTextureLoader.html",
    label: "BasisTextureLoader",
  },
  {
    href: "https://threejs.org/docs/examples/en/loaders/DRACOLoader.html",
    label: "DRACOLoader",
  },
  {
    href: "https://threejs.org/docs/examples/en/loaders/GLTFLoader.html",
    label: "GLTFLoader",
  },
  {
    href: "https://threejs.org/docs/examples/en/loaders/KTX2Loader.html",
    label: "KTX2Loader",
  },
  {
    href: "https://threejs.org/docs/examples/en/loaders/MMDLoader.html",
    label: "MMDLoader",
  },
  {
    href: "https://threejs.org/docs/examples/en/loaders/MTLLoader.html",
    label: "MTLLoader",
  },
  {
    href: "https://threejs.org/docs/examples/en/loaders/OBJLoader.html",
    label: "OBJLoader",
  },
  {
    href: "https://threejs.org/docs/examples/en/loaders/PCDLoader.html",
    label: "PCDLoader",
  },
  {
    href: "https://threejs.org/docs/examples/en/loaders/PDBLoader.html",
    label: "PDBLoader",
  },
  {
    href: "https://threejs.org/docs/examples/en/loaders/PRWMLoader.html",
    label: "PRWMLoader",
  },
  {
    href: "https://threejs.org/docs/examples/en/loaders/SVGLoader.html",
    label: "SVGLoader",
  },
  {
    href: "https://threejs.org/docs/examples/en/loaders/TGALoader.html",
    label: "TGALoader",
  },
  {
    href: "https://threejs.org/docs/examples/en/objects/Lensflare.html",
    label: "Lensflare",
  },
  {
    href: "https://threejs.org/docs/examples/en/postprocessing/EffectComposer.html",
    label: "EffectComposer",
  },
  {
    href: "https://threejs.org/docs/examples/en/exporters/GLTFExporter.html",
    label: "GLTFExporter",
  },
  {
    href: "https://threejs.org/docs/examples/en/exporters/PLYExporter.html",
    label: "PLYExporter",
  },
  {
    href: "https://threejs.org/docs/examples/en/exporters/ColladaExporter.html",
    label: "ColladaExporter",
  },
  {
    href: "https://threejs.org/docs/examples/en/math/Lut.html",
    label: "LookupTable",
  },
  {
    href: "https://threejs.org/docs/examples/en/math/MeshSurfaceSampler.html",
    label: "MeshSurfaceSampler",
  },
  { href: "https://threejs.org/docs/examples/en/math/OBB.html", label: "OBB" },
  {
    href: "https://threejs.org/docs/examples/en/math/convexhull/Face.html",
    label: "Face",
  },
  {
    href: "https://threejs.org/docs/examples/en/math/convexhull/HalfEdge.html",
    label: "HalfEdge",
  },
  {
    href: "https://threejs.org/docs/examples/en/math/convexhull/ConvexHull.html",
    label: "ConvexHull",
  },
  {
    href: "https://threejs.org/docs/examples/en/math/convexhull/VertexNode.html",
    label: "VertexNode",
  },
  {
    href: "https://threejs.org/docs/examples/en/math/convexhull/VertexList.html",
    label: "VertexList",
  },
  {
    href: "https://threejs.org/docs/examples/en/renderers/CSS2DRenderer.html",
    label: "CSS2DRenderer",
  },
  {
    href: "https://threejs.org/docs/examples/en/renderers/CSS3DRenderer.html",
    label: "CSS3DRenderer",
  },
  {
    href: "https://threejs.org/docs/examples/en/renderers/SVGRenderer.html",
    label: "SVGRenderer",
  },
  {
    href: "https://threejs.org/docs/examples/en/utils/BufferGeometryUtils.html",
    label: "BufferGeometryUtils",
  },
  {
    href: "https://threejs.org/docs/examples/en/utils/CameraUtils.html",
    label: "CameraUtils",
  },
  {
    href: "https://threejs.org/docs/examples/en/utils/SceneUtils.html",
    label: "SceneUtils",
  },
  {
    href: "https://threejs.org/docs/examples/en/utils/SkeletonUtils.html",
    label: "SkeletonUtils",
  },
  {
    href: "https://threejs.org/docs/api/en/Polyfills.html",
    label: "Polyfills",
  },
  {
    href: "https://threejs.org/docs/api/en/renderers/webgl/WebGLProgram.html",
    label: "WebGLProgram",
  },
  {
    href: "https://threejs.org/docs/api/en/renderers/webgl/WebGLShader.html",
    label: "WebGLShader",
  },
  {
    href: "https://threejs.org/docs/api/en/renderers/webgl/WebGLState.html",
    label: "WebGLState",
  },
];
const searchRes = document.querySelector("#search-res");
const mask = document.querySelector("#mask");

const listRender = () => {
  const mainLs = document.querySelector("#main-ls");
  mainLs.innerHTML = "";
  const fragment = document.createDocumentFragment();
  items.forEach(({ label, href }) => {
    const li = document.createElement("li");
    li.classList.add("item");
    const a = document.createElement("a");
    a.href = href;
    a.target = "_blank";
    a.appendChild(document.createTextNode(label));
    li.appendChild(a);
    fragment.appendChild(li);
  });
  mainLs.appendChild(fragment);
};

const filterResRender = (keyword) => {
  const resCon = document.querySelector("#search-res > ul");
  resCon.innerHTML = "";
  const filteredItems = keyword
    ? items
        .filter(({ label }) => {
          const reg = new RegExp(keyword, "gi");
          return label.match(reg);
        })
        .map((item) => {
          const reg = new RegExp(`(${keyword})`, "gi");
          item.html = keyword
            ? item.label.replace(reg, '<span class="search-match">$1</span>')
            : label;
          return item;
        })
    : [];
  const fragment = document.createDocumentFragment();
  filteredItems.forEach(({ html, href }) => {
    const li = document.createElement("li");
    li.classList.add("item");
    const a = document.createElement("a");
    a.href = href;
    a.target = "_blank";
    a.innerHTML = html;
    li.appendChild(a);
    fragment.appendChild(li);
  });
  resCon.appendChild(fragment);
};

const checkScroll = () => {
  const container = document.querySelector(".container");
  const searchCon = document.querySelector(".search-con");
  const rect = searchCon.getBoundingClientRect();
  if (rect.top > 60) {
    const offset = document.body.offsetHeight / 2 - 100;
    console.log(offset);
    let scroll = 0;
    const duration = 200;
    const gap = 20;
    const times = duration / gap;
    const step = offset / times;
    const i = setInterval(() => {
      scroll += step;
      container.scrollTo({ top: scroll });
      if (scroll >= offset) clearInterval(i);
    }, gap);
  }
};

const showSearchRes = () => {
  checkScroll();
  searchRes.classList.add("show");
  searchRes.classList.remove("hide");
};
const hideSearchRes = () => {
  searchRes.classList.remove("show");
  searchRes.classList.add("hide");
};
const showMask = () => {
  mask.classList.add("show");
  mask.classList.remove("hide");
};
const hideMask = () => {
  mask.classList.remove("show");
  mask.classList.add("hide");
};

const searchInputHandler = (e) => {
  const { value } = e.target;
  filterResRender(value);
  if (value) {
    showSearchRes();
    showMask();
  } else {
    hideSearchRes();
    hideMask();
  }
};
const searchFocusHandler = (e) => {
  searchInputHandler(e);
  window.addEventListener("keyup", handleCancelSearch);
};
const searchBlurHandler = (e) => {
  window.removeEventListener("keyup", handleCancelSearch);
};

const handleCancelSearch = (e) => {
  if (e.code === "Escape") {
    document.querySelector("input#search").value = "";
    hideMask();
    hideSearchRes();
  }
};

window.onload = () => {
  listRender();

  const searchInput = document.querySelector("input#search");
  searchInput.addEventListener("input", searchInputHandler);
  searchInput.addEventListener("focus", searchFocusHandler);
  searchInput.addEventListener("blur", searchBlurHandler);
};

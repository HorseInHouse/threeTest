顶点着色器内置全局变量
----
+ attribute vec3 position;
描述：顶点位置。
含义：定义顶点的三维位置。

+ attribute vec3 normal;
描述：顶点法向量。
含义：用于光照计算，定义顶点的法向量方向。

+ attribute vec2 uv;
描述：纹理坐标。
含义：定义顶点的纹理坐标，用于纹理映射。

+ uniform mat4 modelViewMatrix;
描述：模型视图矩阵。
含义：将顶点从模型坐标系变换到视图坐标系。

+ uniform mat4 projectionMatrix;
描述：投影矩阵。
含义：将顶点从视图坐标系变换到裁剪坐标系。

+ uniform mat4 modelViewProjectionMatrix;
描述：模型视图投影矩阵。
含义：将顶点从模型坐标系直接变换到裁剪坐标系。

+ uniform mat3 normalMatrix;
描述：法向量变换矩阵。
含义：用于变换法向量，使其正确地反映在视图坐标系中。

+ varying vec3 vNormal;
描述：传递给片段着色器的法向量。
含义：在顶点着色器中计算并传递到片段着色器。

+ varying vec2 vUv;
描述：传递给片段着色器的纹理坐标。
含义：在顶点着色器中计算并传递到片段着色器。

片段着色器内置全局变量
------------------------------------------------
+ uniform sampler2D texture;
描述：2D 纹理采样器。
含义：用于纹理映射。

+ uniform vec4 color;
描述：颜色。
含义：定义片段的颜色。

+ varying vec3 vNormal;
描述：从顶点着色器传递来的法向量。
含义：用于光照计算。

+ varying vec2 vUv;
描述：从顶点着色器传递来的纹理坐标。
含义：用于纹理映射。

+ gl_FragColor
描述：输出的片段颜色。
含义：定义最终渲染的颜色。

+ gl_FragCoord
描述：当前片段的窗口坐标。
含义：定义片段在窗口中的坐标位置。

+ gl_PointCoord
描述：当前片段的点精灵坐标。
含义：用于点精灵的纹理映射。


+ u_time：传递时间信息。
+ u_resolution：传递屏幕分辨率信息，通常用于调整渲染效果。
+ u_mouse：传递鼠标位置信息，通常用于交互式效果。
+ u_cameraPosition：传递相机位置信息，通常用于计算视角相关的效果。
+ u_texture：传递纹理贴图，用于在着色器中对纹理进行采样。
+ u_projectionMatrix 和 u_modelViewMatrix：传递投影矩阵和模型视图矩阵，用于进行顶点变换。
+ u_normalMatrix：传递法线矩阵，用于在着色器中对法线进行变换。



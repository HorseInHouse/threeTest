### 常用内置变量
+ position

### 将物体的顶点从模型空间转换到剪裁空间
gl_Position = projectionMatrix * modelViewMatrix * vec4(vec3(x,y,z),1.0)

#version 330 core

out vec4 outFragColor;

void main() {
	vec3 color = vec3(1.0, 0.0, 0.0);

   outFragColor = vec4(color.xyz, 1.0);
}

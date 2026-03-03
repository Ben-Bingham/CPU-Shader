#pragma once

#include "glm/glm.hpp"

using CPUShader = glm::vec4 (*)(glm::vec2 uv, glm::ivec2 screenSize, float time, void* userData);

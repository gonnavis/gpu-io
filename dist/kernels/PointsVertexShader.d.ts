declare const _default: "\nprecision highp float;\n\nattribute int aIndex; // Index of point.\n\nuniform sampler2D u_position; // Texture lookup with position data.\nuniform vec2 u_positionDimensions;\nuniform vec2 u_scale;\nuniform float u_pointSize;\n\nvarying vec2 vUV;\n\nvoid main() {\n\t// Calculate a uv based on the point's index attribute.\n\tvec2 positionUV = vec2(aIndex % u_positionDimensions, floor(aIndex / u_positionDimensions)) / u_positionDimensions;\n\n\t// Lookup vertex position.\n\tvec2 position = texture2D(u_position, positionUV) * u_scale;\n\n\t// Calculate a global uv for the viewport.\n\tvUV = 0.5 * (position + 1.0);\n\n\tgl_PointSize = u_pointSize;\n\tgl_Position = vec4(position, 0, 1);\n}\n";
export default _default;

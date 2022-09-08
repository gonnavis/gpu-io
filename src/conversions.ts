import {
	BYTE,
	FLOAT,
	GLSL1,
	GLSLPrecision,
	GLSLVersion,
	GPULayerNumComponents,
	GPULayerType,
	HALF_FLOAT,
	INT,
	PRECISION_HIGH_P,
	PRECISION_LOW_P,
	PRECISION_MEDIUM_P,
	SHORT,
	UINT,
	UNSIGNED_BYTE,
	UNSIGNED_INT,
	UNSIGNED_SHORT,
} from './constants';

/**
 * Enum for precision values.
 * See src/glsl/common/precision.ts for more info.
 * @private
 */
 export function intForPrecision(precision: GLSLPrecision) {
	if (precision === PRECISION_HIGH_P) return 2;
	if (precision === PRECISION_MEDIUM_P) return 1;
	if (precision === PRECISION_LOW_P) return 0;
	throw new Error(`Unknown shader precision value: ${JSON.stringify(precision)}.`);
}

/**
 * @private
 */
export function uniformTypeForType(type: GPULayerType, glslVersion: GLSLVersion) {
	switch (type) {
		case HALF_FLOAT:
		case FLOAT:
			return FLOAT;
		case UNSIGNED_BYTE:
		case UNSIGNED_SHORT:
		case UNSIGNED_INT:
			if (glslVersion === GLSL1) return INT;
			return UINT;
		case BYTE:
		case SHORT:
		case INT:
			return INT;
		default:
			throw new Error(`Invalid type: ${type} passed to glslKeyForType.`);
	}
}

/**
 * @private
 */
export function glslTypeForType(type: GPULayerType, numComponents: GPULayerNumComponents) {
	switch (type) {
		case HALF_FLOAT:
		case FLOAT:
			if (numComponents === 1) return 'float';
			return `vec${numComponents}`;
		case UNSIGNED_BYTE:
		case UNSIGNED_SHORT:
		case UNSIGNED_INT:
			if (numComponents === 1) return 'uint';
			return `uvec${numComponents}`;
		case BYTE:
		case SHORT:
		case INT:
			if (numComponents === 1) return 'int';
			return `ivec${numComponents}`;
		default:
			throw new Error(`Invalid type: ${type} passed to glslTypeForType.`);
	}
}

/**
 * @private
 */
 export function glslPrefixForType(type: GPULayerType) {
	switch (type) {
		case HALF_FLOAT:
		case FLOAT:
			return '';
		case UNSIGNED_BYTE:
		case UNSIGNED_SHORT:
		case UNSIGNED_INT:
			return 'u';
		case BYTE:
		case SHORT:
		case INT:
			return 'i';
		default:
			throw new Error(`Invalid type: ${type} passed to glslPrefixForType.`);
	}
}
import { WebGLCompute } from '.';
import { DataLayerArray, DataLayerFilter, DataLayerNumComponents, DataLayerType, DataLayerWrap } from './Constants';
export declare class DataLayer {
    private readonly glcompute;
    readonly name: string;
    readonly type: DataLayerType;
    readonly numComponents: DataLayerNumComponents;
    readonly filter: DataLayerFilter;
    readonly wrapS: DataLayerWrap;
    readonly wrapT: DataLayerWrap;
    readonly writable: boolean;
    private _clearValue;
    private _bufferIndex;
    readonly numBuffers: number;
    private readonly buffers;
    private _length?;
    private _width;
    private _height;
    readonly glInternalFormat: number;
    readonly glFormat: number;
    readonly internalType: DataLayerType;
    readonly glType: number;
    readonly glNumChannels: number;
    readonly internalFilter: DataLayerFilter;
    readonly glFilter: number;
    readonly internalWrapS: DataLayerWrap;
    readonly glWrapS: number;
    readonly internalWrapT: DataLayerWrap;
    readonly glWrapT: number;
    private textureOverrides?;
    constructor(glcompute: WebGLCompute, params: {
        name: string;
        dimensions: number | [number, number];
        type: DataLayerType;
        numComponents: DataLayerNumComponents;
        array?: DataLayerArray | number[];
        filter?: DataLayerFilter;
        wrapS?: DataLayerWrap;
        wrapT?: DataLayerWrap;
        writable?: boolean;
        numBuffers?: number;
        clearValue?: number | number[];
    });
    private static calcSize;
    private static getInternalWrap;
    private static getInternalFilter;
    private static getInternalType;
    private static shouldCastIntTypeAsFloat;
    private static getGLTextureParameters;
    private static testFramebufferWrite;
    get bufferIndex(): number;
    saveCurrentStateToDataLayer(layer: DataLayer): void;
    _setCurrentStateTexture(texture: WebGLTexture): void;
    private static initArrayForInternalType;
    private validateDataArray;
    private initBuffers;
    getStateAtIndex(index: number): WebGLTexture;
    get currentState(): WebGLTexture;
    get lastState(): WebGLTexture;
    _usingTextureOverrideForCurrentBuffer(): WebGLTexture | undefined;
    _bindOutputBufferForWrite(incrementBufferIndex: boolean): void;
    _bindOutputBuffer(): void;
    setFromArray(array: DataLayerArray | number[], applyToAllBuffers?: boolean): void;
    resize(dimensions: number | [number, number], array?: DataLayerArray | number[]): void;
    get clearValue(): number | number[];
    set clearValue(clearValue: number | number[]);
    clear(applyToAllBuffers?: boolean): void;
    get width(): number;
    get height(): number;
    get length(): number;
    private destroyBuffers;
    dispose(): void;
    clone(name?: string): DataLayer;
}
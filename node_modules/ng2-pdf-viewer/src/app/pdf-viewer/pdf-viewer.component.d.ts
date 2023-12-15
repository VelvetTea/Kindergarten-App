/**
 * Created by vadimdez on 21/06/16.
 */
import { ElementRef, EventEmitter, OnChanges, SimpleChanges, OnInit, OnDestroy, AfterViewChecked, NgZone } from '@angular/core';
import * as PDFJSViewer from 'pdfjs-dist/web/pdf_viewer';
import type { PDFSource, PDFProgressData, ZoomScale } from './typings';
import { PDFSinglePageViewer } from 'pdfjs-dist/web/pdf_viewer';
import * as i0 from "@angular/core";
export declare enum RenderTextMode {
    DISABLED = 0,
    ENABLED = 1,
    ENHANCED = 2
}
export declare class PdfViewerComponent implements OnChanges, OnInit, OnDestroy, AfterViewChecked {
    private element;
    private ngZone;
    static CSS_UNITS: number;
    static BORDER_WIDTH: number;
    pdfViewerContainer: ElementRef<HTMLDivElement>;
    eventBus: PDFJSViewer.EventBus;
    pdfLinkService: PDFJSViewer.PDFLinkService;
    pdfFindController: PDFJSViewer.PDFFindController;
    pdfViewer: PDFJSViewer.PDFViewer | PDFSinglePageViewer;
    private isVisible;
    private _cMapsUrl;
    private _imageResourcesPath;
    private _renderText;
    private _renderTextMode;
    private _stickToPage;
    private _originalSize;
    private _pdf;
    private _page;
    private _zoom;
    private _zoomScale;
    private _rotation;
    private _showAll;
    private _canAutoResize;
    private _fitToPage;
    private _externalLinkTarget;
    private _showBorders;
    private lastLoaded;
    private _latestScrolledPage;
    private resizeTimeout;
    private pageScrollTimeout;
    private isInitialized;
    private loadingTask?;
    private destroy$;
    afterLoadComplete: EventEmitter<import("pdfjs-dist/types/src/display/api").PDFDocumentProxy>;
    pageRendered: EventEmitter<CustomEvent<any>>;
    pageInitialized: EventEmitter<CustomEvent<any>>;
    textLayerRendered: EventEmitter<CustomEvent<any>>;
    onError: EventEmitter<any>;
    onProgress: EventEmitter<PDFProgressData>;
    pageChange: EventEmitter<number>;
    src?: string | Uint8Array | PDFSource;
    set cMapsUrl(cMapsUrl: string);
    set page(_page: number | string | any);
    set renderText(renderText: boolean);
    set renderTextMode(renderTextMode: RenderTextMode);
    set originalSize(originalSize: boolean);
    set showAll(value: boolean);
    set stickToPage(value: boolean);
    set zoom(value: number);
    get zoom(): number;
    set zoomScale(value: ZoomScale);
    get zoomScale(): ZoomScale;
    set rotation(value: number);
    set externalLinkTarget(value: string);
    set autoresize(value: boolean);
    set fitToPage(value: boolean);
    set showBorders(value: boolean);
    static getLinkTarget(type: string): any;
    constructor(element: ElementRef<HTMLElement>, ngZone: NgZone);
    ngAfterViewChecked(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    updateSize(): void;
    clear(): void;
    private getPDFLinkServiceConfig;
    private initEventBus;
    private initPDFServices;
    private getPDFOptions;
    private setupViewer;
    private getValidPageNumber;
    private getDocumentParams;
    private loadPDF;
    private update;
    private render;
    private getScale;
    private resetPdfDocument;
    private initialize;
    private setupResizeListener;
    static ɵfac: i0.ɵɵFactoryDeclaration<PdfViewerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PdfViewerComponent, "pdf-viewer", never, { "src": { "alias": "src"; "required": false; }; "cMapsUrl": { "alias": "c-maps-url"; "required": false; }; "page": { "alias": "page"; "required": false; }; "renderText": { "alias": "render-text"; "required": false; }; "renderTextMode": { "alias": "render-text-mode"; "required": false; }; "originalSize": { "alias": "original-size"; "required": false; }; "showAll": { "alias": "show-all"; "required": false; }; "stickToPage": { "alias": "stick-to-page"; "required": false; }; "zoom": { "alias": "zoom"; "required": false; }; "zoomScale": { "alias": "zoom-scale"; "required": false; }; "rotation": { "alias": "rotation"; "required": false; }; "externalLinkTarget": { "alias": "external-link-target"; "required": false; }; "autoresize": { "alias": "autoresize"; "required": false; }; "fitToPage": { "alias": "fit-to-page"; "required": false; }; "showBorders": { "alias": "show-borders"; "required": false; }; }, { "afterLoadComplete": "after-load-complete"; "pageRendered": "page-rendered"; "pageInitialized": "pages-initialized"; "textLayerRendered": "text-layer-rendered"; "onError": "error"; "onProgress": "on-progress"; "pageChange": "pageChange"; }, never, never, false, never, false>;
}

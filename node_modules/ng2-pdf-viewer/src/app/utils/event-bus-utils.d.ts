import { Subject } from 'rxjs';
import type { EventBus } from 'pdfjs-dist/web/pdf_viewer';
export declare function createEventBus(pdfJsViewer: any, destroy$: Subject<void>): EventBus;

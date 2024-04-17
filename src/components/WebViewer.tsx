"use client"

import { useEffect, useRef } from 'react';

interface FileProps {
    file: any
}

export default function WebView ({ file }: FileProps) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current; // This `useRef` instance will render the PDF.

    let PSPDFKit: { unload?: any; load?: any; defaultToolbarItems?: any; Action?: any; Annotation?: any; AnnotationsWillChangeReason?: any; Bookmark?: any; ButtonFormField?: any; CheckBoxFormField?: any; ChoiceFormField?: any; Color?: any; ComboBoxFormField?: any; Comment?: any; CommentMarkerAnnotation?: any; Conformance?: any; CustomOverlayItem?: any; DrawingPoint?: any; EllipseAnnotation?: any; Font?: any; FormField?: any; FormFieldValue?: any; FormOption?: any; GoToAction?: any; GoToEmbeddedAction?: any; GoToRemoteAction?: any; HideAction?: any; HighlightAnnotation?: any; ImageAnnotation?: any; InkAnnotation?: any; Inset?: any; Instance?: any; InstantClient?: any; Interfaces?: any; JavaScriptAction?: any; LaunchAction?: any; LineAnnotation?: any; LinkAnnotation?: any; List?: any; ListBoxFormField?: any; NamedAction?: any; NoteAnnotation?: any; OutlineElement?: any; PageInfo?: any; Point?: any; PolygonAnnotation?: any; PolylineAnnotation?: any; RadioButtonFormField?: any; Rect?: any; RectangleAnnotation?: any; RedactionAnnotation?: any; ResetFormAction?: any; SearchResult?: any; SearchState?: any; ShapeAnnotation?: any; SignatureFormField?: any; Size?: any; SquiggleAnnotation?: any; StampAnnotation?: any; StrikeOutAnnotation?: any; SubmitFormAction?: any; TextAnnotation?: any; TextFormField?: any; TextLine?: any; TextMarkupAnnotation?: any; TextSelection?: any; URIAction?: any; UnderlineAnnotation?: any; UnknownAnnotation?: any; ViewState?: any; WidgetAnnotation?: any; default?: any; }, instance;
    
    (async function () {
      PSPDFKit = await import("pspdfkit")

		PSPDFKit.unload(container) // Ensure that there's only one PSPDFKit instance.

      instance = await PSPDFKit.load({
        // Container where PSPDFKit should be mounted.
        container,
        // The document to open.
        document: file.url, 
        // Use the public directory URL as a base URL. PSPDFKit will download its library assets from here.
        baseUrl: `${window.location.protocol}//${window.location.host}/`,
        licenseKey: 'Z2bvg3Ajcd2P7tqINW4RTZOpkG0mvK3ZDAbW6327E4Euzs7OcDP0Urn4oN5-V48EtpbMQ5TVO3R_30KCoviuCPmW15V-bazMfcdcajVLq-ZupxxzpklaigjXhoWbp_azMlcCwAyhbGLRL1QNGODdPDcDT7lxLcjUkhuNKhcUn_Dxl83m0eoU5-gQaXWcv_aG5PTN_fLwh85GmYA',
        toolbarItems: [
          ...PSPDFKit.defaultToolbarItems,
          { type: "content-editor" }
        ]
      });
    })();
    
    return () => PSPDFKit && PSPDFKit.unload(container)
  }, []);

  return (
    <>
      <div ref={containerRef} 
        style={{
          height: '100%',
          width: '100%'
        }}
      ></div>
    </>
  );
}
import { MutableRefObject } from "react";

export default function toggleFullScreen(ref: MutableRefObject<HTMLDivElement | null>) {
  var doc = (window as any).document;
  var docEl = ref.current;

  var requestFullScreen = docEl?.requestFullscreen;
  var cancelFullScreen =
    doc.exitFullscreen ||
    doc.mozCancelFullScreen ||
    doc.webkitExitFullscreen ||
    doc.msExitFullscreen;

  if (
    !doc.fullscreenElement &&
    !doc.mozFullScreenElement &&
    !doc.webkitFullscreenElement &&
    !doc.msFullscreenElement
  ) {
    requestFullScreen?.call(docEl);
    // alert("open")
  } else {
    cancelFullScreen.call(doc);
  }
}

// export default class PDFJs {
//     init = (source, element) => {
//         const iframe = document.createElement("iframe");
//         console.log("source ********** ", source)
//         iframe.src = `/pdfjs-2.13.216-dist/web/viewver.html?file=${source}`;
//         iframe.width = '100%';
//         iframe.height = '100%';
//         // const textNode = document.createElement('p')
//         // textNode.innerHTML = `Our PDF Source will be : ${source}`;

//         element.appendChild(iframe)
//     }
// }
export default class PDFJs {
    init = (source, element) => {
        const iframe = document.createElement('iframe');

        iframe.src = `/pdfjs-2.13.216-dist/web/viewer.html?file=${source}`;
        iframe.width = '100%';
        iframe.height = '100%';

        element.appendChild(iframe);
    }
}
import TurnDown from "turndown"


export function turndownService() {
  // Create a new instance of TurnDown to convert HTML to Markdown
    let service = new TurnDown({
      headingStyle: "atx",
      bulletListMarker: "-",

    })

    // Strip '#' from headings
    service.addRule("headings", {
      filter: ['h1', 'h2', 'h3'],
      replacement: function(content, node, options) {
        return content
      }
    })

    // Strip '```' from pre
    service.addRule("codeBlocks", {
      filter:['pre'],
      replacement: function(content, node, options) {
        return content
      }
    })

    // Support strike through
    service.addRule('strikethrough', {
      filter: ['del', 's', 'strike'],
      replacement: function (content) {
        return '~~' + content + '~~'
      }
    });

    // Add a rule to ignore <form></form> elements
    service.remove(['form'])

    return service
}

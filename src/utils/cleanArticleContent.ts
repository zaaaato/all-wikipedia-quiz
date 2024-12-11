export const cleanArticleContent = (content: string): string => {
  // Remove class and style definitions
  content = content.replace(/class=["'][^"']*["']/g, "");
  content = content.replace(/style=["'][^"']*["']/g, "");

  // Remove HTML comments
  content = content.replace(/<!--[\s\S]*?-->/g, "");

  // Remove inline scripts or script tags
  content = content.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "");

  // Remove unwanted HTML tags (like <img>, <span> with unwanted attributes)
  content = content.replace(/<img[^>]*>/g, "");
  content = content.replace(/<span[^>]*>/g, "").replace(/<\/span>/g, "");

  // Remove unwanted wiki-style markup (like {{...}} or [[...]])
  content = content.replace(/\{\{[\s\S]*?\}\}/g, "");
  content = content.replace(/\[\[[^\]]*\]\]/g, "");

  // Remove unnecessary whitespace and empty lines
  content = content.replace(/^\s*[\r\n]/gm, ""); // Empty lines
  content = content.replace(/\s{2,}/g, " "); // Extra spaces

  // Remove special hidden metadata (e.g., ".mw-parser-output" specific to MediaWiki)
  content = content.replace(/\.mw-parser-output[^\{]*\{[^\}]*\}/g, "");

  return content.trim(); // Return the cleaned-up content
};

import Remarkable from 'remarkable';
import hljs from 'highlight.js';

export default function transformMarkdownToHTML(input) {
  let markdown = new Remarkable({
    highlight: (string, language) => {
      if (language && hljs.getLanguage(language)) {
        try {
          return hljs.highlight(language, string).value;
        } catch (error) {}
      }

      try {
        return hljs.highlightAuto(string).value;
      } catch (error) {}

      return ''; // use external default escaping
    }
  });

  return markdown.render(input);
}

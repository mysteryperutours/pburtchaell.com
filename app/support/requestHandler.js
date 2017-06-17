// @flow
import { createClient } from 'contentful';

var client = createClient({
  space: 'zj3fkmar2hjx',
  accessToken: '48e59dfaa3797f188fccd0e6238cf0bd8015d371afeb52d4c605312ed1adc3b6'
})

function requestHandler(pathname: string): Promise<*> {
  function filterImage(image) {
    return {
      id: image.sys.id,
      description: image.fields.description,
      title: image.fields.title,
      url: image.fields.file.url,
      height: image.fields.file.details.image.height,
      width: image.fields.file.details.image.width
    };
  }

  function filterItem(item) {
    return {
      body: item.fields.body,
      title: item.fields.title,
      tags: item.fields.tags,
      year: item.fields.year,
      color: item.fields.color,
      isPromoted: item.fields.isPromoted,
      pathname: item.fields.pathname,
      question: item.fields.question,
      featuredImage: filterImage(item.fields.featuredImage),
      images: item.fields.images ? item.fields.images.map(filterImage) : null,
      id: item.sys.id,
      createdAt: item.sys.createdAt,
      updatedAt: item.sys.updatedAt,
      link: item.fields.link,
      linkTitle: item.fields.linkTitle
    };
  }

  let clientOptions = pathname ? {
    'content_type': '2wKn6yEnZewu2SCCkus4as',
    'fields.pathname[match]': pathname
  } : {
    'content_type': '2wKn6yEnZewu2SCCkus4as',
    'order': '-fields.year'
  };

  return client.getEntries(clientOptions).then(response => {
    return response.items.map(filterItem);
  }).then(data => {
    this.setState({
      data,
      isPending: false
    });
  });
}

export default requestHandler;

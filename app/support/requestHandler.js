// @flow
import { createClient } from 'contentful';

const client = createClient({
  space: 'zj3fkmar2hjx',
  accessToken: '48e59dfaa3797f188fccd0e6238cf0bd8015d371afeb52d4c605312ed1adc3b6'
});

function requestHandler(pathname: string): Promise<*> {
  function filterMedia(media) {
    if (media.fields.file.contentType === 'video/mp4') {
      return {
        id: media.sys.id,
        type: 'video',
        contentType: media.fields.file.contentType,
        description: media.fields.description,
        title: media.fields.title,
        url: media.fields.file.url
      };
    }

    return {
      id: media.sys.id,
      type: 'image',
      description: media.fields.description,
      title: media.fields.title,
      url: media.fields.file.url,
      height: media.fields.file.details.image.height,
      width: media.fields.file.details.image.width
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
      featuredImage: filterMedia(item.fields.featuredImage),
      images: item.fields.images ? item.fields.images.map(filterMedia) : null,
      id: item.sys.id,
      createdAt: item.sys.createdAt,
      updatedAt: item.sys.updatedAt,
      link: item.fields.link,
      linkTitle: item.fields.linkTitle
    };
  }

  const clientOptions = pathname ? {
    content_type: '2wKn6yEnZewu2SCCkus4as',
    'fields.pathname[match]': pathname
  } : {
    content_type: '2wKn6yEnZewu2SCCkus4as',
    order: '-fields.year'
  };

  return client.getEntries(clientOptions)
  .then(response => response.items.map(filterItem))
  .then(data => this.setState({
    data,
    isPending: false
  }));
}

export default requestHandler;

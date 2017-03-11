// @flow

function requestHandler(url: string, options: Object = {}): Promise<*> {
  return fetch(`https://${url}`, options).then((response) => {
    if (response.status === 200) {
      return response.json();
    }

    throw new Error();
  }).then(
    (data) => {
      if (data.data) {
        this.setState({
          data: data.data,
          meta: data.meta,
          isPending: false
        });
      } else {
        this.setState({
          data,
          isPending: false
        });
      }
    },
    () => this.setState({
      isRejected: true
    })
  );
}

export default requestHandler;

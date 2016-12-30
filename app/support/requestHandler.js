// @flow

function requestHandler(url: string, options: Object = {}): Promise<*> {
  return fetch(`https://${url}`, options).then((response) => {
    if (response.status === 200) {
      return response.json();
    }

    throw new Error();
  }).then(
    data => this.setState({
      data,
      isPending: false
    }),
    () => this.setState({
      isRejected: true
    })
  );
}

export default requestHandler;

import React from 'react';
import autobind from 'autobind-decorator'
import Newsletter from 'components/newsletter';

/**
 * @class Card
 * @description A card on the writing or portfolio pages.
 */
export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }
  }

  static propTypes = {
    link: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    image: React.PropTypes.string.isRequired,
  };


  @autobind
  handleClick(event) {
    this.setState({
      isActive: true
    });
  }

  get style() {
    if (!this.state.isActive) {
      return {};
    }

    return {
      minHeight: '100vh',
      width: '100vw',
      top: 0,
      left: 0,
      zIndex: 3,
      background: '#fff',
      color: '#000'
    };
  }

  @autobind
  getBackgroundStyle() {
    return {
      backgroundImage: `url(${this.props.image})`,
    };
  }

  get className() {
    const className  = !this.state.isActive ? '' : 'active';
    return className;
  }

  render() {
    return (
      <article
        className={this.className}
        style={this.style}
        onClick={this.handleClick}>
          <header>
            <hgroup>
              <small>
                <time>June 14, 2015</time>
              </small>
              <h1>{this.props.title}</h1>
              <div>{this.props.description}</div>
            </hgroup>
          </header>
          <section>
            <p>I love to talk and I thrive on conversation. I like to debate, to collaborate, to combine other ideas with mine. All of this I do through conversation with others. Sometimes these conversations happen on <a href="http://twitter.com/pburtchaell/" data-href="http://twitter.com/pburtchaell/" rel="nofollow">Twitter</a>, sometimes they happen over the phone, sometimes with a text, but for me, the best conversations are held in person.</p>
            <p>However, when I am going out with my friends, we are always on our phones. I never get to hold deep conversations, conversations that matter, with my friends anymore. We are simply too involved with our phones. There is always a group message to reply to and someone to send a ridiculous Snapchat to.</p>
            <p>And yes, I say <strong>we</strong>. Dont try to lie to yourself. If you own a smartphone, you know it can be a distraction.</p>
            <p>By the end of 2013, there will be more mobile devices than people on the planet. Information is everywhere: photos, video, sound, and general data and it will only continue to grow. <a href="http://www.gartner.com/newsroom/id/2408515" rel="nofollow">Half a billion tablets will ship</a> by 2014.</p>
            <figure>
              <img src="https://ununsplash.imgix.net/photo-1429616588302-fec569e203ce?fit=crop&fm=jpg&h=700&q=75&w=1050" />
              <figcaption>Some awesome looking lake</figcaption>
            </figure>
            <p>Screens are everywhere.</p>
            <p>Distractions are everywhere.</p>
            <p>Over the past month, I have begun to notice this more and now try to avoid using my phone for unnecessary communication. I have uninstalled Facebook & Twitter and changed the settings on my phone to only check my email once every hour. I have done tons to disconnect myself and it helps make me way more aware of what is really happening.</p>
          </section>
          <footer>
            <Newsletter />
            <p>
              <small>Patrick Burtchaell is a design and computer science undergrade student at Loyola University New Orleans and co-founder of Lawn Chair Studios.</small>
              <hr />
              <small>Share on Twitter and Facebook.</small>
            </p>
          </footer>
      </article>
    );
  }
}

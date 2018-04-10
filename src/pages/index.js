import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import PageContainer from '../components/PageContainer'
import Row from '../components/Row'
import Column from '../components/Column'
import ListViewItem from '../components/ListView'
import Text, {types as textTypes} from '../components/Text'

// Define the default filters used by the index page
const DEFAULT_FILTER_TYPES = {
  FEATURED: 'FEATURED',
  DESIGN: 'Product Design',
  SOFTWARE_DEVELOPMENT: 'Open Source',
}

/*
 * Function: FilterTab
 * Description: Renders a clickable tab that can be used to switch between
 * different project categories.
 */
const FilterTab = (props) => {
  const {
    filterType,
    filterLabel,
    activeFilterType,
    filterIndex,
    onClick,
  } = props

  // Define available styles for a tab
  const defaultStyle = {display: 'inline-block', cursor: 'pointer'}
  const activeStyle = {color: 'blue', borderBottom: '1px solid blue'}
  const paddedStyle = {marginLeft: '2rem'}

  // Construct styles for the tab
  const style = {
    // Always include the default style
    ...defaultStyle,
    // Include active styles if the filter is active
    ...(filterType === activeFilterType) ? activeStyle : {},
    // Include padding if the filter is not first
    ...(filterIndex === 0) ? {} : paddedStyle,
  }

  return (
    <Text
      key={filterType}
      type={textTypes.HEADER_3}
      className="project-tabs__tab"
      onClick={onClick}
      style={style}
    >
      {filterLabel}
    </Text>
  )
}

FilterTab.propTypes = {
  filterType: PropTypes.oneOf([
    DEFAULT_FILTER_TYPES.FEATURED,
    DEFAULT_FILTER_TYPES.DESIGN,
    DEFAULT_FILTER_TYPES.SOFTWARE_DEVELOPMENT,
  ]).isRequired,
  filterLabel: PropTypes.string.isRequired,
  activeFilterType: PropTypes.string.isRequired,
  filterIndex: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}

/*
 * Class: FilterProjects
 * Description: Renders a filtered list of projects for the index page and a
 * tab bar for switching the active filter.
 */
class FilterProjects extends Component {
  constructor(props, context) {
    super(props, context)

    // Define the filters (used to filter the array of projects)
    this.filterTypes = DEFAULT_FILTER_TYPES

    // Define the filter tabs (used to render tabs in the UI)
    this.filterTabs = [
      {id: 0, label: 'Featured', type: this.filterTypes.FEATURED},
      {id: 1, label: 'Design', type: this.filterTypes.DESIGN},
      {id: 0, label: 'Software Development', type: this.filterTypes.SOFTWARE_DEVELOPMENT},
    ]

    // Get the initial set of filtered projects
    const initialFilter = this.filterTypes.FEATURED
    const initialProjects = this.filterByCategory(props.projects, initialFilter)

    this.state = {
      // The initial filter
      activeFilterType: initialFilter,
      // The initial set of filtered projects
      filteredProjects: initialProjects,
    }

    this.filterByCategory = this.filterByCategory.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
  }

  /*
   * Function: filterByCategory
   * Description
   */
  filterByCategory(projects, nextFilter) {
    return projects.edges
      // Reduce the projects.edges[] array
      .map(({node}) => node)
      // Filter based off category or featured flag
      .filter(({frontmatter}) => {
        if (nextFilter === this.filterTypes.FEATURED) {
          return frontmatter.featured === true
        } else {
          return frontmatter.category === nextFilter
        }
      })
  }

  /*
   * Function: filterByCategory
   * Description: Given the next filter, calls filterByCategory and sets the
   * compoent state with the next array of filtered projects.
   */
  handleFilter(event, nextFilterType) {
    const {activeFilterType} = this.state
    const {projects} = this.props

    event.preventDefault()

    if (nextFilterType === activeFilterType) {
      return
    }

    this.setState({
      activeFilterType: nextFilterType,
      filteredProjects: this.filterByCategory(projects, nextFilterType),
    })
  }

  render() {
    const {filterTabs} = this
    const {activeFilterType, filteredProjects} = this.state

    // Enable the tab bar to scroll on small screens
    // Todo: there's probably a better implementation for this, but this works
    // for the time being--until I have more time.
    const tabContainerSyle = {
      position: 'relative',
      height: '4rem',
      overflowX: 'scroll',
    }

    const tabBarStyle = {
      position: 'absolute',
      width: '350px',
    }

    return this.props.visible && (
      <Row paddingSize="large" rowSize="large">
        <Column largeSize={12} smallSize={12}>
          <Text type={textTypes.HEADER_2}>
            Work
          </Text>
          <div className="project-tabs__container" style={tabContainerSyle}>
            <div className="project-tabs__bar" style={tabBarStyle}>
              {filterTabs.map(({id, type, label}, filterTabIndex) => (
                <FilterTab
                  key={id}
                  filterType={type}
                  filterLabel={label}
                  // Get the active filter (from the component state)
                  activeFilterType={activeFilterType}
                  filterIndex={filterTabIndex}
                  onClick={(event) => this.handleFilter(event, type)}
                />
              ))}
            </div>
          </div>
        </Column>
        {filteredProjects.map((project) => (
          <Column
            key={project.fields.slug}
            largeSize={4}
            smallSize={12}
          >
            <ListViewItem
              title={project.frontmatter.title}
              date={project.frontmatter.date}
              path={project.frontmatter.path}
              category={project.frontmatter.category}
              linkTo={project.fields.slug}
            />
          </Column>
        ))}
      </Row>
    )
  }
}

FilterProjects.propTypes = {
  visible: PropTypes.bool.isRequired,
  projects: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string.isRequired,
        fields: PropTypes.shape({
          slug: PropTypes.string.isRequired,
        }).isRequired,
        frontmatter: PropTypes.shape({
          title: PropTypes.string.isRequired,
          category: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
        }),
      }),
    })),
  }),
}

/*
 * Function: IndexPage
 * Description: Renders the home page for the site.
 */
const IndexPage = ({data}) => {
  const {projects, site} = data
  const {enablePortfolio, portfolioCompanies} = site.metadata

  // Define the profiles to render on the index page
  const socialProfiles = [
    {id: 0, label: 'Facebook', linkTo: 'https://facebook.com/pburtchaell'},
    {id: 1, label: 'Github', linkTo: 'https://github.com/pburtchaell'},
    {id: 2, label: 'Twitter', linkTo: 'https://twitter.com/pburtchaell'},
    {id: 3, label: 'Dribbble', linkTo: 'https://dribbble.com/pburtchaell'},
  ]

  return (
    <PageContainer
      pageTitle="Home"
      siteTitle={site.metadata.title}
      siteUrl={site.metadata.url}
      description={site.metadata.description}
      keywords={site.metadata.keywords}
    >
      <Fragment>
        <Row paddingSize="large" rowSize="large">
          <Column largeSize={4} smallSize={12} className="index__about">
            <Text>{site.metadata.description}</Text>
            <Text type={textTypes.SMALL}>
              {site.metadata.introduction}
            </Text>
          </Column>
          <Column largeSize={2} smallSize={12} />
          <Column largeSize={2} smallSize={12}>
            {!enablePortfolio && (
              <Fragment>
                <Text type={textTypes.HEADER_2}>
                  Company
                </Text>
                <ul>
                  {portfolioCompanies.map((company) => (
                    <li key={company}>
                      {company}
                    </li>
                  ))}
                </ul>
              </Fragment>
            )}
          </Column>
          <Column largeSize={4} smallSize={12} className="index__profiles">
            <Text type={textTypes.HEADER_2}>
              Profiles
            </Text>
            <ul>
              {socialProfiles.map(({id, label, linkTo}) => (
                <li key={id}>
                  <a
                    href={linkTo}
                    target="_blank"
                    title={`Patrick Burtchaell on ${label}`}
                    aria-label={`Patrick Burtchaell on ${label}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </Column>
        </Row>
        <FilterProjects
          projects={projects}
          visible={site.metadata.enablePortfolio}
        />
      </Fragment>
    </PageContainer>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    projects: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          id: PropTypes.string.isRequired,
          fields: PropTypes.shape({
            slug: PropTypes.string.isRequired,
          }).isRequired,
          frontmatter: PropTypes.shape({
            title: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
          }),
        }),
      })),
    }),
    site: PropTypes.shape({
      metadata: PropTypes.shape({
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        introduction: PropTypes.string.isRequired,
        keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
        enablePortfolio: PropTypes.bool.isRequired,
        portfolioCompanies: PropTypes.arrayOf(PropTypes.string).isRequired,
      }),
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      metadata: siteMetadata {
        url
        title
        description
        introduction
        keywords
        enablePortfolio
        portfolioCompanies
      }
    }
    projects: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "project" }
          published: { eq: true }
        }
      }
      sort: {
        fields: [ frontmatter___date ],
        order: DESC
      }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            featured
            date(formatString: "YYYY")
            category
          }
        }
      }
    }
  }
`

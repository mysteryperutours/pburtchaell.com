import paths from '../paths';
import WorkItemRoute from './component';

export default {
  path: paths.WORK_ITEM,
  props: {
    config: {
      defaultTheme: false,
      header: {
        type: 'transparent',
        isInterpolated: true
      },
      footer: {
        backgroundColor: '#E6E6E6',
        linkBackTo: {
          link: paths.WORK,
          title: 'All Work'
        },
        linkBackToTop: true
      }
    },
  },
  component: WorkItemRoute
};

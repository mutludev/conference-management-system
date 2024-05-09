import { ProjectOutlined, UserOutlined, FileOutlined } from '@ant-design/icons-vue'
import AdminView from '../views/AdminView.vue'
import AttendeeView from '../views/AttendeeView.vue'
import ReviewerView from '../views/ReviewerView.vue'
import OrganizerView from '@/views/OrganizerView.vue'
import AuthorEventView from '@/views/AuthorEventView.vue'
import AuthorView from '@/views/AuthorView.vue'

export const roleComponentMapping = {
  admin: {
    home: AdminView
  },
  attendee: {
    home: AttendeeView
  },
  reviewer: {
    home: ReviewerView
  },
  organizer: {
    home: OrganizerView
  },
  author: {
    home: AuthorEventView,
    papers: AuthorView
  }
}

export const linkMapping = {
  attendee: [{ name: 'Events', path: 'home', icon: ProjectOutlined }],
  admin: [{ name: 'Members', path: 'home', icon: UserOutlined }],
  organizer: [{ name: 'Events', path: 'home', icon: ProjectOutlined }],
  reviewer: [{ name: 'Papers', path: 'home', icon: FileOutlined }],
  author: [
    { name: 'Events', path: 'home', icon: ProjectOutlined },
    { name: 'My Papers', path: 'papers', icon: FileOutlined }
  ]
}
